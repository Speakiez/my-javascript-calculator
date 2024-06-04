import * as THREE from 'three';
import './style.css';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.setZ( 30 );

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas"), alpha: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry( 15, 15, 15 );
const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );
renderer.render( scene, camera );

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.005;
  
  renderer.render( scene, camera );
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
});