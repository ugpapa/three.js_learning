/** @format */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();

const canvas = document.querySelector("#three");
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xadd8e6, 1);

// 새로운 GLTFLoader 인스턴스를 생성
const loader = new GLTFLoader();

loader.load(
  "./models/poly_game/scene.gltf",
  (gltf) => {
    // 애니메이션이 있는지 확인
    console.log(gltf.animations.length);
    // 애니메이션이 있다면 애니메이션을 재생
    if (gltf.animations.length) {
      const mixer = new THREE.AnimationMixer(gltf.scene);
      // 모델의 모든 애니메이션 클립을 mixer에 추가
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });
      // 렌더링 루프
      const clock = new THREE.Clock();
      const tick = () => {
        const delta = clock.getDelta();
        mixer.update(delta);
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };
      // 이제 mixer를 통해 애니메이션을 재생할 수 있습니다.
      tick();
    }
    scene.add(gltf.scene); // 로드된 모델을 씬에 추가
  },
  (xhr) => {
    console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
  },
  (error) => {
    console.error(`An error happened: ${error}`);
  }
);

// 주광 추가
const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(5, 7, -5);
scene.add(light);

camera.position.set(10, 10, 10);

const controls = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
}

animate();

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);
