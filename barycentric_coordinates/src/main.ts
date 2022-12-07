import './style.css';
import * as THREE from 'three';
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';
import { GuiWrapper } from './view/guiwrapper';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.001, 1000);
const tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2));

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("tool") as HTMLCanvasElement
});
renderer.setClearColor(0x222222, 1); // Sets background color

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(windowWidth, windowHeight);

camera.position.setZ(10);

let polygon = new Polygon(5, 3);
polygon.points[0].z = 1;

const polygonMesh = polygon.generateMesh();
scene.add(polygonMesh);

const interpolation = new Interpolation(new THREE.MeshBasicMaterial({ wireframe: false, side: THREE.DoubleSide, vertexColors: true, transparent: true }), polygon.points);

scene.add(interpolation.generateMesh());

camera.up = new THREE.Vector3(0, 0, 1); // Change the 'up' parameter so that the controls work as intended
const controls = new MapControls(camera, renderer.domElement);


const gui = new GuiWrapper;


/**
 * Window resize listener
 * 
 * Source: http://jsfiddle.net/Q4Jpu/
 * 
 * TODO: move this to somewhere else, using MVC pattern
 * 
 */

window.addEventListener('resize', onWindowResize, false);


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  // adjust the FOV
  camera.fov = (360 / Math.PI) * Math.atan(tanFOV * (window.innerHeight / windowHeight));

  camera.updateProjectionMatrix();
  camera.lookAt(scene.position);

  renderer.setSize(window.innerWidth, window.innerHeight);

}



function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
