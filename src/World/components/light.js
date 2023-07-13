import { SpotLight } from '/node_modules/three/src/Three.js' ;

function createLight(x,y,z) {

  const spotlight = new SpotLight({ color: 0xFFFFFF });

  spotlight.position.set(x,y,z);

  return spotlight;
}



export { createLight };

