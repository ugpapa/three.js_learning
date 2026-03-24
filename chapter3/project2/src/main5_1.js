/** @format */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  World,
  Sphere,
  Body,
  Cylinder,
  Plane,
  Vec3,
  Material,
} from "cannon-es";
import { GUI } from "lil-gui";

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

// Physics world setup
const world = new World();
world.gravity.set(0, -9.82, 0);

const groundShape = new Plane();
const groundBody = new Body({ mass: 0, shape: groundShape });
groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);
world.addBody(groundBody);

const groundMeshMaterial = new THREE.MeshStandardMaterial({
  color: 0xa58d68,
  side: THREE.DoubleSide,
});
const groundMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(15, 100),
  groundMeshMaterial
);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const pinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const pinMaterial = new THREE.MeshStandardMaterial({ color: 0x8de475 });
const pinPhysicsMaterial = new Material();

const pins = [];
const pinPositions = getPinPositions();

pinPositions.forEach((pos) => {
  const mesh = new THREE.Mesh(pinGeometry, pinMaterial);
  mesh.position.copy(pos);
  scene.add(mesh);

  const body = new Body({
    mass: 1,
    shape: new Cylinder(0.5, 0.5, 2, 32),
    material: pinPhysicsMaterial,
    position: pos,
  });
  world.addBody(body);
  pins.push({ mesh, body });
});

const ballGeometry = new THREE.SphereGeometry(0.92, 32, 32);
const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
ballMesh.position.set(0, 2, 5);
ballMesh.castShadow = true;
scene.add(ballMesh);

const ballBody = new Body({
  mass: 5,
  shape: new Sphere(0.92),
  position: new Vec3(-0.5, 0.92, 20),
});
world.addBody(ballBody);

const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(100, 100, 100);
light.castShadow = true;
light.shadow.camera.left = -50;
light.shadow.camera.right = 50;
light.shadow.camera.top = 50;
light.shadow.camera.bottom = -50;
light.shadow.camera.updateProjectionMatrix();
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isDragging = false;
let selectedBall = null;

animate();
function getPinPositions() {
  const positions = [];
  let rowCount = 1;
  let startZ = -15; // 이 값을 조절하여 첫 번째 핀의 Z 위치를 조절할 수 있습니다.

  const rotationMatrix = new THREE.Matrix4();
  rotationMatrix.makeRotationY(THREE.MathUtils.degToRad(50));

  for (let i = 0; i < 10; i++) {
    const x = (i - (rowCount * (rowCount - 1)) / 2) * 1.5 + 12;
    const z = startZ + (rowCount - 1) * 1.5;
    const position = new THREE.Vector3(x, 1, z);
    position.applyMatrix4(rotationMatrix); // 회전 적용
    positions.push(new Vec3(position.x, position.y, position.z));

    if (i + 1 === (rowCount * (rowCount + 1)) / 2) {
      rowCount++;
    }
  }
  return positions;
}

function checkIntersection() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects([ballMesh]);

  if (intersects.length > 0) {
    selectedBall = intersects[0].object;
  }
}

window.addEventListener("mousedown", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  checkIntersection();
  if (selectedBall) isDragging = true;
});

// 마우스 업 이벤트
window.addEventListener("mouseup", () => {
  if (isDragging && selectedBall) {
    ballBody.applyImpulse(
      new Vec3(0, 0, -settings.impulseStrength),
      ballBody.position
    );
  }
  isDragging = false;
  selectedBall = null;
});

function animate() {
  requestAnimationFrame(animate);
  world.step(1 / 60);

  pins.forEach((pin) => {
    pin.mesh.position.copy(pin.body.position);
    pin.mesh.quaternion.copy(pin.body.quaternion);
  });
  ballMesh.position.copy(ballBody.position);

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);

// ... 기존의 GUI 관련 코드
camera.position.set(0, 15, 30);
controls.target.set(0, 0, 0);
controls.update();

const settings = {
  impulseStrength: 80,
  reset: function () {
    ballBody.position.set(-0.5, 0.92, 20);
    ballBody.velocity.set(0, 0, 0);
    ballBody.angularVelocity.set(0, 0, 0); // 볼의 회전 속도도 0으로 설정

    // 핀들도 초기 위치로 되돌립니다.
    for (let i = 0; i < pins.length; i++) {
      pins[i].body.position.copy(pinPositions[i]);
      pins[i].body.velocity.set(0, 0, 0);
      pins[i].body.angularVelocity.set(0, 0, 0);
      pins[i].body.quaternion.set(0, 0, 0, 1); // 핀의 회전 속도도 0으로 설정
    }
  },
};

const gui = new GUI();
gui.add(settings, "impulseStrength", 0, 150); // 볼의 세기 조절 슬라이더. 0부터 150까지 조절 가능.
gui.add(settings, "reset");
