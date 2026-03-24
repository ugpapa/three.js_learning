/** @format */

import "../scss/styles.scss";
import "../professional.css";
import "bootstrap";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const clock = new THREE.Clock();

const showcaseEntries = [
  {
    canvas: "#hero-canvas",
    card: ".hero-stage",
    model: "./models/BONBOX.glb",
    targetSize: 5.8,
    accent: 0xf97316,
    rotationSpeed: 0.35,
    floatSpeed: 1.2,
    floatAmount: 0.14,
    framePadding: 1.28,
    heightFitFactor: 0.92,
    cameraHeightBias: 0,
    cameraSideBias: 0,
    depthBias: 1.08,
  },
  {
    canvas: "#card-canvas-1",
    card: '[data-card="1"]',
    model: "./models/1stAni.glb",
    targetSize: 3.4,
    accent: 0x93c5fd,
    rotationSpeed: 0.32,
    floatSpeed: 1.8,
    floatAmount: 0.08,
    framePadding: 1.18,
    heightFitFactor: 0.76,
    cameraHeightBias: 0,
    cameraSideBias: 0,
    depthBias: 1.02,
  },
  {
    canvas: "#card-canvas-2",
    card: '[data-card="2"]',
    model: "./models/BONBOX.glb",
    targetSize: 3.5,
    accent: 0xf59e0b,
    rotationSpeed: 0.28,
    floatSpeed: 1.4,
    floatAmount: 0.07,
    framePadding: 1.18,
    heightFitFactor: 0.76,
    cameraHeightBias: 0,
    cameraSideBias: 0,
    depthBias: 1.02,
  },
  {
    canvas: "#card-canvas-3",
    card: '[data-card="3"]',
    model: "./models/glass_box.glb",
    targetSize: 3.25,
    accent: 0x38bdf8,
    rotationSpeed: 0.24,
    floatSpeed: 1.5,
    floatAmount: 0.06,
    framePadding: 1.16,
    heightFitFactor: 0.72,
    cameraHeightBias: 0,
    cameraSideBias: 0,
    depthBias: 1,
  },
  {
    canvas: "#card-canvas-4",
    card: '[data-card="4"]',
    model: "./models/steel.glb",
    targetSize: 3.6,
    accent: 0xcbd5e1,
    rotationSpeed: 0.26,
    floatSpeed: 1.3,
    floatAmount: 0.05,
    framePadding: 1.16,
    heightFitFactor: 0.72,
    cameraHeightBias: 0,
    cameraSideBias: 0,
    depthBias: 1,
  },
];

const viewers = showcaseEntries.map(createViewer).filter(Boolean);

if (viewers.length > 0) {
  window.addEventListener("resize", resizeAll);
  resizeAll();
  animate();
}

