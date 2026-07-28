import * as THREE from 'three';

/**
 * 모든 장에서 공통으로 사용하는 최소한의 애플리케이션 골격입니다.
 * WebGLRenderer 생성, 색 공간·톤 매핑 설정, 리사이즈 대응, 렌더 루프 관리를 담당합니다.
 * 이 파일이 곧 1장의 학습 내용이며, 2장부터는 이 골격을 가져다 씁니다.
 */
export function createApp({ canvas, antialias = true, shadows = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias });

  // 디스플레이 픽셀 밀도를 반영하되, 고해상도 기기에서의 과도한 부하를 막기 위해 2로 제한합니다.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 물리 기반 렌더링 결과를 화면에 올바르게 표시하기 위한 설정입니다.
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  if (shadows) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );

  function resize() {
    const { innerWidth: w, innerHeight: h } = window;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  const clock = new THREE.Clock();

  /** update(delta, elapsed)를 매 프레임 호출하는 렌더 루프를 시작합니다. */
  function start(update) {
    renderer.setAnimationLoop(() => {
      const delta = clock.getDelta();
      update?.(delta, clock.elapsedTime);
      renderer.render(scene, camera);
    });
  }

  return { renderer, scene, camera, start };
}
