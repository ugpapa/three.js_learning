import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createApp } from '../shared/app.js';

/**
 * 부록 A — 드래곤 애니메이션 쇼케이스.
 *
 * 본문에서 다루지 않은 세 가지를 한 예제로 묶습니다.
 *  1. FBX 로딩과 텍스처 경로 재연결 (glTF가 아닌 레거시 포맷 다루기)
 *  2. AnimationMixer — 모델에 내장된 애니메이션 클립 재생과 crossFade 전환
 *  3. EffectComposer 후처리 — 블룸으로 마감 광택 더하기
 */
const app = createApp({ canvas: document.querySelector('#app'), shadows: true });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x070a10);
scene.fog = new THREE.Fog(0x070a10, 32, 72);
camera.position.set(31, 16.5, 45);
camera.far = 200;
camera.updateProjectionMatrix();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 5.2, 0);
controls.minDistance = 20;
controls.maxDistance = 76;
controls.maxPolarAngle = Math.PI / 2.04;
controls.autoRotate = true;          // 사용자가 드래그하면 잠시 멈춥니다
controls.autoRotateSpeed = 0.66;
controls.addEventListener('start', () => { controls.autoRotate = false; });

// 환경맵: 어두운 무대에서도 재질의 기본 음영이 살아 있도록 낮게 깔아 둡니다.
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.35;

// ── 후처리: RenderPass → Bloom → OutputPass ────────────────
// 후처리를 쓰면 renderer.render 대신 composer.render가 최종 출력을 담당합니다.
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.18,   // 강도 — 은은한 광택만
  0.22,   // 반경
  0.84,   // 임계값 — 밝은 부분(눈, 하이라이트)만 번지게
));
composer.addPass(new OutputPass()); // 색 공간·톤 매핑 변환을 마지막에 적용

window.addEventListener('resize', () => {
  composer.setSize(window.innerWidth, window.innerHeight);
});

// ── 무대: 텍스처 3종(색·노멀·러프니스)을 입힌 바닥 ─────────
const textureLoader = new THREE.TextureLoader();
const base = `${import.meta.env.BASE_URL}models/dragon/`;

function loadFloorTexture(file) {
  const texture = textureLoader.load(base + file);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(18, 30);
  return texture;
}
const floorColor = loadFloorTexture('Floor_Color.jpg');
floorColor.colorSpace = THREE.SRGBColorSpace; // 색 텍스처만 sRGB — 5장의 규칙

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(120, 160),
  new THREE.MeshStandardMaterial({
    map: floorColor,
    normalMap: loadFloorTexture('Floor_Normal.jpg'),
    color: 0x6f655b,
    roughness: 0.96, // 돌바닥은 거의 무광 — 러프니스를 높여 조명 번짐을 막습니다
  }),
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// ── 조명 ──────────────────────────────────────────────────
const key = new THREE.DirectionalLight(0xfff1dc, 3.6);
key.position.set(24, 30, 30); // 카메라 쪽에서 비추는 주광
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.left = key.shadow.camera.bottom = -30;
key.shadow.camera.right = key.shadow.camera.top = 30;
const rim = new THREE.DirectionalLight(0x8fb4ff, 0.7); // 뒤에서 실루엣을 따는 림 라이트
rim.position.set(-20, 18, -26);
scene.add(key, rim, new THREE.HemisphereLight(0x5f7dab, 0x241d16, 0.7));

// ── FBX 로딩: 텍스처 경로 재연결이 핵심 ────────────────────
// FBX 파일 안에는 제작 당시 컴퓨터의 텍스처 경로가 박혀 있어 그대로는 깨집니다.
// LoadingManager의 setURLModifier로 "파일 이름 → 실제 URL"을 다시 연결합니다.
const TEXTURE_MAP = new Map([
  ['Dragon_Bump_Col2.jpg', `${base}Dragon_Color.jpg`],
  ['Dragon_Nor_mirror2.jpg', `${base}Dragon_Normal.jpg`],
  ['Dragon_Nor.jpg', `${base}Dragon_Normal.jpg`],
  ['Dragon_ground_color.jpg', `${base}Dragon_Ground.jpg`],
]);

const manager = new THREE.LoadingManager();
manager.setURLModifier((url) => {
  const fileName = url.split(/[\\/]/).pop() || url;
  return TEXTURE_MAP.get(fileName) ?? url;
});
manager.onLoad = () => document.querySelector('#loading').classList.add('done');

