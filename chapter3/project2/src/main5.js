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
  ContactMaterial,
} from "cannon-es";
import { GUI } from "lil-gui";
import { setupResizeHandler } from "./resizeWindow.js";

const BALL_RADIUS = 1;
const LANE_WIDTH = 12;
const LANE_LENGTH = 42;
const BALL_START = new Vec3(0, BALL_RADIUS, 15);
const PIN_HEIGHT = 2.6;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x070707);
const canvas = document.querySelector("#three");

const camera = new THREE.PerspectiveCamera(
  55,
  (canvas.clientWidth || window.innerWidth) /
    (canvas.clientHeight || window.innerHeight),
  0.1,
  200
);
camera.position.set(0, 13, 28);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(
  canvas.clientWidth || window.innerWidth,
  canvas.clientHeight || window.innerHeight,
  false
);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1.4, -7);

const world = new World();
world.gravity.set(0, -9.82, 0);

const lanePhysicsMaterial = new Material("lane");
const ballPhysicsMaterial = new Material("ball");
const pinPhysicsMaterial = new Material("pin");

world.addContactMaterial(
  new ContactMaterial(ballPhysicsMaterial, lanePhysicsMaterial, {
    friction: 0.06,
    restitution: 0.22,
  })
);
world.addContactMaterial(
  new ContactMaterial(pinPhysicsMaterial, lanePhysicsMaterial, {
    friction: 0.45,
    restitution: 0.12,
  })
);
world.addContactMaterial(
  new ContactMaterial(ballPhysicsMaterial, pinPhysicsMaterial, {
    friction: 0.18,
    restitution: 0.48,
  })
);

const groundBody = new Body({
  mass: 0,
  shape: new Plane(),
  material: lanePhysicsMaterial,
});
groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);
world.addBody(groundBody);

const laneMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(LANE_WIDTH, LANE_LENGTH),
  new THREE.MeshStandardMaterial({
    color: 0xb59a73,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.05,
  })
);
laneMesh.rotation.x = -Math.PI / 2;
laneMesh.position.z = -4;
laneMesh.receiveShadow = true;
scene.add(laneMesh);

const laneGuide = new THREE.Mesh(
  new THREE.PlaneGeometry(LANE_WIDTH - 0.5, 5),
  new THREE.MeshStandardMaterial({
    color: 0xc9b089,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.45,
  })
);
laneGuide.rotation.x = -Math.PI / 2;
laneGuide.position.set(0, 0.02, 12);
scene.add(laneGuide);

const pinGeometry = new THREE.CylinderGeometry(0.38, 0.56, PIN_HEIGHT, 24);
const pinMaterial = new THREE.MeshStandardMaterial({
  color: 0x77d26d,
  roughness: 0.55,
});

const pins = [];
const pinPositions = getPinPositions();
for (const position of pinPositions) {
  const mesh = new THREE.Mesh(pinGeometry, pinMaterial);
  mesh.position.set(position.x, position.y, position.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);

  const body = new Body({
    mass: 1,
    material: pinPhysicsMaterial,
    linearDamping: 0.28,
    angularDamping: 0.35,
    shape: new Cylinder(0.38, 0.56, PIN_HEIGHT, 12),
    position: position.clone(),
  });
  world.addBody(body);
  pins.push({ mesh, body });
}

const ballMesh = new THREE.Mesh(
  new THREE.SphereGeometry(BALL_RADIUS, 32, 32),
  new THREE.MeshStandardMaterial({
    color: 0xc61d14,
    roughness: 0.32,
    metalness: 0.08,
  })
);
ballMesh.castShadow = true;
scene.add(ballMesh);

const ballBody = new Body({
  mass: 6,
  material: ballPhysicsMaterial,
  linearDamping: 0.16,
  angularDamping: 0.3,
  shape: new Sphere(BALL_RADIUS),
  position: BALL_START.clone(),
});
world.addBody(ballBody);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
keyLight.position.set(10, 24, 16);
keyLight.castShadow = true;
keyLight.shadow.camera.left = -18;
keyLight.shadow.camera.right = 18;
keyLight.shadow.camera.top = 18;
keyLight.shadow.camera.bottom = -18;
scene.add(keyLight);

scene.add(new THREE.AmbientLight(0xffffff, 0.55));

