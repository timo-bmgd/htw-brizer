import { createCamera } from './components/camera.js';
import { createCube, animateCube } from './components/cube.js';
import { createPlane, displaceRandom, animatePlane } from './components/plane.js';
import { createLight } from './components/light.js';
import { createScene } from './components/scene.js';
import { Clock } from '/node_modules/three/src/Three.js';

import { createRenderer } from './system/renderer.js';
import { Resizer } from './system/Reziser.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let cube;
let light;
let light_left;
let terrain;
const c = new Clock();

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    cube = createCube();
    const cube1 = createCube();
    scene.add(cube);

    light = createLight(10,20,30);
    scene.add(light);

    light_left = createLight(-10,10,20);
    scene.add(light_left);

    terrain = createPlane(4,100);

    

    scene.add(terrain);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {



    console.log(c, c.getElapsedTime());

    animateCube(cube);
    animatePlane(terrain, c.getElapsedTime());

    renderer.render(scene, camera);

    requestAnimationFrame(() => this.render());;
  }
}

export { World };

