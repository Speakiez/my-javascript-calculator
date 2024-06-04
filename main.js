import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './style.css';

const scene = new THREE.Scene();
const gltfLoader = new GLTFLoader();

const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.setZ( 5 );

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas"), alpha: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

gltfLoader.load("./assets/models/calculator.gltf", (gltf) => {
  const model = gltf.scene;
  scene.add( model );
});

renderer.render( scene, camera );

function animate() {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
});