const panel = createPanel({
  title: "sample5: 볼링 프로토타입",
  description: "단순한 원통 핀과 공으로 레인, 랙, 충돌 흐름을 먼저 확인합니다.",
});

const settings = {
  impulseStrength: 110,
  reset: resetDemo,
};

const gui = new GUI();
gui.add(settings, "impulseStrength", 70, 150, 1).name("launch power");
gui.add(settings, "reset").name("reset");

let hasLaunched = false;
const clock = new THREE.Clock();

panel.launchButton.addEventListener("click", launchBall);
panel.resetButton.addEventListener("click", resetDemo);
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    launchBall();
  }
  if (event.code === "KeyR") {
    resetDemo();
  }
});

window.bowlingDemo = {
  launchBall,
  resetDemo,
  setImpulseStrength(value) {
    settings.impulseStrength = value;
  },
};

function getPinPositions() {
  const positions = [];
  const rowCounts = [1, 2, 3, 4];
  const rackWidth = LANE_WIDTH - 2.2;
  const rowSpacing = 2.45;
  const columnSpacing = rackWidth / 3;
  const headPinZ = -14;

  rowCounts.forEach((count, rowIndex) => {
    const z = headPinZ - rowIndex * rowSpacing;
    const startX = -((count - 1) * columnSpacing) / 2;

    for (let column = 0; column < count; column += 1) {
      positions.push(new Vec3(startX + column * columnSpacing, PIN_HEIGHT / 2, z));
    }
  });

  return positions;
}

function createPanel({ title, description }) {
  const panelRoot = document.createElement("section");
  panelRoot.className = "bowling-panel";

  const heading = document.createElement("h1");
  heading.textContent = title;

  const text = document.createElement("p");
  text.textContent = description;

  const actions = document.createElement("div");
  actions.className = "bowling-panel__actions";

  const launchButton = document.createElement("button");
  launchButton.type = "button";
  launchButton.className = "bowling-panel__button bowling-panel__button--primary";
  launchButton.textContent = "공 발사";

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "bowling-panel__button";
  resetButton.textContent = "다시 놓기";

  actions.append(launchButton, resetButton);

  const hint = document.createElement("p");
  hint.className = "bowling-panel__hint";
  hint.textContent = "Space로 발사, R로 초기화";

  const status = document.createElement("p");
  status.className = "bowling-panel__status";

  panelRoot.append(heading, text, actions, hint, status);
  document.body.appendChild(panelRoot);

  return {
    launchButton,
    resetButton,
    status,
  };
}

function updateStatus() {
  const knockedPins = pins.filter((pin) => isPinDown(pin.body)).length;
  const stateLabel = hasLaunched ? "진행 중" : "대기 중";
  panel.status.textContent = `상태: ${stateLabel} | 쓰러진 핀: ${knockedPins} / 10 | 힘: ${settings.impulseStrength}`;
}

function isPinDown(body) {
  return Math.abs(body.quaternion.x) > 0.2 || Math.abs(body.quaternion.z) > 0.2;
}

function launchBall() {
  if (hasLaunched) {
    return;
  }

  hasLaunched = true;
  ballBody.wakeUp();
  ballBody.applyImpulse(new Vec3(0, 0, -settings.impulseStrength), ballBody.position);
  updateStatus();
}

function resetDemo() {
  hasLaunched = false;

  ballBody.position.copy(BALL_START);
  ballBody.velocity.set(0, 0, 0);
  ballBody.angularVelocity.set(0, 0, 0);
  ballBody.quaternion.set(0, 0, 0, 1);

  pins.forEach((pin, index) => {
    pin.body.position.copy(pinPositions[index]);
    pin.body.velocity.set(0, 0, 0);
    pin.body.angularVelocity.set(0, 0, 0);
    pin.body.quaternion.set(0, 0, 0, 1);
  });

  updateStatus();
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 1 / 30);
  world.step(1 / 60, delta, 3);

  pins.forEach((pin) => {
    pin.mesh.position.copy(pin.body.position);
    pin.mesh.quaternion.copy(pin.body.quaternion);
  });
  ballMesh.position.copy(ballBody.position);
  ballMesh.quaternion.copy(ballBody.quaternion);

  controls.update();
  updateStatus();
  renderer.render(scene, camera);
}

setupResizeHandler(camera, renderer);
resetDemo();
animate();
