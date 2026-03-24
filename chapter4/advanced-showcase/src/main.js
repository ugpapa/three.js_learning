import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import dragonModelUrl from "./assets/models/dragon/dragon.fbx?url";
import dragonColorUrl from "./assets/models/dragon/textures/Dragon_Bump_Col2.jpg?url";
import dragonGroundUrl from "./assets/models/dragon/textures/Dragon_ground_color.jpg?url";
import dragonNorUrl from "./assets/models/dragon/textures/Dragon_Nor.jpg?url";
import dragonNormalUrl from "./assets/models/dragon/textures/Dragon_Nor_mirror2.jpg?url";
import floorColorUrl from "./assets/models/dragon/textures/Floor_C.jpg?url";
import floorNormalUrl from "./assets/models/dragon/textures/Floor_N.jpg?url";
import floorSpecUrl from "./assets/models/dragon/textures/Floor_S.jpg?url";

const canvas = document.querySelector("#three-canvas");
const currentActionTitle = document.querySelector("#current-action-title");
const currentActionBody = document.querySelector("#current-action-body");

const ACTION_COPY = {
  idle: {
    label: "멈춤",
    body:
      "기본 대기 자세입니다. 이 상태에서는 모델의 실루엣과 텍스처, 조명 반응을 가장 안정적으로 확인할 수 있습니다.",
  },
  walk: {
    label: "걷기",
    body:
      "느린 보행 클립입니다. 발과 꼬리의 리듬, 몸통의 흔들림, 날개가 동작에 어떻게 반응하는지 읽기 좋습니다.",
  },
  run: {
    label: "달리기",
    body:
      "속도가 붙는 구간입니다. 무게 중심이 앞으로 쏠리면서 캐릭터의 공격성과 게임 플레이용 추진감이 드러납니다.",
  },
  fly: {
    label: "비행",
    body:
      "공중 동작 클립입니다. 날개 궤적과 상체 회전이 크게 살아나서 드래곤의 스케일을 가장 극적으로 보여 줍니다.",
  },
};

const VIEW_PRESETS = {
  default: {
    position: new THREE.Vector3(31, 16.5, 45),
    target: new THREE.Vector3(0, 5.2, 0),
  },
  fly: {
    position: new THREE.Vector3(43, 22.5, 60),
    target: new THREE.Vector3(0, 6.5, 0),
  },
};

const pixelRatio = Math.min(window.devicePixelRatio, 2);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(pixelRatio);
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x070a10);
scene.fog = new THREE.Fog(0x070a10, 32, 72);

const camera = new THREE.PerspectiveCamera(
  30,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  200
);
camera.position.copy(VIEW_PRESETS.default.position);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
controls.mouseButtons.MIDDLE = THREE.MOUSE.ROTATE;
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
controls.minDistance = 26;
controls.maxDistance = 76;
controls.minPolarAngle = 0.22;
controls.maxPolarAngle = Math.PI / 2.04;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.66;
controls.target.set(0, 5.2, 0);
controls.addEventListener("start", () => {
  state.userOrbiting = true;
});
controls.addEventListener("end", () => {
  state.userOrbiting = false;
  cameraGoal.position.copy(camera.position);
  cameraGoal.target.copy(controls.target);
});

const cameraGoal = {
  position: VIEW_PRESETS.default.position.clone(),
  target: VIEW_PRESETS.default.target.clone(),
};

const composerTarget = new THREE.WebGLRenderTarget(
  canvas.clientWidth * pixelRatio,
  canvas.clientHeight * pixelRatio,
  {
    type: THREE.HalfFloatType,
    samples: renderer.capabilities.isWebGL2 ? 4 : 0,
  }
);

const composer = new EffectComposer(renderer, composerTarget);
composer.setPixelRatio(pixelRatio);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
  0.18,
  0.22,
  0.84
);
composer.addPass(bloomPass);
composer.addPass(new OutputPass());

const clock = new THREE.Clock();
const root = new THREE.Group();
scene.add(root);

const state = {
  autoRotate: true,
  currentAction: "idle",
  currentActionDirection: 1,
  pointerPrimaryDown: false,
  userOrbiting: false,
  dragonLiftY: 0,
};

const inputState = {
  forward: false,
  backward: false,
  shift: false,
  left: false,
  right: false,
};

const stage = createStage();
root.add(stage.group);
const lights = setupLights();

let dragon = null;
let mixer = null;
let activeAction = null;
const actions = new Map();

window.addEventListener("resize", handleResize);
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
window.addEventListener("blur", resetInputState);
window.addEventListener("pointerdown", handlePointerDown);

init().catch((error) => {
  console.error("Failed to initialize dragon animation showcase", error);
});

