import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createApp } from '../shared/app.js';
import { validateSpec, buildSceneFromSpec, disposeGroup } from './scene-spec.js';
import { parseLocally } from './local-parser.js';

/**
 * AI 장면 생성기 — 자연어로 3D 장면 만들기.
 *
 * 아키텍처: 입력 문장 → (LLM 또는 로컬 파서) → 장면 JSON → 검증 → 렌더링.
 * LLM은 "코드 작성자"가 아니라 "구조화된 데이터 생성기"로 씁니다.
 * 이 패턴은 웹이기에 가능한 워크플로입니다 — 입력 UI, fetch, 렌더링이
 * 모두 한 페이지 안에서 즉시 연결됩니다.
 */
const app = createApp({ canvas: document.querySelector('#app'), shadows: true });
const { scene, camera, renderer } = app;

scene.background = new THREE.Color(0x11141b);
camera.position.set(0, 3.5, 9);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);

// 스튜디오 환경: 금속·유리 재질이 제대로 보이도록 환경맵 + 그림자 조명
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(7, 64).rotateX(-Math.PI / 2),
  new THREE.MeshStandardMaterial({ color: 0x1c212c, roughness: 0.85 }),
);
floor.receiveShadow = true;
scene.add(floor);

const sun = new THREE.DirectionalLight(0xffffff, 1.5);
sun.position.set(5, 8, 4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
scene.add(sun);

// ── LLM 호출: 장면 JSON만 출력하게 하는 시스템 프롬프트 ─────
const SYSTEM_PROMPT = `당신은 3D 장면 생성기입니다. 사용자의 한국어 설명을 읽고
아래 스키마의 JSON만 출력하십시오. 설명·마크다운·코드펜스 없이 순수 JSON만 출력합니다.
{"objects":[{"shape":"sphere|box|torus|cone|cylinder","color":"#rrggbb",
"material":"standard|metal|glass","position":[x,y,z],"size":1.0}]}
좌표 범위는 -8~8, y는 바닥(0) 위. 물체 간 간격을 적절히 벌리십시오.`;

async function generateWithClaude(text, apiKey) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      // 브라우저에서 직접 호출을 허용하는 헤더 (학습·프로토타입 용도)
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: text }],
    }),
  });
  if (!response.ok) throw new Error(`API 오류 ${response.status}`);
  const data = await response.json();
  // 모델이 코드펜스를 붙였을 가능성까지 방어적으로 처리
  const jsonText = data.content[0].text.replace(/```json|```/g, '').trim();
  return JSON.parse(jsonText);
}

// ── 생성 파이프라인 ────────────────────────────────────────
let currentGroup = null;

async function generate(text) {
  const apiKey = document.querySelector('#apikey').value.trim();
  const status = document.querySelector('#status');

  let rawSpec;
  try {
    if (apiKey) {
      status.textContent = 'Claude에게 장면 구성을 요청하는 중…';
      rawSpec = await generateWithClaude(text, apiKey);
      status.textContent = 'LLM 생성 완료';
    } else {
      rawSpec = parseLocally(text);
      status.textContent = `로컬 파서 사용 (오브젝트 ${rawSpec.objects.length}개 인식) — API 키를 넣으면 더 자유로운 문장을 이해합니다`;
    }
  } catch (error) {
    status.textContent = `생성 실패: ${error.message} — 로컬 파서로 대체합니다`;
    rawSpec = parseLocally(text);
  }

  const spec = validateSpec(rawSpec);   // 출처가 무엇이든 검증은 동일하게
  if (spec.objects.length === 0) {
    status.textContent = '인식된 오브젝트가 없습니다. 모양(구·큐브·도넛…)과 색을 함께 써 보십시오.';
    return;
  }

  if (currentGroup) disposeGroup(currentGroup);  // 이전 결과 정리
  currentGroup = buildSceneFromSpec(spec);
  currentGroup.scale.setScalar(0.01);            // 등장 연출 시작값
  scene.add(currentGroup);
}

// ── UI 연결 ───────────────────────────────────────────────
const promptInput = document.querySelector('#prompt');
document.querySelector('#generate').addEventListener('click', () => {
  if (promptInput.value.trim()) generate(promptInput.value.trim());
});
promptInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && promptInput.value.trim()) generate(promptInput.value.trim());
});
document.querySelectorAll('#examples span').forEach((chip) => {
  chip.addEventListener('click', () => {
    promptInput.value = chip.textContent;
    generate(chip.textContent);
  });
});

// 첫 화면: 예시 장면을 로컬 파서로 즉시 생성
generate('빨간 금속 구를 왼쪽에, 파란 유리 큐브를 오른쪽에 놓아줘');

app.start((delta) => {
  // 등장 연출: 6장에서 배운 지수 감쇠 보간을 스케일에 적용
  if (currentGroup && currentGroup.scale.x < 0.999) {
    const s = THREE.MathUtils.damp(currentGroup.scale.x, 1, 6, delta);
    currentGroup.scale.setScalar(s);
  }
  controls.update();
});
