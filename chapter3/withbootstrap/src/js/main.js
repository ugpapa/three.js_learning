/** @format */

import "../scss/styles.scss";
import "../style.css";

import * as bootstrap from "bootstrap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const canvasEntries = [
  {
    id: "canvas1",
    model: "./models/1stAni.glb",
    accent: 0xc084fc,
    targetSize: 4.4,
    spinX: 0.0016,
    spinY: 0.0038,
    stageScale: 1.28,
  },
  {
    id: "canvas2",
    model: "./models/BONBOX.glb",
    accent: 0xfb923c,
    targetSize: 4.9,
    spinX: 0.0011,
    spinY: 0.0028,
    stageScale: 1.18,
  },
  {
    id: "canvas3",
    model: "./models/glass_box.glb",
    accent: 0x22c55e,
    targetSize: 4.6,
    spinX: 0.0012,
    spinY: 0.0024,
    stageScale: 1.18,
  },
  {
    id: "canvas4",
    model: "./models/steel.glb",
    accent: 0xe2e8f0,
    targetSize: 4.8,
    spinX: 0.0009,
    spinY: 0.002,
    stageScale: 1.2,
  },
];

const loader = new GLTFLoader();
const clock = new THREE.Clock();
const viewers = canvasEntries.map(createViewer).filter(Boolean);
const carouselElement = document.querySelector("#carouselExampleControls");

if (viewers.length > 0) {
  window.addEventListener("resize", resizeAll);

  if (carouselElement) {
    carouselElement.addEventListener("slid.bs.carousel", () => {
      resizeAll();
      viewers.forEach(frameViewer);
    });
  }

  resizeAll();
  animate();
}

function createViewer(config) {
  const canvas = document.querySelector(`#${config.id}`);

  if (!canvas) {
    return null;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  const pivot = new THREE.Group();
  const content = new THREE.Group();

  scene.add(pivot);
  pivot.add(content);

  const ambientLight = new THREE.HemisphereLight(0xe2f3ff, 0x020617, 1.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(config.accent, 2.6);
  keyLight.position.set(5, 8, 8);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xffffff, 1.4, 40);
  fillLight.position.set(-5, 2, 6);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(config.accent, 3.4, 30);
  rimLight.position.set(0, 2, -7);
  scene.add(rimLight);

  const platform = new THREE.Mesh(
    new THREE.CylinderGeometry(2.8, 3.4, 0.22, 56),
    new THREE.MeshStandardMaterial({
      color: 0x0b1320,
      metalness: 0.38,
      roughness: 0.45,
      emissive: config.accent,
      emissiveIntensity: 0.045,
    })
  );
  platform.position.y = -1.65;
  scene.add(platform);

  const halo = new THREE.Mesh(
    new THREE.RingGeometry(3.5, 4.25, 72),
    new THREE.MeshBasicMaterial({
      color: config.accent,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
    })
  );
  halo.rotation.x = -Math.PI / 2;
  halo.position.y = -1.53;
  scene.add(halo);

  const state = {
    renderer,
    scene,
    camera,
    canvas,
    container: canvas.parentElement,
    pivot,
    content,
    platform,
    halo,
    model: null,
    mixer: null,
    loaded: false,
    baseY: 0,
    ...config,
  };

  loader.load(
    config.model,
    (gltf) => {
      const normalized = normalizeModel(gltf.scene, config.targetSize);

      normalized.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
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
  initialBox.getSize(initialSize);

  const maxAxis = Math.max(initialSize.x, initialSize.y, initialSize.z) || 1;
  const scale = targetSize / maxAxis;
  model.scale.setScalar(scale);

  const centeredBox = new THREE.Box3().setFromObject(model);
  const centered = centeredBox.getCenter(new THREE.Vector3());
  model.position.sub(centered);

  const groundedBox = new THREE.Box3().setFromObject(model);
  model.position.y -= groundedBox.min.y;

  return wrapper;
}

function frameViewer(viewer) {
  if (!viewer.model) {
    return;
  }

  const box = new THREE.Box3().setFromObject(viewer.model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const fov = THREE.MathUtils.degToRad(viewer.camera.fov);
  const distance = (maxDim / Math.tan(fov / 2)) * 1.08;

  viewer.camera.position.set(center.x, center.y + size.y * 0.1, center.z + distance);
  viewer.camera.lookAt(center);
  viewer.platform.scale.setScalar((maxDim / 3.2) * viewer.stageScale);
  viewer.halo.scale.setScalar((maxDim / 3.2) * viewer.stageScale);
  viewer.baseY = viewer.model.position.y;
}

function resizeAll() {
  viewers.forEach((viewer) => {
    const rect = viewer.container.getBoundingClientRect();
    const width = Math.max(Math.floor(rect.width), 1);
    const height = Math.max(Math.floor(rect.height), 1);

    viewer.renderer.setSize(width, height, false);
    viewer.camera.aspect = width / height;
    viewer.camera.updateProjectionMatrix();
  });
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  viewers.forEach((viewer) => {
    if (!viewer.loaded || !viewer.model) {
      return;
    }

    if (viewer.mixer) {
      viewer.mixer.update(delta);
    }

    viewer.model.rotation.y += viewer.spinY;
    viewer.model.rotation.x += viewer.spinX;
    viewer.model.position.y = viewer.baseY + Math.sin(elapsed * 1.2) * 0.05;
    viewer.pivot.rotation.y = Math.sin(elapsed * 0.35) * 0.08;

    viewer.renderer.render(viewer.scene, viewer.camera);
  });
}

void bootstrap;