async function init() {
  canvas.focus();
  dragon = await createDragon();
  root.add(dragon.group);
  mixer = dragon.mixer;

  dragon.actions.forEach((action, key) => {
    actions.set(key, action);
  });

  setupUI();
  const defaultAction = actions.has("idle")
    ? "idle"
    : actions.has("walk")
      ? "walk"
      : actions.keys().next().value;
  playAction(defaultAction);
  handleResize();
  animate();

  window.__dragonDebug = {
    dragon,
    camera,
    controls,
    scene,
    actions: [...actions.keys()],
    state,
  };
}

function createStage() {
  const group = new THREE.Group();
  const textureLoader = new THREE.TextureLoader();
  const floorColor = textureLoader.load(floorColorUrl);
  const floorNormal = textureLoader.load(floorNormalUrl);
  const floorSpec = textureLoader.load(floorSpecUrl);

  [floorColor, floorNormal, floorSpec].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(18, 30);
  });

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 160, 1, 1),
    new THREE.MeshStandardMaterial({
      map: floorColor,
      normalMap: floorNormal,
      roughnessMap: floorSpec,
      color: 0x6f655b,
      metalness: 0.06,
      roughness: 0.84,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);

  return {
    group,
    floorTextures: [floorColor, floorNormal, floorSpec],
  };
}

async function createDragon() {
  const textureLoader = new THREE.TextureLoader();
  const [dragonColor, dragonNormal] = await Promise.all([
    textureLoader.loadAsync(dragonColorUrl),
    textureLoader.loadAsync(dragonNormalUrl),
  ]);

  dragonColor.flipY = false;
  dragonNormal.flipY = false;

  const manager = new THREE.LoadingManager();
  const textureMap = new Map([
    ["Dragon_Bump_Col2.jpg", dragonColorUrl],
    ["Dragon_ground_color.jpg", dragonGroundUrl],
    ["Dragon_Nor.jpg", dragonNorUrl],
    ["Dragon_Nor_mirror2.jpg", dragonNormalUrl],
  ]);
  manager.setURLModifier((url) => {
    const normalized = url.split(/[\\\\/]/).pop() || url;
    return textureMap.get(normalized) || url;
  });

  const loader = new FBXLoader(manager);
  const model = await loader.loadAsync(dragonModelUrl);

  const group = new THREE.Group();
  const initialBox = new THREE.Box3().setFromObject(model);
  const initialSize = initialBox.getSize(new THREE.Vector3());
  const targetHeight = 11.5;
  const scale = targetHeight / initialSize.y;
  model.scale.setScalar(scale);
  model.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  model.position.x -= center.x;
  model.position.z -= center.z;
  model.position.y -= box.min.y;
  model.position.y += 0.1;
  model.rotation.y = -0.52;
  model.updateMatrixWorld(true);

  const dragonMaterial = new THREE.MeshStandardMaterial({
    map: dragonColor,
    normalMap: dragonNormal,
    normalScale: new THREE.Vector2(0.28, 0.28),
    color: 0x8b7663,
    roughness: 0.9,
    metalness: 0.04,
    side: THREE.FrontSide,
  });
  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: 0xf2b84a,
    emissive: 0x4f2200,
    emissiveIntensity: 0.4,
    roughness: 0.26,
  });
  const headAnchor = model.getObjectByName("head");
  const tailAnchor = model.getObjectByName("tail_1");

  model.traverse((node) => {
    if (!node.isMesh && !node.isSkinnedMesh) {
      return;
    }

    node.castShadow = true;
    node.receiveShadow = true;

    const lowerName = node.name.toLowerCase();
    if (
      lowerName.includes("auge") ||
      lowerName.includes("eye") ||
      lowerName.includes("lens")
    ) {
      node.material = eyeMaterial;
      return;
    }

    node.material = dragonMaterial;
  });

  group.add(model);

  const actionsByKey = new Map();
  let dragonMixer = null;

  if (model.animations?.length) {
    dragonMixer = new THREE.AnimationMixer(model);

    model.animations.forEach((clip) => {
      const actionKey = normalizeActionName(clip.name);
      if (!actionKey || actionsByKey.has(actionKey)) {
        return;
      }

      const action = dragonMixer.clipAction(clip);
      action.enabled = true;
      action.clampWhenFinished = false;
      action.loop = THREE.LoopRepeat;
      actionsByKey.set(actionKey, action);
    });
  }

  return {
    group,
    model,
    mixer: dragonMixer,
    actions: actionsByKey,
    size,
    dragonMaterial,
    headAnchor,
    tailAnchor,
  };
}

function normalizeActionName(name) {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("idel") || lowerName.includes("idle")) {
    return "idle";
  }
  if (lowerName.includes("walk")) {
    return "walk";
  }
  if (lowerName.includes("run")) {
    return "run";
  }
  if (lowerName.includes("fly")) {
    return "fly";
  }

  return null;
}

