import { PerspectiveCamera } from '/node_modules/three/src/Three.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    //SETTINGS fov aspect near far
    25,
    1, 
    0.1,
    100, 
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };

