import './style.css';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";



const aspect_ratio = 16/9;

const width = window.innerWidth;
const height = width / aspect_ratio;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("tool") as HTMLCanvasElement
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

camera.position.setZ(30); //TODO: REMOVE


const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate();
