import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import GUI from 'lil-gui';
import { createApp } from '../shared/app.js';

/**
 * Blender × Claude 룸 뷰어 — AI 모델링 파이프라인의 종착지.
 *
 * Claude(blender-mcp)로 모델링 → Blender에서 glTF(.glb) 내보내기 →
 * public/models/room.glb 교체 → 이 페이지가 여러분의 방을 보여 줍니다.
 * 7장에서 배운 로딩·정규화 루틴을 그대로 재사용합니다.
 */
const app = createApp({ canvas: document.querySelector('#app'), shadows: true });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x14171d); // 어두운 배경 — 흰 방 모델이 또렷하게 떠 보입니다
camera.position.set(6, 5, 6);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);
controls.maxPolarAngle = Math.PI * 0.49;

// 환경맵 + 그림자 조명: Blender에서 어떤 재질로 내보내도 기본은 보이게
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
// 흰색 위주의 밝은 모델이므로 환경 조명 기여도를 절반으로 낮춥니다.
scene.environmentIntensity = 0.35;

// 환경맵이 기본 밝기를 담당하므로 태양광은 그림자와 방향감만 더합니다.
const sun = new THREE.DirectionalLight(0xffdcb2, 1.0); // 따뜻한 색온도의 주광
sun.position.set(5, 8, 4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = sun.shadow.camera.bottom = -6;
sun.shadow.camera.right = sun.shadow.camera.top = 6;
const hemi = new THREE.HemisphereLight(0xdde6f0, 0x8a7a66, 0.3);
scene.add(sun, hemi);

// 부드러운 받침 원판
const base = new THREE.Mesh(
  new THREE.CylinderGeometry(4.2, 4.2, 0.15, 64),
  new THREE.MeshStandardMaterial({ color: 0x232830, roughness: 0.9 }),
);
base.position.y = -0.08;
base.receiveShadow = true;
scene.add(base);

// ── 모델 로딩: 7장의 정규화 루틴 재사용 ─────────────────────
const loadingScreen = document.querySelector('#loading');

// ── 램프 글로우: 이름으로 램프 메쉬를 찾아 따뜻한 포인트 라이트를 붙입니다 ──
// Blender에서 부품에 붙인 이름(lamp, lantern 등)이 glTF까지 따라오므로,
// 이름 규칙만 지키면 코드가 모델 구조를 몰라도 조명을 배치할 수 있습니다.
const glowLights = []; // GUI에서 한꺼번에 조절하기 위해 모아 둡니다

function addLampGlow(model) {
  const warm = new THREE.Color(0xffb56b);
  model.traverse((obj) => {
    if (!obj.isMesh || !/lamp|lantern|shade/i.test(obj.name)) return;

    // 갓(shade) 재질을 자체 발광으로 — 램프가 "켜져 있는" 인상을 만듭니다
    obj.material = obj.material.clone();
    obj.material.emissive = warm.clone();
    obj.material.emissiveIntensity = 1.6;

    const glow = new THREE.PointLight(0xffc078, 8, 4.5, 2);
    obj.getWorldPosition(glow.position);
    glow.position.y += 0.05;
    scene.add(glow);
    glowLights.push(glow);
  });
}

const loader = new GLTFLoader();

loader.load(
  `${import.meta.env.BASE_URL}models/room.glb`,
  (gltf) => {
    const model = gltf.scene;

    // Blender에서 나온 모델은 크기·중심이 제각각 — 항상 정규화부터.
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const targetSize = 5;
    const scale = targetSize / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(scale);
    model.position.sub(center.multiplyScalar(scale)); // 중심을 원점으로
    model.position.y += (size.y * scale) / 2;         // 바닥을 y=0에

    // 모든 메쉬에 그림자 일괄 설정 — traverse 후처리 패턴
    model.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    addLampGlow(model);   // 모델 안의 램프 위치에 따뜻한 실제 광원을 심습니다
    scene.add(model);
    roomModel = model;    // 부록: 픽킹 대상으로 쓰기 위해 보관합니다
    loadingScreen.classList.add('done');
  },
  undefined,
  () => { loadingScreen.textContent = 'room.glb를 찾을 수 없습니다 — public/models/ 경로를 확인하십시오.'; },
);

// ── 부록: 6장의 픽킹 + 카메라 연출로 룸 투어 만들기 ─────────
// 지정된 가구 위에 마우스를 올리면 풍선 도움말이 뜨고,
// 클릭하면 카메라가 다가갑니다. '원래 위치로' 버튼과 Esc 키로 복귀합니다.
let roomModel = null;

// 픽킹 대상 6종 — Blender에서 붙인 부품 이름의 접두어로 판별합니다.
const PICK_TARGETS = [
  { label: 'PC',        pattern: /^(imac_|keyboard|kb_|mouse|screen_)/, desc: '10시 30분에 멈춰 있는 아이맥. 화면은 emissive 재질입니다.' },
  { label: '책상',      pattern: /^(desk_|dleg_|ped|dl_|pen|cup)/,      desc: 'Claude가 상판·다리·서랍 순서로 조립한 책상입니다.' },
  { label: '책장',      pattern: /^(sh_|s\d)/,                          desc: '칸마다 책과 수납함을 배치했습니다. 랜턴도 실제 광원입니다.' },
  { label: '침대 탁자', pattern: /^(ns_|nl_|nsl_|nplant)/,              desc: '무드등이 켜진 협탁 — 램프 글로우 슬라이더로 밝기를 바꿔 보십시오.' },
  { label: '의자',      pattern: /^ch_/,                                desc: '5개의 다리와 바퀴까지 이름 규칙으로 만든 사무용 의자입니다.' },
  { label: '창문',      pattern: /^(win_|wf_|blind|jamb_)/,             desc: '블라인드와 유리창. 유리는 투명 재질로 내보냈습니다.' },
];

/** 부품 이름으로 픽킹 대상 분류를 찾습니다. 대상이 아니면 undefined. */
const findTarget = (name) => PICK_TARGETS.find((t) => t.pattern.test(name));

const HOME_POSITION = new THREE.Vector3(6, 5, 6);
const HOME_TARGET = new THREE.Vector3(0, 1, 0);
const cameraGoal = HOME_POSITION.clone();  // damp가 따라갈 목표값
const targetGoal = HOME_TARGET.clone();

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const tooltip = document.querySelector('#tooltip');

/** 화면 좌표로 광선을 쏘아 "픽킹 대상에 속한" 첫 교차를 찾습니다. */
function pickAt(clientX, clientY) {
  if (!roomModel) return null;
  pointer.x = (clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  for (const hit of raycaster.intersectObject(roomModel, true)) {
    const target = findTarget(hit.object.name);
    if (target) return { hit, target };   // 벽·침대 등 대상 외 부품은 건너뜁니다
  }
  return null;
}

// 호버: 풍선 도움말 표시 + 커서 변경
renderer.domElement.addEventListener('pointermove', (event) => {
  const picked = pickAt(event.clientX, event.clientY);
  if (picked) {
    tooltip.innerHTML = `<b>${picked.target.label}</b><br />${picked.target.desc}`;
    tooltip.style.left = `${event.clientX + 14}px`;
    tooltip.style.top = `${event.clientY + 14}px`;
    tooltip.classList.add('show');
    renderer.domElement.style.cursor = 'pointer';
  } else {
    tooltip.classList.remove('show');
    renderer.domElement.style.cursor = '';
  }
});

// 클릭: 대상 가구로 카메라 접근 (대상이 아니면 아무 일도 하지 않습니다)
renderer.domElement.addEventListener('pointerdown', (event) => {
  const picked = pickAt(event.clientX, event.clientY);
  if (!picked) return;
  const point = picked.hit.point;
  // 클릭 지점에서 현재 카메라 방향으로 2.5m 물러난 곳이 새 카메라 위치
  const retreat = camera.position.clone().sub(point).normalize().multiplyScalar(2.5);
  cameraGoal.copy(point).add(retreat).add(new THREE.Vector3(0, 0.6, 0));
  targetGoal.copy(point);
});

/** 원래 위치로 — 버튼과 Esc 키가 이 함수를 공유합니다. */
function resetView() {
  cameraGoal.copy(HOME_POSITION);
  targetGoal.copy(HOME_TARGET);
}

document.querySelector('#home').addEventListener('click', resetView);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') resetView();
});

