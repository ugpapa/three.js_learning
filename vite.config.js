import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// 각 장의 예제를 독립된 페이지로 빌드하는 멀티 페이지 구성입니다.
export default defineConfig({
  appType: 'mpa', // 존재하지 않는 경로를 index.html로 대체하지 않고 404로 처리
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ch01: resolve(__dirname, 'ch01-first-scene/index.html'),
        ch02: resolve(__dirname, 'ch02-scene-graph/index.html'),
        ch03: resolve(__dirname, 'ch03-geometry/index.html'),
        ch04: resolve(__dirname, 'ch04-materials-lights/index.html'),
        ch05: resolve(__dirname, 'ch05-textures-env/index.html'),
        ch06: resolve(__dirname, 'ch06-animation-interaction/index.html'),
        ch07: resolve(__dirname, 'ch07-models-particles/index.html'),
        ch08: resolve(__dirname, 'ch08-physics-project/index.html'),
        ch09: resolve(__dirname, 'ch09-ai-scene/index.html'),
        ch10: resolve(__dirname, 'ch10-blender-room/index.html'),
        appendixA: resolve(__dirname, 'appendix-a-dragon/index.html'),
      },
    },
  },
});
