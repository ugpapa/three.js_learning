# three.js_learning

Three.js 학습용 예제 모음 저장소입니다.  
책 원고에서 사용하는 예제 코드를 장별로 정리해 두었습니다.

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

## 실행 방법

### chapter1, chapter2

정적 파일 예제이므로 간단한 로컬 서버로 실행하면 됩니다.

```bash
cd chapter1
python3 -m http.server 8000
```

또는

```bash
cd chapter2
python3 -m http.server 8000
```

브라우저에서 원하는 HTML 파일을 직접 열면 됩니다.

## Vite 프로젝트 실행

### chapter3 sample

```bash
cd chapter3/sample
npm install
npm run dev
```

### chapter3 project1

```bash
cd chapter3/project1
npm install
npm run dev
```

### chapter3 physics

```bash
cd chapter3/physics
npm install
npm run dev
```

### chapter3 project2

```bash
cd chapter3/project2
npm install
npm run dev
```

### chapter3 withbootstrap

```bash
cd chapter3/withbootstrap
npm install
npm run dev
```

### chapter4 advanced-showcase

```bash
cd chapter4/advanced-showcase
npm install
npm run dev
```

## 빌드

Vite 기반 프로젝트는 각 프로젝트 폴더에서 아래 명령으로 빌드합니다.

```bash
npm run build
```

빌드 산출물인 `dist/` 폴더는 저장소에 포함하지 않습니다.  
예제 저장소는 소스 코드와 자산만 관리하고, 배포용 파일은 각 프로젝트에서 필요할 때 다시 생성합니다.

## 배포 대상

이 저장소는 `/Users/ugpapa/Devs/threejs-book/threejs-book-examples` 폴더만 분리해서 관리합니다.  
책 원고, 변환 스크립트, 문서 산출물은 포함하지 않습니다.