// ── 조명 컨트롤 GUI: 4장의 lil-gui를 조명 튜닝 도구로 재활용 ──
const gui = new GUI({ title: '조명 컨트롤' });
gui.add(renderer, 'toneMappingExposure', 0.2, 2, 0.01).name('노출');
gui.add(scene, 'environmentIntensity', 0, 1.5, 0.01).name('환경광');
gui.add(sun, 'intensity', 0, 4, 0.05).name('주광(태양)');
gui.add(hemi, 'intensity', 0, 1.5, 0.01).name('반구광');
gui.add({ glow: 8 }, 'glow', 0, 20, 0.1).name('램프 글로우')
  .onChange((v) => glowLights.forEach((light) => { light.intensity = v; }));

app.start((delta) => {
  // 2장에서 배운 지수 감쇠 보간 — 클릭할 때마다 목표만 바꾸면 이동은 여기서 알아서
  camera.position.x = THREE.MathUtils.damp(camera.position.x, cameraGoal.x, 3, delta);
  camera.position.y = THREE.MathUtils.damp(camera.position.y, cameraGoal.y, 3, delta);
  camera.position.z = THREE.MathUtils.damp(camera.position.z, cameraGoal.z, 3, delta);
  controls.target.x = THREE.MathUtils.damp(controls.target.x, targetGoal.x, 3, delta);
  controls.target.y = THREE.MathUtils.damp(controls.target.y, targetGoal.y, 3, delta);
  controls.target.z = THREE.MathUtils.damp(controls.target.z, targetGoal.z, 3, delta);

  controls.update();
});
