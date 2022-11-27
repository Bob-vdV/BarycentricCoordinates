import './style.css';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';

const aspectRatio = 16 / 9;

const width = window.innerWidth;
const height = width / aspectRatio;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.001, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("tool") as HTMLCanvasElement
});
renderer.setClearColor( 0x444444, 1 ); // Sets background color

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

camera.position.setZ(5);

let polygon = new Polygon(6, 3);
polygon.points[0].z = 1;

const geometry = polygon.generateGeometry();
const material = new THREE.LineBasicMaterial({ color: 0xFF6347 });
const line = new THREE.Line(geometry, material);
scene.add(line);

const interpolation = new Interpolation(new THREE.MeshBasicMaterial({/*color:0x049ef4, */wireframe: false, side:THREE.DoubleSide, vertexColors: true}), polygon.points);

scene.add(interpolation.generateMesh());

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();
