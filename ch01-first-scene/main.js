import * as THREE from 'three';

// ── 1. 렌더러 ──────────────────────────────────────────────
// 렌더러는 장면을 캔버스에 그리는 주체입니다. 생성 시점에 캔버스를 연결합니다.
const canvas = document.querySelector('#app');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

// ── 2. 장면과 카메라 ────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x14161a);

const camera = new THREE.PerspectiveCamera(
  60,                                      // 수직 시야각(도)
  window.innerWidth / window.innerHeight,  // 종횡비
  0.1,                                     // near 평면
  100,                                     // far 평면
);
camera.position.set(0, 1.2, 4);
camera.lookAt(0, 0, 0); // 살짝 위에서 원점의 물체를 내려다보는 구도

// ── 3. 메쉬 = 지오메트리 + 재질 ─────────────────────────────
const geometry = new THREE.TorusKnotGeometry(0.7, 0.24, 220, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0x4f8cff,
  roughness: 0.25,
  metalness: 0.6,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// ── 4. 조명 ────────────────────────────────────────────────
// MeshStandardMaterial은 물리 기반 재질이므로 빛이 없으면 검게 보입니다.
const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
keyLight.position.set(3, 4, 2);
scene.add(keyLight);
scene.add(new THREE.AmbientLight(0xffffff, 0.25));

// ── 5. 리사이즈 대응 ────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── 6. 렌더 루프 ────────────────────────────────────────────
// 프레임 간 시간 차(delta)를 사용해야 어떤 주사율에서도 같은 속도로 움직입니다.
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const delta = clock.getDelta();
  mesh.rotation.x += delta * 0.5;
  mesh.rotation.y += delta * 0.8;
  renderer.render(scene, camera);
});
