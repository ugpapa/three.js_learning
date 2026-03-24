/** @format */

// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import three.js modules
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const canvasIds = ["canvas1", "canvas2", "canvas3", "canvas4"];

const models = [
  "./models/1stAni.glb",
  "./models/BONBOX.glb",
  "./models/glass_box.glb",
  "./models/steel.glb",
];

canvasIds.forEach((id, index) => {
  const canvas = document.querySelector(`#${id}`);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  
  // add light helper   

  const light = new THREE.AmbientLight(0xffffff); // soft white light
  scene.add(light);  

  //add point light 
 const pointLight = new THREE.PointLight(0xffffff, 1);
 pointLight.position.set(0, 0, 0);
 scene.add(pointLight);

  // add spot light
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(5, 7, 10);
  spotLight.castShadow = true;
  scene.add(spotLight);


  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 0, 20);

  const loader = new GLTFLoader();

  loader.load(
    models[index],
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.75, 0.75, 0.75);
      model.position.set(0, 0, 0);
      const mixer = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });
      scene.add(model);

      const clock = new THREE.Clock();
      const animate = function () {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        // mixer.update(delta);
        renderer.render(scene, camera);
        model.rotation.y += 0.005;
       model.rotation.x += 0.005; 
      };
      animate();
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );
  


});
