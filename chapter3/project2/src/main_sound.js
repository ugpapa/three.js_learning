/** @format */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  World,
  Body,
  Plane,
  Vec3,
  Material,
  Sphere,
  Box,
  ContactMaterial,
} from "cannon-es";
import { GUI } from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupResizeHandler } from "./resizeWindow.js";

const BALL_RADIUS = 1.05;
const LANE_WIDTH = 12;
const LANE_LENGTH = 42;
const BALL_START = new Vec3(0, BALL_RADIUS, 15);
const PIN_BODY_HALF_EXTENTS = new Vec3(0.24, 1.5, 0.24);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x090a0c);
const canvas = document.querySelector("#three");

const camera = new THREE.PerspectiveCamera(
  50,
  (canvas.clientWidth || window.innerWidth) /
    (canvas.clientHeight || window.innerHeight),
  0.1,
  200
);
camera.position.set(-8.6, 4.3, 21.2);

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
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(-1.1, 1.35, 8.4);

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
    restitution: 0.1,
  })
);
world.addContactMaterial(
  new ContactMaterial(ballPhysicsMaterial, pinPhysicsMaterial, {
    friction: 0.18,
    restitution: 0.42,
  })
);

const groundBody = new Body({
  mass: 0,
  shape: new Plane(),
  material: lanePhysicsMaterial,
});
groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);
world.addBody(groundBody);

const textureLoader = new THREE.TextureLoader();
const laneTexture = textureLoader.load("textures/back2.jpg");
laneTexture.wrapS = THREE.RepeatWrapping;
laneTexture.wrapT = THREE.RepeatWrapping;
laneTexture.repeat.set(1.4, 2.8);
laneTexture.rotation = THREE.MathUtils.degToRad(90);
laneTexture.center.set(0.5, 0.5);

const panoTexture = textureLoader.load("textures/pano2.png");
panoTexture.mapping = THREE.EquirectangularReflectionMapping;
scene.background = panoTexture;
scene.environment = panoTexture;

const laneMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(LANE_WIDTH, LANE_LENGTH),
  new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    map: laneTexture,
    roughness: 0.42,
    metalness: 0.05,
    clearcoat: 0.55,
    clearcoatRoughness: 0.24,
    envMapIntensity: 0.85,
  })
);
laneMesh.rotation.x = -Math.PI / 2;
laneMesh.position.z = -4;
laneMesh.receiveShadow = true;
scene.add(laneMesh);

const approach = new THREE.Mesh(
  new THREE.PlaneGeometry(LANE_WIDTH + 1.6, 8),
  new THREE.MeshPhysicalMaterial({
    color: 0xc9ab7b,
    side: THREE.DoubleSide,
    roughness: 0.5,
    metalness: 0.02,
    clearcoat: 0.3,
    clearcoatRoughness: 0.35,
  })
);
approach.rotation.x = -Math.PI / 2;
approach.position.set(0, 0.015, 17);
approach.receiveShadow = true;
scene.add(approach);

const foulLine = new THREE.Mesh(
  new THREE.PlaneGeometry(LANE_WIDTH + 0.6, 0.18),
  new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    emissive: 0xdddddd,
    emissiveIntensity: 0.18,
  })
);
foulLine.rotation.x = -Math.PI / 2;
foulLine.position.set(0, 0.03, 13.1);
scene.add(foulLine);

const leftGutter = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 0.55, LANE_LENGTH + 6),
  new THREE.MeshStandardMaterial({
    color: 0x232830,
    roughness: 0.32,
    metalness: 0.1,
  })
);
leftGutter.position.set(-(LANE_WIDTH / 2 + 0.8), -0.18, -4);
leftGutter.receiveShadow = true;
scene.add(leftGutter);

const rightGutter = leftGutter.clone();
rightGutter.position.x *= -1;
scene.add(rightGutter);

const leftCap = new THREE.Mesh(
  new THREE.BoxGeometry(0.18, 0.22, LANE_LENGTH + 8),
  new THREE.MeshStandardMaterial({
    color: 0x767d88,
    roughness: 0.4,
    metalness: 0.12,
  })
);
leftCap.position.set(-(LANE_WIDTH / 2 + 1.4), 0.12, -4);
scene.add(leftCap);

const rightCap = leftCap.clone();
rightCap.position.x *= -1;
scene.add(rightCap);

const deckFloor = new THREE.Mesh(
  new THREE.PlaneGeometry(LANE_WIDTH + 1.2, 5.5),
  new THREE.MeshPhysicalMaterial({
    color: 0xd0b48a,
    side: THREE.DoubleSide,
    roughness: 0.5,
    metalness: 0.03,
    clearcoat: 0.35,
  })
);
deckFloor.rotation.x = -Math.PI / 2;
deckFloor.position.set(0, 0.02, -19.5);
scene.add(deckFloor);

