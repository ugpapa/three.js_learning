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
    targetSize: 5.4,
    accent: 0xf97316,
    rotationSpeed: 0.35,
    floatSpeed: 1.2,
    floatAmount: 0.18,
  },
  {
    canvas: "#card-canvas-1",
    card: '[data-card="1"]',
    model: "./models/1stAni.glb",
    targetSize: 3.4,
    accent: 0x93c5fd,
    rotationSpeed: 0.32,
    floatSpeed: 1.8,
    floatAmount: 0.12,
  },
  {
    canvas: "#card-canvas-2",
    card: '[data-card="2"]',
    model: "./models/BONBOX.glb",
    targetSize: 3.5,
    accent: 0xf59e0b,
    rotationSpeed: 0.28,
    floatSpeed: 1.4,
    floatAmount: 0.1,
  },
  {
    canvas: "#card-canvas-3",
    card: '[data-card="3"]',
    model: "./models/glass_box.glb",
    targetSize: 3.25,
    accent: 0x38bdf8,
    rotationSpeed: 0.24,
    floatSpeed: 1.5,
    floatAmount: 0.1,
  },
  {
    canvas: "#card-canvas-4",
    card: '[data-card="4"]',
    model: "./models/steel.glb",
    targetSize: 3.6,
    accent: 0xcbd5e1,
    rotationSpeed: 0.26,
    floatSpeed: 1.3,
    floatAmount: 0.08,
  },
];

const viewers = showcaseEntries.map(createViewer);

window.addEventListener("resize", resizeAll);
resizeAll();
animate();

function createViewer(config) {
  const canvas = document.querySelector(config.canvas);
  const container = document.querySelector(config.card);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

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
    container,
    mixer: null,
    model: null,
    loaded: false,
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

      const cameraHeight = Math.max(1.5, config.targetSize * 0.55);
      const cameraDistance = Math.max(6.5, config.targetSize * 2.05);

      camera.position.set(config.targetSize * 0.12, cameraHeight, cameraDistance);
      camera.lookAt(0, config.targetSize * 0.12, 0);

      state.model = normalized;
      state.loaded = true;
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

function resizeAll() {
  viewers.forEach((viewer) => {
    const width = viewer.canvasElement?.clientWidth || viewer.container.clientWidth;
    const canvas =
      viewer.renderer.domElement || document.querySelector(viewer.canvas);
    const height = canvas.clientHeight || Math.max(260, viewer.container.clientHeight);

    viewer.camera.aspect = width / height;
    viewer.camera.updateProjectionMatrix();
    viewer.renderer.setSize(width, height, false);
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
      -1.38 + Math.sin(elapsed * viewer.floatSpeed) * viewer.floatAmount;

    viewer.renderer.render(viewer.scene, viewer.camera);
  });
}
