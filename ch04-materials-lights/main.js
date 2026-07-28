import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { createApp } from '../shared/app.js';

/**
 * 머티리얼 쇼룸 — 같은 지오메트리에 다른 재질을 적용해 나란히 비교하고,
 * lil-gui로 roughness/metalness와 조명을 실시간으로 조정합니다.
 * 그림자는 "빛(castShadow) · 물체(cast/receive) · 렌더러(shadowMap)" 세 곳을
 * 모두 켜야 나타난다는 것이 이 장의 핵심 체크리스트입니다.
 */
const app = createApp({
  canvas: document.querySelector('#app'),
  shadows: true,
});
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x1a1d23);
camera.position.set(0, 3, 9);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);

// ── 바닥 ──────────────────────────────────────────────────
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(24, 24),
  new THREE.MeshStandardMaterial({ color: 0x2a2e36, roughness: 0.9 }),
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// ── 비교용 재질 4종 ────────────────────────────────────────
const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff6b6b }),                          // 조명 무시
  new THREE.MeshLambertMaterial({ color: 0xffc46b }),                        // 난반사만
  new THREE.MeshPhongMaterial({ color: 0x6bd0ff, shininess: 80 }),           // 고전적 하이라이트
  new THREE.MeshStandardMaterial({ color: 0xb59bff, roughness: 0.3, metalness: 0.7 }), // PBR
];
const labels = ['Basic', 'Lambert', 'Phong', 'Standard(PBR)'];

const knotGeometry = new THREE.TorusKnotGeometry(0.55, 0.2, 160, 24);
materials.forEach((material, i) => {
  const mesh = new THREE.Mesh(knotGeometry, material);
  mesh.position.set((i - 1.5) * 2.6, 1.2, 0);
  mesh.castShadow = true;
  mesh.name = labels[i];
  scene.add(mesh);
});

// ── 조명 3종 세트(3점 조명의 축소판) ────────────────────────
const key = new THREE.DirectionalLight(0xffffff, 2.5);
key.position.set(5, 8, 4);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.left = -8;
key.shadow.camera.right = 8;
key.shadow.camera.top = 8;
key.shadow.camera.bottom = -8;
scene.add(key);

const fill = new THREE.HemisphereLight(0x8fb4ff, 0x3b2f2f, 0.5);
scene.add(fill);

const rim = new THREE.SpotLight(0xffffff, 30, 0, Math.PI / 7, 0.4);
rim.position.set(-6, 6, -4);
scene.add(rim);

// ── GUI ───────────────────────────────────────────────────
const gui = new GUI({ title: '머티리얼 쇼룸' });

const pbr = materials[3];
const pbrFolder = gui.addFolder('Standard(PBR) 재질');
pbrFolder.add(pbr, 'roughness', 0, 1, 0.01);
pbrFolder.add(pbr, 'metalness', 0, 1, 0.01);
pbrFolder.addColor({ color: `#${pbr.color.getHexString()}` }, 'color')
  .onChange((v) => pbr.color.set(v));

const lightFolder = gui.addFolder('조명');
lightFolder.add(key, 'intensity', 0, 6, 0.1).name('key intensity');
lightFolder.add(fill, 'intensity', 0, 2, 0.05).name('fill intensity');
lightFolder.add(rim, 'intensity', 0, 80, 1).name('rim intensity');
lightFolder.add(renderer.shadowMap, 'enabled')
  .name('shadows')
  .onChange(() => {
    // shadowMap.enabled 토글은 재질 재컴파일이 필요합니다.
    scene.traverse((obj) => { if (obj.material) obj.material.needsUpdate = true; });
  });

app.start((delta) => {
  scene.traverse((obj) => {
    if (obj.geometry === knotGeometry) obj.rotation.y += delta * 0.4;
  });
  controls.update();
});