function createViewer(config) {
  const canvas = document.querySelector(config.canvas);
  const container = document.querySelector(config.card);

  if (!canvas || !container) {
    console.warn(`Skipped viewer setup for ${config.canvas}: missing container or canvas.`);
    return null;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  const pivot = new THREE.Group();
  const content = new THREE.Group();

  scene.add(pivot);
  pivot.add(content);

  const hemi = new THREE.HemisphereLight(0xe0f2fe, 0x050b12, 1.4);
  scene.add(hemi);

  const keyLight = new THREE.DirectionalLight(config.accent, 2.2);
  keyLight.position.set(6, 10, 8);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xffffff, 1.6, 60);
  fillLight.position.set(-5, 4, 6);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(config.accent, 4, 40);
  rimLight.position.set(0, 2, -8);
  scene.add(rimLight);

  const platform = new THREE.Mesh(
    new THREE.CylinderGeometry(2.6, 3, 0.12, 48),
    new THREE.MeshStandardMaterial({
      color: 0x09111d,
      metalness: 0.35,
      roughness: 0.5,
      emissive: config.accent,
      emissiveIntensity: 0.04,
    })
  );
  platform.position.y = -1.45;
  platform.receiveShadow = true;
  scene.add(platform);

  const halo = new THREE.Mesh(
    new THREE.RingGeometry(3.1, 3.7, 64),
    new THREE.MeshBasicMaterial({
      color: config.accent,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    })
  );
  halo.rotation.x = -Math.PI / 2;
  halo.position.y = -1.38;
  scene.add(halo);

  const state = {
    renderer,
    scene,
    camera,
    pivot,
    canvasElement: canvas,
    container,
    platform,
    halo,
    mixer: null,
    model: null,
    loaded: false,
    baseModelY: 0,
    pointerX: 0,
    pointerY: 0,
    ...config,
  };

  container.addEventListener("pointermove", (event) => {
    const rect = container.getBoundingClientRect();
    state.pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    state.pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  container.addEventListener("pointerleave", () => {
    state.pointerX = 0;
    state.pointerY = 0;
  });

  loader.load(
    config.model,
    (gltf) => {
      const modelRoot = gltf.scene;
      const normalized = normalizeModel(modelRoot, config.targetSize);

      normalized.traverse((child) => {
        if (!child.isMesh) {
          return;
        }

        child.castShadow = true;
        child.receiveShadow = true;
      });

      if (gltf.animations.length > 0) {
        state.mixer = new THREE.AnimationMixer(normalized);
        gltf.animations.forEach((clip) => {
          state.mixer.clipAction(clip).play();
        });
      }

      content.add(normalized);
      state.model = normalized;
      state.loaded = true;
      frameViewer(state);
    },
    undefined,
    (error) => {
      console.error(`Failed to load ${config.model}`, error);
    }
  );

  return state;
}

function normalizeModel(model, targetSize) {
  const wrapper = new THREE.Group();
  wrapper.add(model);

  const initialBox = new THREE.Box3().setFromObject(model);
  const initialSize = new THREE.Vector3();
  const initialCenter = new THREE.Vector3();

  initialBox.getSize(initialSize);
  initialBox.getCenter(initialCenter);

  const maxAxis = Math.max(initialSize.x, initialSize.y, initialSize.z) || 1;
  const scale = targetSize / maxAxis;
  model.scale.setScalar(scale);

  const scaledBox = new THREE.Box3().setFromObject(model);
  const scaledCenter = new THREE.Vector3();
  scaledBox.getCenter(scaledCenter);
  model.position.sub(scaledCenter);

  const groundedBox = new THREE.Box3().setFromObject(model);
  model.position.y -= groundedBox.min.y;
  model.position.y -= 1.38;

  return wrapper;
}

function frameViewer(viewer) {
  if (!viewer.model) {
    return;
  }

  const box = new THREE.Box3().setFromObject(viewer.model);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();

  box.getSize(size);
  box.getCenter(center);

  const width = viewer.container.clientWidth;
  const height = Math.max(260, viewer.canvasElement.clientHeight || viewer.container.clientHeight);
  const aspect = width / height;
  const fov = THREE.MathUtils.degToRad(viewer.camera.fov);

  const fitHeightDistance = size.y / (2 * Math.tan(fov / 2));
  const fitWidthDistance = size.x / (2 * aspect * Math.tan(fov / 2));
  const distance =
    Math.max(
      fitWidthDistance,
      fitHeightDistance * viewer.heightFitFactor,
      size.z * 0.9
    ) * viewer.framePadding;

  viewer.camera.position.set(
    center.x + size.x * viewer.cameraSideBias,
    center.y + size.y * viewer.cameraHeightBias,
    center.z + distance * viewer.depthBias
  );
  viewer.camera.lookAt(center.x, center.y + size.y * 0.02, center.z);

  const baseY = box.min.y - 0.06;
  const platformScale = Math.max(0.95, Math.max(size.x, size.z) * 0.42);

  viewer.platform.scale.set(platformScale, 1, platformScale);
  viewer.platform.position.y = baseY;
  viewer.halo.scale.set(platformScale, platformScale, 1);
  viewer.halo.position.y = baseY + 0.07;
  viewer.baseModelY = viewer.model.position.y;
}

function resizeAll() {
  viewers.forEach((viewer) => {
    const bounds = viewer.container.getBoundingClientRect();
    const width = Math.max(1, Math.round(bounds.width));
    const height = Math.max(260, Math.round(bounds.height));

    viewer.camera.aspect = width / height;
    viewer.camera.updateProjectionMatrix();
    viewer.renderer.setSize(width, height, false);

    if (viewer.loaded) {
      frameViewer(viewer);
    }
  });
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  const elapsed = clock.elapsedTime;

  viewers.forEach((viewer) => {
    if (!viewer.loaded || !viewer.model) {
      return;
    }

    if (viewer.mixer) {
      viewer.mixer.update(delta);
    }

    viewer.pivot.rotation.y += delta * viewer.rotationSpeed;
    viewer.pivot.rotation.y += (viewer.pointerX * 0.55 - viewer.pivot.rotation.y) * 0.02;
    viewer.pivot.rotation.x += (-viewer.pointerY * 0.22 - viewer.pivot.rotation.x) * 0.04;
    viewer.model.position.y =
      viewer.baseModelY + Math.sin(elapsed * viewer.floatSpeed) * viewer.floatAmount;

    viewer.renderer.render(viewer.scene, viewer.camera);
  });
}
