import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createApp } from '../shared/app.js';

/**
 * InstancedMesh 그리드 웨이브 — 지오메트리와 GPU의 관계를 배우는 예제.
 *
 * 큐브 10,000개를 메쉬 10,000개로 만들면 드로우콜 10,000회로 브라우저가 버겁지만,
 * InstancedMesh는 같은 지오메트리·재질을 공유하며 "변환 행렬 배열"만 인스턴스마다
 * 다르게 넘겨 단 1회의 드로우콜로 그립니다. 에이전시 사이트의 대량 오브젝트
 * 비주얼이 거의 모두 이 기법입니다.
 */
const app = createApp({ canvas: document.querySelector('#app') });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x0d1017);
scene.fog = new THREE.Fog(0x0d1017, 18, 42);
camera.position.set(0, 12, 18);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.46;

// ── 그리드 정의 ────────────────────────────────────────────
const GRID = 100;                  // 100 × 100 = 10,000 인스턴스
const COUNT = GRID * GRID;
const SPACING = 0.34;
document.querySelector('#count').textContent = COUNT.toLocaleString();

// 지오메트리와 재질은 단 1개씩만 생성됩니다.
const geometry = new THREE.BoxGeometry(0.24, 1, 0.24);
geometry.translate(0, 0.5, 0);     // 원점을 바닥면으로 — 높이 스케일의 기준점이 됩니다
const material = new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.3 });

const grid = new THREE.InstancedMesh(geometry, material, COUNT);
grid.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // 매 프레임 갱신을 GPU에 힌트
scene.add(grid);

// 인스턴스별 색: setColorAt은 instanceColor 속성을 만들어 줍니다.
const colorA = new THREE.Color(0x1c2d55);
const colorB = new THREE.Color(0x5fd0ff);
const tempColor = new THREE.Color();

// 변환 계산용 임시 객체 — 매 프레임 new 하지 않고 재사용합니다.
const dummy = new THREE.Object3D();

// 각 인스턴스의 XZ 좌표를 미리 계산해 둡니다.
const positions = [];
for (let ix = 0; ix < GRID; ix++) {
  for (let iz = 0; iz < GRID; iz++) {
    positions.push({
      x: (ix - GRID / 2 + 0.5) * SPACING,
      z: (iz - GRID / 2 + 0.5) * SPACING,
    });
  }
}

// ── 조명 ──────────────────────────────────────────────────
const key = new THREE.DirectionalLight(0xffffff, 2.0);
key.position.set(6, 10, 4);
scene.add(key, new THREE.HemisphereLight(0x8fb4ff, 0x10131c, 0.5));

// ── 마우스 리플: 보이지 않는 바닥 평면과의 교차점을 추적 ────
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2(10, 10);        // 화면 밖 초깃값
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const ripple = new THREE.Vector3(1000, 0, 1000);  // 마우스가 가리키는 지면 좌표

window.addEventListener('pointermove', (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

app.start((delta, elapsed) => {
  // 마우스 광선과 지면의 교차점 갱신
  raycaster.setFromCamera(pointer, camera);
  raycaster.ray.intersectPlane(groundPlane, ripple);

  for (let i = 0; i < COUNT; i++) {
    const { x, z } = positions[i];

    // 기본 파형: 두 방향 사인파의 간섭
    let height =
      1.2 +
      Math.sin(x * 0.7 + elapsed * 1.6) * 0.5 +
      Math.sin(z * 0.6 + elapsed * 1.1) * 0.5;

    // 마우스 주변 융기: 거리 기반 가우시안 감쇠
    const dx = x - ripple.x;
    const dz = z - ripple.z;
    const distSq = dx * dx + dz * dz;
    const bump = Math.exp(-distSq * 0.35) * 3.0;
    height += bump;

    dummy.position.set(x, 0, z);
    dummy.scale.set(1, height, 1);   // 바닥 기준 지오메트리라 y 스케일 = 기둥 높이
    dummy.updateMatrix();
    grid.setMatrixAt(i, dummy.matrix);

    // 높이에 따라 색 보간 — 리플 부분이 밝게 빛납니다.
    const t = THREE.MathUtils.clamp((height - 0.2) / 4.2, 0, 1);
    grid.setColorAt(i, tempColor.lerpColors(colorA, colorB, t));
  }

  grid.instanceMatrix.needsUpdate = true;  // BufferAttribute와 같은 규칙입니다
  grid.instanceColor.needsUpdate = true;

  controls.update();
});
