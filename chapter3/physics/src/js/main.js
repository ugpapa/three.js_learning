/** @format */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as CANNON from "cannon-es";

const canvas = document.getElementById("three");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 7, 10);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// 빛 추가
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
light.castShadow = true;
scene.add(light);

// Ambient Light 추가
const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // 색상과 강도 설정
scene.add(ambientLight);

// OrbitControls 추가
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 지면 생성 (Three.js) - 색상을 연한 파란색으로 변경
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xadd8e6, side:THREE.DoubleSide }); // 연한 파란색
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// Cannon.js 세계 설정
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// 지면 생성 (Cannon.js)
const groundShape = new CANNON.Plane();
const groundBody = new CANNON.Body({
  mass: 0,
});
groundBody.addShape(groundShape);
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);

// 구 생성 (Three.js)
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.castShadow = true;
scene.add(sphereMesh);

// 구 생성 (Cannon.js)
const sphereShape = new CANNON.Sphere(0.5);
const sphereBody = new CANNON.Body({
  mass: 1,
  shape: sphereShape,
});
sphereBody.position.set(0, 5, 0);
world.addBody(sphereBody);

// 버튼 클릭 이벤트
document.getElementById("showBall").addEventListener("click", () => {
  sphereMesh.visible = true;
  sphereBody.position.set(0, 5, 0); // 초기 위치 재설정
  sphereBody.velocity.set(0, 0, 0); // 초기 속도 재설정
});

// 브라우저 크기 변경 이벤트
window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
});

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate);
  world.step(1 / 100);
  sphereMesh.position.copy(sphereBody.position);
  sphereMesh.quaternion.copy(sphereBody.quaternion);
  controls.update(); // OrbitControls 업데이트 추가
  renderer.render(scene, camera);
}
animate();
