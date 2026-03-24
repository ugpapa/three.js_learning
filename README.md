# three.js_learning

Three.js 학습용 예제 모음 저장소입니다.  
책 원고에서 사용하는 예제 코드를 장별로 정리해 두었습니다.

## 한 번에 실행하기

루트에서 한 번만 실행하면 chapter1부터 chapter4까지 예제를 한 서버에서 바로 볼 수 있습니다.

```bash
npm run dev
```

기본 주소는 `http://127.0.0.1:4173`입니다.

이 명령은 아래 작업을 자동으로 처리합니다.

- `chapter3/sample`
- `chapter3/project1`
- `chapter3/physics`
- `chapter3/project2`
- `chapter3/withbootstrap`
- `chapter4/advanced-showcase`

위 Vite 프로젝트를 먼저 빌드한 뒤,
- 루트 허브 페이지
- chapter별 목록 페이지
- 각 예제 페이지의 `뒤로 / 챕터 목록 / 전체 홈` 공통 네비게이션

까지 한 번에 제공합니다.

## 구성

- `chapter1/`
  - Three.js 기초 예제
  - 정적 HTML, CSS, JS 파일 중심
- `chapter2/`
  - 파티클, GUI, 환경맵, 로더 예제
  - 정적 HTML 예제와 모델/텍스처 자산 포함
- `chapter3/`
  - Vite 기반 실습 프로젝트
  - `sample/`, `project1/`, `physics/`, `project2/`, `withbootstrap/`
- `chapter4/`
  - 고급 예제
  - 현재는 `advanced-showcase/` 드래곤 애니메이션 쇼케이스 포함

## 개별 빌드

기본 사용은 루트 `npm run dev`를 권장합니다.  
다만 특정 Vite 프로젝트만 다시 빌드하고 싶다면 각 폴더에서 아래 명령을 실행하면 됩니다.

```bash
npm run build
```

루트에서 모든 쇼케이스를 다시 빌드만 하고 싶다면 아래 명령을 사용할 수 있습니다.

```bash
npm run build
```

## 배포 대상

이 저장소는 `/Users/ugpapa/Devs/threejs-book/threejs-book-examples` 폴더만 분리해서 관리합니다.  
책 원고, 변환 스크립트, 문서 산출물은 포함하지 않습니다.
