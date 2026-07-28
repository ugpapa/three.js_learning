import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import GUI from 'lil-gui';
import { createApp } from '../shared/app.js';

/**
 * 텍스처와 환경맵 — 프로덕트 스튜디오.
 * 1) CanvasTexture로 절차적 텍스처를 만들어 colorSpace의 의미를 배우고,
 * 2) RoomEnvironment + PMREM으로 이미지 파일 없이 환경 조명을 구성해
 *    금속·유리 재질이 "무엇을 반사하는가"를 이해합니다.
 */
const app = createApp({ canvas: document.querySelector('#app'), shadows: true });
const { scene, camera, renderer } = app;

camera.position.set(0, 2.2, 6.5);
scene.background = new THREE.Color(0x15171c);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);

// ── 환경맵: 파일 없이 절차적 스튜디오 환경 생성 ──────────────
const pmrem = new THREE.PMREMGenerator(renderer);
const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environment = envMap;   // 장면의 모든 PBR 재질이 이 환경을 조명으로 사용

// ── 절차적 체커 텍스처 (CanvasTexture) ─────────────────────
function createCheckerTexture(size = 512, cells = 8) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cell = size / cells;
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#d9d9d9' : '#3b3f46';
      ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace; // 색상 텍스처는 반드시 sRGB로 선언
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  return texture;
}

const floor = new THREE.Mesh(
  new THREE.CylinderGeometry(4, 4, 0.2, 64),
  new THREE.MeshStandardMaterial({ map: createCheckerTexture(), roughness: 0.6 }),
);
floor.position.y = -0.1;
floor.receiveShadow = true;
scene.add(floor);

// ── 전시 오브젝트 3종: 금속 · 유리 · 도자기 ─────────────────
const metal = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.18, 200, 32),
  new THREE.MeshStandardMaterial({ color: 0xd8d8d8, metalness: 1, roughness: 0.12 }),
);
metal.position.set(-2.2, 1.1, 0);

const glass = new THREE.Mesh(
  new THREE.SphereGeometry(0.75, 64, 32),
  new THREE.MeshPhysicalMaterial({
    transmission: 1,       // 물리 기반 투과 — 진짜 유리처럼 뒤가 굴절되어 보입니다
    thickness: 0.8,
    roughness: 0.05,
    ior: 1.5,
  }),
);
glass.position.set(0, 1.1, 0);

const ceramic = new THREE.Mesh(
  new THREE.IcosahedronGeometry(0.75, 0),
  new THREE.MeshPhysicalMaterial({
    color: 0xdd4444,
    roughness: 0.4,
    clearcoat: 1,          // 표면 위 얇은 코팅층 — 자동차 도장·도자기 유약 표현
    clearcoatRoughness: 0.1,
  }),
);
ceramic.position.set(2.2, 1.1, 0);

[metal, glass, ceramic].forEach((mesh) => {
  mesh.castShadow = true;
  scene.add(mesh);
});

// ── 그림자용 보조 조명(환경맵은 그림자를 만들지 못합니다) ────
const sun = new THREE.DirectionalLight(0xffffff, 1.2);
sun.position.set(4, 7, 3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
scene.add(sun);

// ── GUI ───────────────────────────────────────────────────
const gui = new GUI({ title: '프로덕트 스튜디오' });
gui.add(renderer, 'toneMappingExposure', 0.2, 2.5, 0.01).name('노출(exposure)');
const glassFolder = gui.addFolder('유리');
glassFolder.add(glass.material, 'transmission', 0, 1, 0.01);
glassFolder.add(glass.material, 'roughness', 0, 1, 0.01);
glassFolder.add(glass.material, 'ior', 1, 2.33, 0.01);
const metalFolder = gui.addFolder('금속');
metalFolder.add(metal.material, 'metalness', 0, 1, 0.01);
metalFolder.add(metal.material, 'roughness', 0, 1, 0.01);

app.start((delta) => {
  metal.rotation.y += delta * 0.5;
  ceramic.rotation.y -= delta * 0.35;
  controls.update();
});
