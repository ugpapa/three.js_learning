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
import { GUI } from "lil-gui";
import { setupResizeHandler } from './resizeWindow.js';

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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 50;
controls.minPolarAngle = Math.PI / 6;
controls.maxPolarAngle = Math.PI / 3;
controls.minAzimuthAngle = -Math.PI / 4;
controls.maxAzimuthAngle = Math.PI / 4;

const world = new World();
world.gravity.set(0, -9.82, 0);

const ballMaterial = new Material("ballMaterial");
const groundMaterial = new Material("groundMaterial");

const ballGroundContact = new ContactMaterial(ballMaterial, groundMaterial, {
  friction: 0.3,
  restitution: 0.9,
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

const groundMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshStandardMaterial({ color: 0x888888, side: THREE.DoubleSide })
);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const balls = [];

function animate() {
  requestAnimationFrame(animate);
  world.step(1 / 60);
  balls.forEach((ball) => {
    ball.mesh.position.copy(ball.body.position);
    ball.mesh.quaternion.copy(ball.body.quaternion);
  });
  renderer.render(scene, camera);
}

let ballSize = 0.25; // 기본 크기
let ballHeight = 5; // 기본 높이

const ballGeometry = new THREE.SphereGeometry(ballSize);
const ballMeshMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });

const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(0, 12, 5);
light.castShadow = true;
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.set(2, 2, 5);
camera.lookAt(0, 2, 0);

function getRandomColor() {
  const color = new THREE.Color();
  color.setRGB(Math.random(), Math.random(), Math.random());
  return color;
}

function createBall() {
  const randomColor = getRandomColor();
  const ballMeshMaterial = new THREE.MeshStandardMaterial({
    color: randomColor,
  });

  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(ballSize),
    ballMeshMaterial
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);

  const body = new Body({
    mass: 1,
    shape: new Sphere(ballSize),
    material: ballMaterial,
  });
  body.position.set(
    (Math.random() - 0.5) * 2,
    ballHeight,
    (Math.random() - 0.5) * 2
  );
  world.addBody(body);

  balls.push({
    mesh: mesh,
    body: body,
  });
}

// GUI
const gui = new GUI();
gui.add(ballGroundContact, "restitution", 0, 1).name("탄성계수");
gui.add(ballGroundContact, "friction", 0, 1).name("마찰계수");
gui
  .add({ ballSize: ballSize }, "ballSize", 0.1, 1)
  .name("볼 크기")
  .onChange((value) => (ballSize = value));
gui
  .add({ ballHeight: ballHeight }, "ballHeight", 1, 10)
  .name("볼 높이")
  .onChange((value) => (ballHeight = value));
gui.add({ createBall: createBall }, "createBall").name("볼 낙하");

animate();

setupResizeHandler(camera, renderer);
