import { BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial } from '/node_modules/three/src/Three.js' ;

function createCube() {
  const geometry = new BoxGeometry(1.2, 1.2, 1.2);

  const material = new MeshPhongMaterial({ color: 0x00ff00 });

  const cube = new Mesh(geometry, material);
  cube.position.set(0, 0, -5);

  return cube;
}

function animateCube(cube) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
}


export { createCube, animateCube};

