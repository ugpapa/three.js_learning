/** @format */
import * as THREE from 'three';

import { setupThree } from './threeSetup.js';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { World, Body, Plane, Vec3, Material, Sphere, Box } from "cannon-es";
import { GUI } from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import CannonDebugger from "cannon-es-debugger";


import { setupResizeHandler } from "./resizeWindow.js";

const { scene, camera, renderer } = setupThree(); 


const controls = new OrbitControls(camera, renderer.domElement);

const world = new World();
world.gravity.set(0, -9.82, 0);

const groundShape = new Plane();
const groundBody = new Body({ mass: 0, shape: groundShape });
groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);

world.addBody(groundBody);

const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load("textures/back2.jpg");

groundTexture.center.set(0.5, 0.5);
groundTexture.rotation = THREE.MathUtils.degToRad(90);

const groundMeshMaterial = new THREE.MeshStandardMaterial({
  color: 0xa58d68,
  side: THREE.DoubleSide,
  map: groundTexture,
});

const groundMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(25, 100),
  groundMeshMaterial
);
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const loader = new GLTFLoader();

const pinPhysicsMaterial = new Material();
let pins = [];

loader.load("model/scene.gltf", (gltf) => {
  const pinModel = gltf.scene;
  pinModel.scale.set(10, 10, 10); // 모델의 크기를 10, 10, 10으로 설정

  let yOffset;
  pinModel.traverse((node) => {
    if (!node.isMesh) return;

    if (node.name === "Object_4") {
      node.geometry.computeBoundingBox();
      const height =
        node.geometry.boundingBox.max.y - node.geometry.boundingBox.min.y;
      yOffset = height / 2 - 0.018;
    }
    // re-center pivot
    node.geometry.translate(0, -yOffset, 0);
    node.castShadow = true;
    node.receiveShadow = true;
  });

  const pinPositions = getPinPositions();

  const boxShape = new Box(new Vec3(0.6, 1.5, 0.6));

  pinPositions.forEach((pos) => {
    const clone = pinModel.clone();
    const body = new Body({
      mass: 1,
      shape: boxShape,
      material: pinPhysicsMaterial,
      position: new Vec3(pos.x, pos.y, pos.z),
    });

    world.addBody(body);
    scene.add(clone);

    clone.position.copy(new Vec3(pos.x, pos.y, pos.z));
    body.position.copy(clone.position);
    pins.push({ mesh: clone, body });
  });
});

function getPinPositions() {
  const positions = [];
  let rowCount = 1;
  let startZ = -15;

  const rotationMatrix = new THREE.Matrix4();
  rotationMatrix.makeRotationY(THREE.MathUtils.degToRad(50));

  for (let i = 0; i < 10; i++) {
    const x = (i - (rowCount * (rowCount - 1)) / 2) * 2.5 + 9.2;
    const z = startZ + (rowCount - 1) * 2.5;
    const position = new THREE.Vector3(x, 2, z);

    position.applyMatrix4(rotationMatrix);
    positions.push(new Vec3(position.x, position.y, position.z));

    if (i + 1 === (rowCount * (rowCount + 1)) / 2) {
      rowCount++;
    }
  }
  return positions;
}

const ballGeometry = new THREE.SphereGeometry(1.25, 32, 32);
const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
ballMesh.position.set(0, 2.5, 5);
ballMesh.castShadow = true;
scene.add(ballMesh);

const ballBody = new Body({
  mass: 5,
  shape: new Sphere(1.25),
  position: new Vec3(0, 2.5, 20),
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
// const cannonDebugger  = new CannonDebugger(scene, world);
function animate() {
  requestAnimationFrame(animate);
  world.step(1 / 60);

  pins.forEach((pin) => {
    pin.mesh.position.copy(pin.body.position);
    pin.mesh.quaternion.copy(pin.body.quaternion);
  });
  ballMesh.position.copy(ballBody.position);
  // cannonDebugger.update()
  renderer.render(scene, camera);
}

animate();

setupResizeHandler(camera, renderer);

camera.position.set(0, 15, 30);
controls.target.set(0, 0, 0);
controls.update();

const settings = {
  impulseStrength: 80,
  reset: function () {
    ballBody.position.set(-0.5, 1.25, 20);
    ballBody.velocity.set(0, 0, 0);
    ballBody.angularVelocity.set(0, 0, 0); // 볼의 회전 속도도 0으로 설정

    // 핀들도 초기 위치로 되돌립니다.
    const resetPinPositions = getPinPositions();
    for (let i = 0; i < pins.length; i++) {
      pins[i].body.position.copy(resetPinPositions[i]);
      pins[i].body.velocity.set(0, 0, 0);
      pins[i].body.angularVelocity.set(0, 0, 0);
      pins[i].body.quaternion.set(0, 0, 0, 1);
    }
  },
};

const gui = new GUI();
gui.add(settings, "impulseStrength", 0, 150); // 볼의 세기 조절 슬라이더. 0부터 150까지 조절 가능.
gui.add(settings, "reset");
