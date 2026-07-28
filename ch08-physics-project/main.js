import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import RAPIER from '@dimforge/rapier3d-compat';
import { createApp } from '../shared/app.js';

/**
 * 물리 엔진 종합 프로젝트 — 도미노 런.
 *
 * 구조 원칙:
 *  - 물리 세계(Rapier)와 화면(three.js)은 완전히 분리된 두 세계다.
 *  - 물리 스텝은 고정 시간 간격으로 돌리고,
 *  - 매 프레임 "물리 바디 → 메쉬"로 위치·회전을 복사한다.
 */
await RAPIER.init(); // WASM 초기화 — 최상위 await (Vite 기본 지원)

const app = createApp({ canvas: document.querySelector('#app'), shadows: true });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x11141a);
scene.fog = new THREE.Fog(0x11141a, 20, 45);
camera.position.set(-9, 8, 12);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0.5, 0);

// ── 물리 세계 ─────────────────────────────────────────────
const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });

/** 물리 바디와 메쉬를 짝지어 보관하는 목록 */
const bodies = [];

function register(mesh, body) {
  mesh.castShadow = true;
  scene.add(mesh);
  bodies.push({ mesh, body });
  return { mesh, body };
}

// ── 바닥 (고정 바디) ───────────────────────────────────────
const floorMesh = new THREE.Mesh(
  new THREE.BoxGeometry(40, 0.5, 40),
  new THREE.MeshStandardMaterial({ color: 0x232a36, roughness: 0.9 }),
);
floorMesh.position.y = -0.25;
floorMesh.receiveShadow = true;
scene.add(floorMesh);

const floorBody = world.createRigidBody(
  RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.25, 0),
);
world.createCollider(RAPIER.ColliderDesc.cuboid(20, 0.25, 20), floorBody);

// ── 조명 ──────────────────────────────────────────────────
const sun = new THREE.DirectionalLight(0xfff4e0, 2.4);
sun.position.set(8, 14, 6);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = sun.shadow.camera.bottom = -18;
sun.shadow.camera.right = sun.shadow.camera.top = 18;
scene.add(sun, new THREE.HemisphereLight(0x9db4d8, 0x2b2620, 0.5));

// ── 도미노 배치: S자 곡선을 따라 세우기 ─────────────────────
// 로컬 z축이 경로 진행 방향을 향하므로, 얇은 축(thickness)을 z에 둡니다.
const DOMINO = { width: 0.7, height: 1.4, thickness: 0.18 };
const dominoGeometry = new THREE.BoxGeometry(DOMINO.width, DOMINO.height, DOMINO.thickness);

/** 곡선 위 t(0~1) 지점의 위치 — CatmullRom 곡선으로 S자 경로 정의 */
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-8, 0, -6),
  new THREE.Vector3(-2, 0, -7),
  new THREE.Vector3(3, 0, -3),
  new THREE.Vector3(2, 0, 3),
  new THREE.Vector3(7, 0, 6),
]);

const DOMINO_COUNT = 40;

function spawnDominoes() {
  for (let i = 0; i < DOMINO_COUNT; i++) {
    const t = i / (DOMINO_COUNT - 1);
    const point = path.getPointAt(t);
    const tangent = path.getTangentAt(t);
    const yaw = Math.atan2(tangent.x, tangent.z); // 진행 방향을 바라보도록 회전

    const mesh = new THREE.Mesh(
      dominoGeometry,
      new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(t * 0.85, 0.65, 0.55),
        roughness: 0.45,
      }),
    );

    const body = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(point.x, DOMINO.height / 2, point.z)
        .setRotation(quaternionFromYaw(yaw)),
    );
    world.createCollider(
      // 콜라이더 반지름(half-extents)은 반드시 메쉬 지오메트리와 같은 축 배치를 써야 합니다.
      RAPIER.ColliderDesc.cuboid(DOMINO.width / 2, DOMINO.height / 2, DOMINO.thickness / 2)
        .setDensity(2.0)
        .setFriction(0.6),
      body,
    );

    register(mesh, body);
  }
}

function quaternionFromYaw(yaw) {
  const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
  return { x: q.x, y: q.y, z: q.z, w: q.w };
}

// ── 공 발사 ────────────────────────────────────────────────
const ballGeometry = new THREE.SphereGeometry(0.45, 32, 16);
const ballMaterial = new THREE.MeshStandardMaterial({
  color: 0xe8e8e8, metalness: 0.8, roughness: 0.25,
});

function launchBall() {
  const start = path.getPointAt(0);
  const direction = path.getTangentAt(0).normalize();
  const origin = start.clone().sub(direction.clone().multiplyScalar(4)).setY(1.2);

  const mesh = new THREE.Mesh(ballGeometry, ballMaterial);
  const body = world.createRigidBody(
    RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(origin.x, origin.y, origin.z)
      .setLinvel(direction.x * 14, 1.5, direction.z * 14), // 초기 속도
  );
  world.createCollider(
    RAPIER.ColliderDesc.ball(0.45).setDensity(3.0).setRestitution(0.4),
    body,
  );
  register(mesh, body);
}

// ── 리셋: 동적 바디를 모두 제거하고 도미노를 다시 세운다 ─────
function reset() {
  for (const { mesh, body } of bodies) {
    world.removeRigidBody(body);
    scene.remove(mesh);
    mesh.material.dispose?.(); // 도미노는 개별 재질이므로 함께 해제
  }
  bodies.length = 0;
  spawnDominoes();
}

document.querySelector('#launch').addEventListener('click', launchBall);
document.querySelector('#reset').addEventListener('click', reset);
renderer.domElement.addEventListener('pointerdown', launchBall);

spawnDominoes();

// ── 고정 시간 스텝 물리 루프 ────────────────────────────────
const FIXED_STEP = 1 / 60;
let accumulator = 0;

app.start((delta) => {
  // 프레임레이트가 요동쳐도 물리 결과가 일정하도록 누적기 방식 사용
  accumulator += Math.min(delta, 0.1); // 탭 전환 등 긴 공백 프레임 방어
  while (accumulator >= FIXED_STEP) {
    world.step();
    accumulator -= FIXED_STEP;
  }

  // 물리 → 화면 동기화
  for (const { mesh, body } of bodies) {
    const p = body.translation();
    const q = body.rotation();
    mesh.position.set(p.x, p.y, p.z);
    mesh.quaternion.set(q.x, q.y, q.z, q.w);
  }

  controls.update();
});
