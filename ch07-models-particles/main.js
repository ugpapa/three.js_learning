import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createApp } from '../shared/app.js';

/**
 * 모델 로딩과 파티클 — glTF 모델을 로딩 매니저·진행률 UI와 함께 불러오고,
 * 배경에는 Points 기반 은하 파티클을 절차적으로 생성합니다.
 * 핵심: 외부 모델은 "불러온 뒤 크기·중심·재질을 점검"하는 습관,
 * 파티클은 "메쉬 1만 개가 아니라 드로우콜 1개"라는 발상.
 */
const app = createApp({ canvas: document.querySelector('#app') });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x05070c);
camera.position.set(0, 0.6, 4);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 환경맵: PBR 모델을 파일 없이도 제대로 보이게 하는 가장 간단한 방법
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

// ── LoadingManager: 로딩 진행률을 UI에 연결 ─────────────────
const loadingScreen = document.querySelector('#loading');
const percentLabel = document.querySelector('#percent');

const manager = new THREE.LoadingManager();
manager.onProgress = (url, loaded, total) => {
  percentLabel.textContent = `${Math.round((loaded / total) * 100)}%`;
};
manager.onLoad = () => loadingScreen.classList.add('done');
manager.onError = (url) => { percentLabel.textContent = `로딩 실패: ${url}`; };

// ── glTF 모델 로딩 ─────────────────────────────────────────
const loader = new GLTFLoader(manager);
// BASE_URL을 붙이면 루트 배포·하위 경로 배포(GitHub Pages) 어디서든 동작합니다.
loader.load(`${import.meta.env.BASE_URL}models/DamagedHelmet.glb`, (gltf) => {
  const model = gltf.scene;

  // 외부 모델 점검 루틴: 바운딩 박스로 크기와 중심을 확인해 정규화합니다.
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const targetSize = 2;                             // 화면에서 원하는 크기
  const scale = targetSize / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(scale);
  model.position.sub(center.multiplyScalar(scale)); // 모델 중심을 원점으로

  scene.add(model);
});

// ── 은하 파티클 (Points + BufferGeometry) ──────────────────
function createGalaxy({ count = 12000, branches = 4, radius = 9 }) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const inner = new THREE.Color(0xffb37c);
  const outer = new THREE.Color(0x4a6cff);

  for (let i = 0; i < count; i++) {
    const r = Math.pow(Math.random(), 1.6) * radius;          // 중심부에 밀집
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const spinAngle = r * 0.55;                               // 나선 팔

    // 팔 주변으로 흩뿌리는 랜덤 오프셋
    const randomness = 0.35;
    const rx = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
    const ry = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * randomness * 0.6;
    const rz = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

    positions[i * 3] = Math.cos(branchAngle + spinAngle) * r + rx;
    positions[i * 3 + 1] = ry - 1.8;
    positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * r + rz;

    const mixed = inner.clone().lerp(outer, r / radius);
    colors[i * 3] = mixed.r;
    colors[i * 3 + 1] = mixed.g;
    colors[i * 3 + 2] = mixed.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.035,
    sizeAttenuation: true,          // 멀수록 작게
    vertexColors: true,
    depthWrite: false,              // 반투명 파티클의 정렬 문제 완화
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  return new THREE.Points(geometry, material);
}

const galaxy = createGalaxy({});
scene.add(galaxy);

app.start((delta) => {
  galaxy.rotation.y += delta * 0.03;
  controls.update();
});
