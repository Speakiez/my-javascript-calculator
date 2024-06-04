import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import './style.css';

const scene = new THREE.Scene();
const gltfLoader = new GLTFLoader();

const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.setY( 3 );
camera.position.setZ( 3 );
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas"), alpha: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, document.querySelector("canvas") );
controls.enablePan = false;
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

gltfLoader.load("./assets/models/calculator.gltf", (gltf) => {
  const model = gltf.scene;
  scene.add( model );
});

function animate() {
  controls.update();
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
});