function playAction(key, options = {}) {
  const nextAction = actions.get(key);
  if (!nextAction || activeAction === nextAction) {
    if (nextAction && options.timeScale !== undefined) {
      nextAction.setEffectiveTimeScale(options.timeScale);
      state.currentActionDirection = Math.sign(options.timeScale) || 1;
    }
    return;
  }

  const speedMap = {
    idle: 1,
    walk: 0.96,
    run: 1,
    fly: 0.92,
  };

  nextAction.reset();
  const nextTimeScale = options.timeScale ?? speedMap[key] ?? 1;
  nextAction.setEffectiveTimeScale(nextTimeScale);
  nextAction.setEffectiveWeight(1);
  nextAction.fadeIn(0.35);
  nextAction.play();

  if (activeAction) {
    activeAction.fadeOut(0.35);
  }

  activeAction = nextAction;
  state.currentAction = key;
  state.currentActionDirection = Math.sign(nextTimeScale) || 1;
  const viewPreset = key === "fly" ? VIEW_PRESETS.fly : VIEW_PRESETS.default;
  if (dragon) {
    cameraGoal.position.copy(dragon.group.position).add(viewPreset.position);
    cameraGoal.target.copy(dragon.group.position).add(viewPreset.target);
  } else {
    cameraGoal.position.copy(viewPreset.position);
    cameraGoal.target.copy(viewPreset.target);
  }
  updateUI();
}

function setupLights() {
  const hemi = new THREE.HemisphereLight(0x889dbe, 0x05070c, 0.6);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xfff2d8, 1.52);
  key.position.set(12, 16, 10);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -20;
  key.shadow.camera.right = 20;
  key.shadow.camera.top = 20;
  key.shadow.camera.bottom = -20;
  key.shadow.bias = -0.00012;
  key.shadow.normalBias = 0.03;
  scene.add(key);

  const fill = new THREE.PointLight(0x7aa8ff, 0.88, 38);
  fill.position.set(-10, 8, 14);
  scene.add(fill);

  const rim = new THREE.PointLight(0xff8a3d, 1.04, 34);
  rim.position.set(-14, 9, -9);
  scene.add(rim);

  return { hemi, key, fill, rim };
}

function setupUI() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      applyActionPreset(button.dataset.action);
    });
  });

  document.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.toggle === "autorotate") {
        state.autoRotate = !state.autoRotate;
        updateUI();
      }
    });
  });
}

function applyActionPreset(action) {
  inputState.forward = false;
  inputState.backward = false;
  inputState.shift = false;
  state.pointerPrimaryDown = false;

  if (action === "walk") {
    inputState.forward = true;
    syncMovementFromInput();
    return;
  }

  if (action === "run") {
    inputState.forward = true;
    inputState.shift = true;
    syncMovementFromInput();
    return;
  }

  if (action === "fly") {
    playAction("fly");
    return;
  }

  playAction("idle");
}

function updateUI() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.action === state.currentAction);
  });

  document.querySelectorAll("[data-toggle]").forEach((button) => {
    if (button.dataset.toggle === "autorotate") {
      button.classList.toggle("is-active", state.autoRotate);
    }
  });

  const copy = ACTION_COPY[state.currentAction] || ACTION_COPY.idle;
  currentActionTitle.textContent = copy.label;
  currentActionBody.textContent = copy.body;
}

function handleResize() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (!width || !height) {
    return;
  }

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
  composer.setSize(width, height);
  composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  bloomPass.setSize(width, height);
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  mixer?.update(delta);
  updateDirectionalSteering(delta);
  updateTreadmillMotion(delta);
  updateDragonAltitude(clock.elapsedTime);
  updateLightingProfile();

  controls.autoRotate =
    state.autoRotate && !inputState.forward && !inputState.backward && !state.userOrbiting;
  if (!state.userOrbiting) {
    camera.position.lerp(cameraGoal.position, 0.045);
    controls.target.lerp(cameraGoal.target, 0.05);
  }
  controls.update();
  if (controls.autoRotate) {
    cameraGoal.position.copy(camera.position);
    cameraGoal.target.copy(controls.target);
  }
  composer.render();
}

function updateDragonAltitude(elapsedTime) {
  if (!dragon) {
    return;
  }

  const targetLift =
    state.currentAction === "fly" ? 5.8 + Math.sin(elapsedTime * 2.2) * 0.35 : 0;
  const nextLift = THREE.MathUtils.lerp(state.dragonLiftY, targetLift, 0.08);
  const deltaLift = nextLift - state.dragonLiftY;

  state.dragonLiftY = nextLift;
  dragon.group.position.y = nextLift;

  if (Math.abs(deltaLift) < 0.0001) {
    return;
  }

  cameraGoal.position.y += deltaLift;
  cameraGoal.target.y += deltaLift;

  if (state.userOrbiting) {
    camera.position.y += deltaLift;
    controls.target.y += deltaLift;
  }
}

