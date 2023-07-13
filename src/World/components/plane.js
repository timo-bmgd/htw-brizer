import { PlaneGeometry, MeshLambertMaterial, Mesh} from '/node_modules/three/src/Three.js';

function createPlane(size, subdivisions) {
  // create a geometry
  const planeGeometry = new PlaneGeometry(size, size, subdivisions, subdivisions);
  const material = new MeshLambertMaterial({ color: 0xff44ff });
  const planeMesh = new Mesh(planeGeometry, material);

  //rotate it to the camera
  planeMesh.rotateY(0.01);
  return planeMesh;

}

function displaceRandom(plane){
    const planeGeometry = plane.geometry;
    console.log(plane.geometry)
    console.log(plane)
    const vertices = planeGeometry.vertices;

    for (let i = 0; i < vertices.length; i++) {
        const vertex = vertices[i];
        vertex.z += Math.random();
    }
}

function animatePlane(plane, time){

    plane.rotateX(0.01);
    plane.rotateY(0.003);

    const vertices = plane.geometry.attributes.position.array;
    const count = vertices.length;
    console.log(time)

    for (let i = 0; i < count; i += 3) {
        const x = vertices[i];
        const z = (0.42 * Math.sin(x *2 *time) + 0.01);

        vertices[i + 2] = z;
    }

    plane.geometry.attributes.position.needsUpdate = true;
    plane.geometry.computeVertexNormals();

    return plane;
}

export { createPlane , displaceRandom, animatePlane};
