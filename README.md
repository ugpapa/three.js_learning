# Three.js 실전 입문 — 공식 예제

책 『Three.js 실전 입문』의 장별 예제 저장소입니다. three.js **r185** · **Vite** 기준.

**🔗 라이브 데모: https://ugpapa.github.io/three.js_learning/**

설치 없이 위 주소에서 모든 예제의 실제 동작을 바로 확인할 수 있습니다.

## 실행 방법

```bash
git clone https://github.com/ugpapa/three.js_learning.git
cd three.js_learning
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 을 열면 장별 예제 허브가 나타납니다. Node.js 20 이상을 권장합니다.

## 구성

| 폴더 | 내용 |
| --- | --- |
| `shared/` | 전 장 공통 애플리케이션 골격 (`createApp`) |
| `ch01-first-scene/` | 1장 · 첫 장면 — 렌더러·카메라·메쉬·렌더 루프 |
| `ch02-scene-graph/` | 2장 · 장면 그래프 — 스크롤 연동 히어로 섹션 |
| `ch03-geometry/` | 3장 · 지오메트리 — InstancedMesh 그리드 웨이브 |
| `ch04-materials-lights/` | 4장 · 재질·조명·그림자 — 머티리얼 쇼룸 |
| `ch05-textures-env/` | 5장 · 텍스처·환경맵 — 프로덕트 스튜디오 |
| `ch06-animation-interaction/` | 6장 · 트윈 엔진·Raycaster 픽킹 |
| `ch07-models-particles/` | 7장 · glTF 로딩·Points 파티클 |
| `ch08-physics-project/` | 8장 · Rapier 물리 — 도미노 런 |
| `ch09-ai-scene/` | 9장 · AI 장면 생성기 — 자연어→JSON→렌더링 |
| `ch10-blender-room/` | 10장 · Blender × Claude(MCP) 룸 뷰어 |
| `appendix-a-dragon/` | 부록 A · 드래곤 쇼케이스 — FBX·AnimationMixer·블룸 |

## 빌드와 배포

```bash
npm run build      # dist/ 에 정적 빌드 생성
npm run preview    # 빌드 결과 로컬 확인
```

GitHub Pages 배포는 `gh-pages` 브랜치에서 서비스됩니다.

## 에셋 라이선스

- `public/models/DamagedHelmet.glb` — Khronos glTF 샘플 에셋 (CC-BY 4.0)
- `public/models/room.glb` — Claude × blender-mcp로 제작 (이 책의 10장)
- `public/models/dragon/` — 부록 A 드래곤 모델·텍스처
