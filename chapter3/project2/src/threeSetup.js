/** @format */
import * as THREE from "three";

export function setupThree() {
  const scene = new THREE.Scene();
  const canvas = document.querySelector("#three");

  const camera = new THREE.PerspectiveCamera(
    75,
    (canvas.clientWidth || window.innerWidth) /
      (canvas.clientHeight || window.innerHeight),
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(
    canvas.clientWidth || window.innerWidth,
    canvas.clientHeight || window.innerHeight,
    false
  );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  return { scene, camera, renderer };
}
