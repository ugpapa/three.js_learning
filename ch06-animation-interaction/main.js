import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createApp } from '../shared/app.js';

/**
 * 애니메이션과 인터랙션 — Raycaster 픽킹 + 자체 구현 카메라 트윈.
 * 외부 애니메이션 라이브러리 없이,
 * "시간 정규화(0→1) → 이징 함수 → 값 보간(lerp)"이라는
 * 모든 트위닝의 공통 원리를 직접 구현합니다.
 */
const app = createApp({ canvas: document.querySelector('#app'), shadows: true });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x101318);
camera.position.set(0, 5, 11);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// ── 전시물: 색이 다른 상자들 ────────────────────────────────
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(30, 30),
  new THREE.MeshStandardMaterial({ color: 0x232830, roughness: 0.95 }),
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

const palette = [0xff6b6b, 0xffc46b, 0x6bd0ff, 0x9bff8a, 0xb59bff, 0xff9bd2];
const boxes = [];
for (let i = 0; i < palette.length; i++) {
  const angle = (i / palette.length) * Math.PI * 2;
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 1.2, 1.2),
    new THREE.MeshStandardMaterial({ color: palette[i], roughness: 0.5 }),
  );
  box.position.set(Math.cos(angle) * 4.5, 0.6, Math.sin(angle) * 4.5);
  box.castShadow = true;
  scene.add(box);
  boxes.push(box);
}

const sun = new THREE.DirectionalLight(0xffffff, 2.2);
sun.position.set(6, 10, 4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = sun.shadow.camera.bottom = -10;
sun.shadow.camera.right = sun.shadow.camera.top = 10;
scene.add(sun, new THREE.AmbientLight(0xffffff, 0.2));

// ── 이징 함수: 트위닝의 심장 ────────────────────────────────
const easing = {
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
};

// ── 미니 트윈 엔진 ─────────────────────────────────────────
const activeTweens = [];

/** from→to로 duration초 동안 보간하며 onUpdate(현재값)를 호출합니다. */
function tween({ from, to, duration, ease = easing.easeOutCubic, onUpdate, onComplete }) {
  activeTweens.push({ from, to, duration, ease, onUpdate, onComplete, time: 0 });
}

function updateTweens(delta) {
  for (let i = activeTweens.length - 1; i >= 0; i--) {
    const t = activeTweens[i];
    t.time = Math.min(t.time + delta, t.duration);
    const progress = t.ease(t.time / t.duration);        // 0→1 정규화 후 이징
    t.onUpdate(t.from + (t.to - t.from) * progress);      // 선형 보간
    if (t.time >= t.duration) {
      activeTweens.splice(i, 1);
      t.onComplete?.();
    }
  }
}

/** Vector3 세 성분을 한 번에 트위닝하는 헬퍼 */
function tweenVector3(vector, target, duration, ease) {
  const start = vector.clone();
  tween({
    from: 0, to: 1, duration, ease,
    onUpdate: (t) => vector.lerpVectors(start, target, t),
  });
}

// ── Raycaster 픽킹 ─────────────────────────────────────────
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const HOME_POSITION = new THREE.Vector3(0, 5, 11);
const HOME_TARGET = new THREE.Vector3(0, 0, 0);

window.addEventListener('pointerdown', (event) => {
  // 화면 좌표(px) → NDC(-1 ~ +1) 변환
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(boxes);

  if (hits.length > 0) {
    const box = hits[0].object;
    // 상자 바깥쪽(원 중심 반대 방향)으로 물러난 지점에 카메라 배치
    const outward = box.position.clone().setY(0).normalize();
    const cameraGoal = box.position.clone().add(outward.multiplyScalar(3)).add(new THREE.Vector3(0, 1.6, 0));
    tweenVector3(camera.position, cameraGoal, 1.1, easing.easeInOutQuad);
    tweenVector3(controls.target, box.position.clone(), 1.1, easing.easeInOutQuad);

    // 선택 피드백: 살짝 튀어오르기
    tween({
      from: 0, to: 1, duration: 0.5, ease: easing.easeOutCubic,
      onUpdate: (t) => { box.position.y = 0.6 + Math.sin(t * Math.PI) * 0.6; },
    });
  } else {
    tweenVector3(camera.position, HOME_POSITION, 1.1, easing.easeInOutQuad);
    tweenVector3(controls.target, HOME_TARGET, 1.1, easing.easeInOutQuad);
  }
});

app.start((delta) => {
  updateTweens(delta);
  controls.update();
});
