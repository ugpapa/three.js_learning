import * as THREE from 'three';
import { createApp } from '../shared/app.js';

/**
 * 장면 그래프 실습 — 스크롤 연동 3D 히어로 섹션.
 *
 * 요즘 제품·포트폴리오 사이트의 표준 패턴입니다.
 *  - 캔버스는 position: fixed로 고정하고, HTML 콘텐츠가 그 위로 스크롤됩니다.
 *  - 스크롤 진행도(0~1)가 카메라 리그의 위치를 결정합니다.
 *  - 카메라 리그는 2단 그룹: 바깥(parallaxRig)은 마우스 패럴랙스,
 *    안쪽(dolly)은 스크롤 이동. 역할을 계층으로 분리하는 것이 장면 그래프의 힘입니다.
 */
const app = createApp({ canvas: document.querySelector('#app') });
const { scene, camera } = app;

scene.background = new THREE.Color(0x0b0d12);
scene.fog = new THREE.Fog(0x0b0d12, 8, 30);

// ── 카메라 리그: parallaxRig → dolly → camera ──────────────
const parallaxRig = new THREE.Group(); // 마우스 패럴랙스 담당
const dolly = new THREE.Group();       // 스크롤 이동 담당
dolly.add(camera);
parallaxRig.add(dolly);
scene.add(parallaxRig);
camera.position.set(0, 0, 7);          // 리그 기준의 로컬 오프셋

// ── 섹션별 "스테이션" 3곳 ──────────────────────────────────
// 스크롤 섹션 하나당 3D 공간의 한 지점을 배정합니다.
const SECTION_DISTANCE = 12;

function createStation(index, buildObjects) {
  const station = new THREE.Group();
  station.position.set(index % 2 === 0 ? 1.8 : -1.8, 0, -index * SECTION_DISTANCE);
  buildObjects(station);
  scene.add(station);
  return station;
}

const baseMaterial = (color, extra = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.4, ...extra });

// 스테이션 0: 토러스 궤도 클러스터 — 피벗 회전으로 궤도 운동
const orbits = [];
const station0 = createStation(0, (group) => {
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), baseMaterial(0x4f8cff));
  group.add(core);
  for (let i = 0; i < 3; i++) {
    const pivot = new THREE.Group();
    pivot.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    const moon = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18),
      baseMaterial(0x9bd0ff, { metalness: 0.8, roughness: 0.2 }),
    );
    moon.position.x = 1.8 + i * 0.4;
    pivot.add(moon);
    group.add(pivot);
    orbits.push(pivot);
  }
});

// 스테이션 1: 떠 있는 링 타워
const rings = [];
const station1 = createStation(1, (group) => {
  for (let i = 0; i < 5; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.1 - i * 0.16, 0.05, 16, 64),
      baseMaterial(new THREE.Color().setHSL(0.6 - i * 0.06, 0.7, 0.6)),
    );
    ring.position.y = (i - 2) * 0.5;
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    rings.push(ring);
  }
});

// 스테이션 2: 부유하는 크리스털 무리
const crystals = [];
const station2 = createStation(2, (group) => {
  for (let i = 0; i < 14; i++) {
    const crystal = new THREE.Mesh(
      new THREE.TetrahedronGeometry(0.12 + Math.random() * 0.25),
      baseMaterial(0xb59bff, { metalness: 0.7, roughness: 0.15 }),
    );
    crystal.position.set(
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
    );
    crystal.userData.phase = Math.random() * Math.PI * 2; // 개별 부유 위상
    group.add(crystal);
    crystals.push(crystal);
  }
});

// ── 조명: 전 구간을 커버하는 키 라이트 + 스테이션별 포인트 ──
scene.add(new THREE.HemisphereLight(0x8fb4ff, 0x1a1420, 0.6));
const key = new THREE.DirectionalLight(0xffffff, 1.8);
key.position.set(4, 6, 3);
scene.add(key);
[station0, station1, station2].forEach((station, i) => {
  const accent = new THREE.PointLight([0x4f8cff, 0x6bd0ff, 0xb59bff][i], 30, 12);
  accent.position.set(0, 2, 2);
  station.add(accent); // 조명도 장면 그래프의 노드 — 스테이션을 옮기면 함께 이동
});

// ── 입력 상태: 스크롤 진행도와 마우스 위치 ──────────────────
let scrollProgress = 0; // 0(맨 위) ~ 1(맨 아래)
const pointer = new THREE.Vector2();

function readScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress = max > 0 ? window.scrollY / max : 0;
}
window.addEventListener('scroll', readScroll, { passive: true });
readScroll();

window.addEventListener('pointermove', (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// 지수 감쇠 보간: 프레임레이트와 무관하게 같은 감속 곡선을 그립니다.
const damp = (current, target, lambda, delta) =>
  THREE.MathUtils.damp(current, target, lambda, delta);

app.start((delta, elapsed) => {
  // 1) 스크롤 → dolly의 z 이동 (부드럽게 따라가기)
  const targetZ = -scrollProgress * SECTION_DISTANCE * 2; // 스테이션 0→2 구간
  dolly.position.z = damp(dolly.position.z, targetZ, 3, delta);

  // 좌우로 굽이치는 경로: 스테이션 배치(지그재그)를 따라갑니다.
  const targetX = Math.sin(scrollProgress * Math.PI * 2) * 1.2;
  dolly.position.x = damp(dolly.position.x, targetX, 3, delta);

  // 2) 마우스 → parallaxRig의 미세 회전 (연출은 ±3도면 충분합니다)
  parallaxRig.rotation.y = damp(parallaxRig.rotation.y, pointer.x * 0.05, 4, delta);
  parallaxRig.rotation.x = damp(parallaxRig.rotation.x, pointer.y * 0.04, 4, delta);

  // 3) 스테이션별 자체 애니메이션
  orbits.forEach((pivot, i) => { pivot.rotation.y += delta * (0.6 + i * 0.25); });
  station0.rotation.y += delta * 0.1;

  rings.forEach((ring, i) => {
    ring.rotation.z += delta * (i % 2 === 0 ? 0.4 : -0.4);
    ring.position.y = (i - 2) * 0.5 + Math.sin(elapsed * 1.2 + i) * 0.08;
  });

  crystals.forEach((crystal) => {
    crystal.rotation.x += delta * 0.5;
    crystal.rotation.y += delta * 0.3;
    crystal.position.y += Math.sin(elapsed * 1.5 + crystal.userData.phase) * 0.002;
  });
});