const percentLabel = document.querySelector('#percent');
manager.onProgress = (url, loaded, total) => {
  percentLabel.textContent = `${Math.round((loaded / total) * 100)}%`;
};

// ── 애니메이션 상태 ────────────────────────────────────────
let mixer = null;
const actions = new Map();   // 'idle' | 'walk' | 'run' | 'fly' → AnimationAction
let activeAction = null;

/** 클립 이름의 표기가 제각각이라(Idel, walk02 등) 키워드로 정규화합니다. */
function normalizeClipName(name) {
  const lower = name.toLowerCase();
  if (lower.includes('idle') || lower.includes('idel')) return 'idle';
  if (lower.includes('walk')) return 'walk';
  if (lower.includes('run')) return 'run';
  if (lower.includes('fly')) return 'fly';
  return null;
}

const loader = new FBXLoader(manager);
loader.load(`${base}dragon.fbx`, (model) => {
  // 7장의 정규화 루틴: 목표 키 11.5m 기준으로 스케일, 바닥에 발 딛기
  const initialBox = new THREE.Box3().setFromObject(model);
  const scale = 11.5 / initialBox.getSize(new THREE.Vector3()).y;
  model.scale.setScalar(scale);
  model.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.x -= center.x;
  model.position.z -= center.z;
  model.position.y -= box.min.y;
  model.rotation.y = -0.52;

  // FBX 재질은 신뢰하지 않고 직접 다시 만듭니다 — 레거시 포맷의 관례
  const bodyMaterial = new THREE.MeshStandardMaterial({
    map: textureLoader.load(`${base}Dragon_Color.jpg`),
    normalMap: textureLoader.load(`${base}Dragon_Normal.jpg`),
    normalScale: new THREE.Vector2(0.28, 0.28),
    color: 0x8b7663,
    roughness: 0.9,
  });
  bodyMaterial.map.colorSpace = THREE.SRGBColorSpace;
  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: 0xf2b84a,
    emissive: 0x4f2200,
    emissiveIntensity: 0.4,
    roughness: 0.26,
  });

  model.traverse((node) => {
    if (!node.isMesh && !node.isSkinnedMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
    const lower = node.name.toLowerCase();
    node.material = lower.includes('eye') || lower.includes('auge') ? eyeMaterial : bodyMaterial;
  });

  scene.add(model);

  // ── AnimationMixer: 모델에 내장된 클립을 액션으로 등록 ──
  mixer = new THREE.AnimationMixer(model);
  for (const clip of model.animations) {
    const key = normalizeClipName(clip.name);
    if (key && !actions.has(key)) actions.set(key, mixer.clipAction(clip));
  }
  playAction('idle');
});

/** crossFade 전환: 이전 동작은 서서히 사라지고 새 동작이 서서히 차오릅니다. */
function playAction(key) {
  const nextAction = actions.get(key);
  if (!nextAction || nextAction === activeAction) return;

  nextAction.reset().fadeIn(0.35).play();
  activeAction?.fadeOut(0.35);
  activeAction = nextAction;

  document.querySelectorAll('#actions button').forEach((button) => {
    button.classList.toggle('active', button.dataset.action === key);
  });
}

// 버튼과 숫자 키를 같은 함수에 연결 — 6장에서 강조한 단일 상태 함수 원칙
document.querySelectorAll('#actions button').forEach((button) => {
  button.addEventListener('click', () => playAction(button.dataset.action));
});
const KEY_TO_ACTION = { 1: 'idle', 2: 'walk', 3: 'run', 4: 'fly' };
window.addEventListener('keydown', (event) => {
  const key = KEY_TO_ACTION[event.key];
  if (key) playAction(key);
});

// ── 렌더 루프: mixer.update(delta)가 애니메이션의 심장 ─────
// 주의: app.start()는 내부에서 renderer.render를 호출하므로 후처리와 함께 쓰면
// 한 프레임을 두 번 그리게 됩니다. 후처리를 쓸 때는 자체 루프를 구성합니다.
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const delta = clock.getDelta();
  mixer?.update(delta);
  controls.update();
  composer.render();       // renderer.render 대신 후처리 체인이 최종 화면을 그립니다
});
