import './style.css';
import * as THREE from 'three';
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';
import { Vector3 } from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.001, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("tool") as HTMLCanvasElement
});
renderer.setClearColor(0x222222, 1); // Sets background color

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

camera.position.setZ(10);

let polygon = new Polygon(5, 3);
polygon.points[0].z = 1;

const geometry = polygon.generateGeometry();
const material = new THREE.LineBasicMaterial({ color: 0xFF6347 });
const line = new THREE.Line(geometry, material);
scene.add(line);

const interpolation = new Interpolation(new THREE.MeshBasicMaterial({wireframe: false, side: THREE.DoubleSide, vertexColors: true }), polygon.points);

scene.add(interpolation.generateMesh());

camera.up = new Vector3(0, 0, 1); // Change the 'up' parameter so that the controls work as intended
const controls = new MapControls(camera, renderer.domElement);







function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
