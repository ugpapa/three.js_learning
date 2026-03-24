/** @format */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  World,
  Sphere,
  Body,
  Plane,
  Vec3,
  Material,
  ContactMaterial,
} from "cannon-es";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#three"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // 그림자 활성화
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);

// 확대/축소 제한
controls.minDistance = 5;
controls.maxDistance = 50;

// 수직 움직임 제한 (위아래)
controls.minPolarAngle = Math.PI / 6; // 30도
controls.maxPolarAngle = Math.PI / 3; // 60도

// 수평 움직임 제한 (좌우)
controls.minAzimuthAngle = -Math.PI / 4; // -45도
controls.maxAzimuthAngle = Math.PI / 4;  // 45도


const world = new World();
world.gravity.set(0, -9.82, 0);

const ballMaterial = new Material("ballMaterial");
const groundMaterial = new Material("groundMaterial");

const ballGroundContact = new ContactMaterial(ballMaterial, groundMaterial, {
  friction: 0.3,
  restitution: 0.2,
});
world.addContactMaterial(ballGroundContact);

const groundShape = new Plane();
const groundBody = new Body({
  mass: 0,
  material: groundMaterial,
  shape: groundShape,
});
groundBody.addShape(groundShape);
groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);
world.addBody(groundBody);

// 여기서 바닥의 색상을 추가합니다.
const groundMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshStandardMaterial({ color: 0x888888 , side: THREE.DoubleSide,}) // 색상을 지정합니다.
);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const balls = [];


const ballRadius = 0.5; // 예를 들어, 반지름을 0.5로 변경하고 싶을 경우

const ballGeometry = new THREE.SphereGeometry(ballRadius);
const ballMeshMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });

const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(0, 12, 5);
light.castShadow = true; // 그림자를 생성하도록 빛을 설정
// 그림자 맵 해상도 향상
// light.shadow.mapSize.width = 512; // 기본값은 512입니다. 필요한 경우 이 값을 높일 수 있습니다.
// light.shadow.mapSize.height = 512; // 기본값은 512니다. 필요한 경우 이 값을 높일 수 있습니다.

// light.shadow.radius = 1; // 그림자의 부드러움 조절
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.set(2, 2, 5); // 카메라 위치를 변경
camera.lookAt(0, 2, 0);

const createBallButton = document.getElementById("createBall");
createBallButton.addEventListener("click", function () {
  const mesh = new THREE.Mesh(ballGeometry, ballMeshMaterial);
  mesh.castShadow = true; // 그림자를 생성하도록 메쉬를 설정
  mesh.receiveShadow = true; // 그림자를 받도록 메쉬를 설정
  scene.add(mesh);

  const body = new Body({
    mass: 1,
    shape: new Sphere(ballRadius),
    material: ballMaterial,
  });
  body.position.set((Math.random() - 0.5) * 2, 5, (Math.random() - 0.5) * 2); // 공이 랜덤한 위치에서 생성되도록 수정
  world.addBody(body);

  balls.push({
    mesh: mesh,
    body: body,
  });
});


function animate() {
  requestAnimationFrame(animate);
  world.step(1 / 60);
  balls.forEach((ball) => {
    ball.mesh.position.copy(ball.body.position);
    ball.mesh.quaternion.copy(ball.body.quaternion);
  });
  renderer.render(scene, camera);
}

animate();

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

window.addEventListener("resize", onWindowResize);