/** @format */
export function setupResizeHandler(camera, renderer) {
  const canvas = renderer.domElement;

  function syncRendererSize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function onWindowResize() {
    syncRendererSize();
  }

  window.addEventListener("resize", onWindowResize);
  syncRendererSize();
}