const deckBack = new THREE.Mesh(
  new THREE.BoxGeometry(13, 4.5, 1.4),
  new THREE.MeshStandardMaterial({
    color: 0x1f232a,
    roughness: 0.8,
  })
);
deckBack.position.set(0, 2.2, -24.5);
scene.add(deckBack);

const deckTop = new THREE.Mesh(
  new THREE.BoxGeometry(13.6, 0.4, 2.2),
  new THREE.MeshStandardMaterial({
    color: 0x3a404c,
    roughness: 0.44,
    metalness: 0.08,
  })
);
deckTop.position.set(0, 4.7, -24.2);
scene.add(deckTop);

const ballMesh = new THREE.Mesh(
  new THREE.SphereGeometry(BALL_RADIUS, 32, 32),
  new THREE.MeshPhysicalMaterial({
    color: 0x8b1a18,
    roughness: 0.18,
    metalness: 0.18,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 1.1,
  })
);
ballMesh.castShadow = true;
scene.add(ballMesh);

const fingerHoleGeometry = new THREE.SphereGeometry(0.14, 18, 18);
const fingerHoleMaterial = new THREE.MeshStandardMaterial({
  color: 0x2b0505,
  roughness: 0.9,
});

[
  [0.22, 0.35, 0.88],
  [-0.02, 0.24, 0.96],
  [-0.24, 0.1, 0.83],
].forEach(([x, y, z]) => {
  const hole = new THREE.Mesh(fingerHoleGeometry, fingerHoleMaterial);
  hole.position.set(x, y, z);
  ballMesh.add(hole);
});

const ballBody = new Body({
  mass: 6,
  material: ballPhysicsMaterial,
  linearDamping: 0.16,
  angularDamping: 0.3,
  shape: new Sphere(BALL_RADIUS),
  position: BALL_START.clone(),
});
world.addBody(ballBody);

const keyLight = new THREE.DirectionalLight(0xfff4df, 1.25);
keyLight.position.set(10, 24, 16);
keyLight.castShadow = true;
keyLight.shadow.camera.left = -18;
keyLight.shadow.camera.right = 18;
keyLight.shadow.camera.top = 18;
keyLight.shadow.camera.bottom = -18;
scene.add(keyLight);

const fillLight = new THREE.SpotLight(0xfff4e0, 1.8, 80, Math.PI / 7, 0.5, 1);
fillLight.position.set(0, 16, 6);
fillLight.target.position.set(0, 0, -10);
fillLight.castShadow = true;
fillLight.shadow.mapSize.set(1024, 1024);
scene.add(fillLight);
scene.add(fillLight.target);

const rimLight = new THREE.PointLight(0xaec8ff, 0.6, 80);
rimLight.position.set(0, 8, -25);
scene.add(rimLight);

scene.add(new THREE.HemisphereLight(0xf8efe2, 0x1a202b, 0.72));

const panel = createPanel({
  title: "index_sound: 충돌 사운드가 있는 볼링",
  description: "glTF 핀과 레인 텍스처에 충돌 사운드를 더해 최종 데모를 완성합니다.",
});

const settings = {
  impulseStrength: 112,
  reset: resetDemo,
};

const gui = new GUI();
gui.add(settings, "impulseStrength", 70, 150, 1).name("launch power");
gui.add(settings, "reset").name("reset");

const clock = new THREE.Clock();
const loader = new GLTFLoader();
const pinPositions = getPinPositions();
let resetPinPositions = [];
const pins = [];
let hasLaunched = false;

const listener = new THREE.AudioListener();
camera.add(listener);

const soundPlayers = Array.from({ length: 5 }, () => {
  const audio = new THREE.Audio(listener);
  audio.setVolume(0.45);
  return audio;
});

let pinSoundReady = false;
let lastSoundTime = 0;
let nextSoundIndex = 0;
let soundStatusTimer = null;
let hasPlayedImpactSound = false;

const audioLoader = new THREE.AudioLoader();
audioLoader.load("sound/pin_sound.mp3", (buffer) => {
  soundPlayers.forEach((player) => {
    player.setBuffer(buffer);
  });
  pinSoundReady = true;
  updateSoundStatus("준비 완료");
});

panel.launchButton.addEventListener("click", async () => {
  await ensureAudioReady();
  launchBall();
});
panel.resetButton.addEventListener("click", resetDemo);

window.addEventListener("keydown", async (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    await ensureAudioReady();
    launchBall();
  }
  if (event.code === "KeyR") {
    resetDemo();
  }
});

window.bowlingDemo = {
  async launchBall() {
    await ensureAudioReady();
    launchBall();
  },
  resetDemo,
  async prepareAudio() {
    await ensureAudioReady();
  },
  setImpulseStrength(value) {
    settings.impulseStrength = value;
  },
};