function updateLightingProfile() {
  const isFly = state.currentAction === "fly";
  const blend = isFly ? 1 : 0;

  lights.hemi.intensity += ((0.6 + blend * 0.22) - lights.hemi.intensity) * 0.08;
  lights.key.intensity += ((1.52 + blend * 0.48) - lights.key.intensity) * 0.08;
  lights.fill.intensity += ((0.88 + blend * 0.42) - lights.fill.intensity) * 0.08;
  lights.rim.intensity += ((1.04 + blend * 0.36) - lights.rim.intensity) * 0.08;
  scene.fog.near += ((32 - blend * 10) - scene.fog.near) * 0.08;
  scene.fog.far += ((72 + blend * 18) - scene.fog.far) * 0.08;
}

function updateDirectionalSteering(delta) {
  if (!dragon || (!inputState.forward && !inputState.backward)) {
    return;
  }

  const turnDirection = Number(inputState.left) - Number(inputState.right);
  if (!turnDirection) {
    return;
  }

  const speed =
    state.currentAction === "run" ? 1.2 : state.currentAction === "walk" ? 0.72 : 0.5;
  dragon.group.rotation.y += turnDirection * delta * speed;
}

function updateTreadmillMotion(delta) {
  if (!dragon || (!inputState.forward && !inputState.backward)) {
    return;
  }

  const headWorld = new THREE.Vector3();
  const tailWorld = new THREE.Vector3();
  const forward = new THREE.Vector3();

  if (dragon.headAnchor && dragon.tailAnchor) {
    dragon.headAnchor.getWorldPosition(headWorld);
    dragon.tailAnchor.getWorldPosition(tailWorld);
    forward.copy(headWorld).sub(tailWorld);
  } else {
    const worldQuaternion = new THREE.Quaternion();
    dragon.model.getWorldQuaternion(worldQuaternion);
    forward.set(1, 0, 0).applyQuaternion(worldQuaternion);
  }

  forward.y = 0;
  forward.normalize();

  const movingForward = inputState.forward ? 1 : -1;
  const speed =
    movingForward > 0
      ? state.currentAction === "run"
        ? 6.8
        : state.currentAction === "fly"
          ? 5.8
          : 3.6
      : 2.6;

  const treadmillDelta = delta * speed * movingForward;
  const scroll = treadmillDelta * 0.18;
  stage.floorTextures.forEach((texture) => {
    texture.offset.x += forward.x * scroll;
    texture.offset.y -= forward.z * scroll;
  });
}

function handleKeyDown(event) {
  if (event.repeat) {
    return;
  }

  if (event.code === "KeyW") {
    inputState.forward = true;
    syncMovementFromInput();
    return;
  }

  if (event.code === "KeyS") {
    inputState.backward = true;
    syncMovementFromInput();
    return;
  }

  if (event.code === "KeyA") {
    inputState.left = true;
    return;
  }

  if (event.code === "KeyD") {
    inputState.right = true;
    return;
  }

  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    inputState.shift = true;
    syncMovementFromInput();
    return;
  }

}

function handleKeyUp(event) {
  if (event.code === "KeyW") {
    inputState.forward = false;
    syncMovementFromInput();
    return;
  }

  if (event.code === "KeyS") {
    inputState.backward = false;
    syncMovementFromInput();
    return;
  }

  if (event.code === "KeyA") {
    inputState.left = false;
    return;
  }

  if (event.code === "KeyD") {
    inputState.right = false;
    return;
  }

  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    inputState.shift = false;
    syncMovementFromInput();
  }
}

function handlePointerDown(event) {
  if (event.button === 0) {
    state.pointerPrimaryDown = true;
    syncMovementFromInput();
    const releasePrimary = () => {
      state.pointerPrimaryDown = false;
      window.removeEventListener("pointerup", releasePrimary);
      syncMovementFromInput();
    };
    window.addEventListener("pointerup", releasePrimary);
    return;
  }

  if (event.button === 1) {
    event.preventDefault();
    playAction("fly");
  }
}

function resetInputState() {
  inputState.forward = false;
  inputState.backward = false;
  inputState.shift = false;
  inputState.left = false;
  inputState.right = false;
  state.pointerPrimaryDown = false;
  syncMovementFromInput();
}

function syncMovementFromInput() {
  if (inputState.backward) {
    playAction("walk", { timeScale: -0.92 });
    return;
  }

  if (inputState.forward) {
    const shouldRun = inputState.shift || state.pointerPrimaryDown;
    playAction(shouldRun ? "run" : "walk", { timeScale: shouldRun ? 1 : 0.96 });
    return;
  }

  playAction("idle");
}