loader.load("model/scene.gltf", (gltf) => {
  const pinTemplate = gltf.scene;
  pinTemplate.scale.setScalar(10);

  const bounds = new THREE.Box3().setFromObject(pinTemplate);
  const center = bounds.getCenter(new THREE.Vector3());
  const localOffset = new THREE.Vector3(-center.x, -bounds.min.y, -center.z);
  const bodyCenterY = PIN_BODY_HALF_EXTENTS.y;
  const meshYOffset = -bodyCenterY;
  resetPinPositions = pinPositions.map(
    (position) => new Vec3(position.x, bodyCenterY, position.z)
  );

  pinTemplate.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    node.castShadow = true;
    node.receiveShadow = true;
    node.material = node.material.clone();
    node.material.roughness = 0.44;
    node.material.metalness = 0.02;
    node.material.envMapIntensity = 0.9;
  });

  pinPositions.forEach((position, index) => {
    const wrapper = new THREE.Group();
    const clone = pinTemplate.clone(true);
    clone.position.copy(localOffset);
    clone.position.y += meshYOffset;
    wrapper.add(clone);
    wrapper.position.copy(resetPinPositions[index]);
    scene.add(wrapper);

    const body = new Body({
      mass: 1,
      material: pinPhysicsMaterial,
      linearDamping: 0.38,
      angularDamping: 0.72,
      allowSleep: true,
      sleepSpeedLimit: 0.15,
      sleepTimeLimit: 0.4,
      shape: new Box(PIN_BODY_HALF_EXTENTS),
      position: resetPinPositions[index].clone(),
    });
    body.addEventListener("collide", (event) => {
      handleImpact(Math.abs(event.contact.getImpactVelocityAlongNormal()));
    });

    world.addBody(body);
    pins.push({ mesh: wrapper, body });
  });

  resetDemo();
});

ballBody.addEventListener("collide", (event) => {
  handleImpact(Math.abs(event.contact.getImpactVelocityAlongNormal()));
});

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
      positions.push(new Vec3(startX + column * columnSpacing, 0, z));
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

  const sound = document.createElement("p");
  sound.className = "bowling-panel__sound";

  panelRoot.append(heading, text, actions, hint, status, sound);
  document.body.appendChild(panelRoot);

  return {
    launchButton,
    resetButton,
    status,
    sound,
  };
}

function updateStatus() {
  const knockedPins = pins.filter((pin) => isPinDown(pin.body)).length;
  const stateLabel = hasLaunched ? "진행 중" : "대기 중";
  panel.status.textContent = `상태: ${stateLabel} | 쓰러진 핀: ${knockedPins} / 10 | 렌더 + 사운드 데모`;
}

function updateSoundStatus(message) {
  panel.sound.textContent = `사운드: ${message}`;
}

function isPinDown(body) {
  return Math.abs(body.quaternion.x) > 0.2 || Math.abs(body.quaternion.z) > 0.2;
}

async function ensureAudioReady() {
  if (listener.context.state !== "running") {
    await listener.context.resume();
  }
  updateSoundStatus(pinSoundReady ? "준비 완료" : "불러오는 중");
}

function handleImpact(impactStrength) {
  if (
    !hasLaunched ||
    !pinSoundReady ||
    hasPlayedImpactSound ||
    impactStrength < 1.6
  ) {
    return;
  }

  const now = performance.now();
  if (now - lastSoundTime < 120) {
    return;
  }

  lastSoundTime = now;
  const player = soundPlayers[nextSoundIndex % soundPlayers.length];
  nextSoundIndex += 1;
  hasPlayedImpactSound = true;

  if (player.isPlaying) {
    player.stop();
  }

  player.setVolume(Math.min(0.8, 0.2 + impactStrength / 12));
  player.setPlaybackRate(THREE.MathUtils.clamp(0.86 + impactStrength / 10, 0.9, 1.22));
  player.play();
  updateSoundStatus(`충돌 재생 중 (${impactStrength.toFixed(1)})`);

  if (soundStatusTimer) {
    window.clearTimeout(soundStatusTimer);
  }
  soundStatusTimer = window.setTimeout(() => {
    updateSoundStatus("준비 완료");
  }, 240);
}

function launchBall() {
  if (hasLaunched || pins.length === 0) {
    return;
  }

  hasLaunched = true;
  hasPlayedImpactSound = false;
  ballBody.wakeUp();
  ballBody.applyImpulse(new Vec3(0, 0, -settings.impulseStrength), ballBody.position);
  updateStatus();
}

function resetDemo() {
  hasLaunched = false;
  hasPlayedImpactSound = false;

  ballBody.position.copy(BALL_START);
  ballBody.velocity.set(0, 0, 0);
  ballBody.angularVelocity.set(0, 0, 0);
  ballBody.quaternion.set(0, 0, 0, 1);

  pins.forEach((pin, index) => {
    pin.body.position.copy(resetPinPositions[index]);
    pin.body.velocity.set(0, 0, 0);
    pin.body.angularVelocity.set(0, 0, 0);
    pin.body.quaternion.set(0, 0, 0, 1);
  });

  updateStatus();
  updateSoundStatus(pinSoundReady ? "준비 완료" : "불러오는 중");
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
