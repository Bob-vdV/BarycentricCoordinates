import * as THREE from 'three';
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';
import { MainView } from '../view/mainView';

/**
 * Main model that is run
 * 
 * 
 */

class Model {
    scene: THREE.Scene;
    view: MainView;
    controls: MapControls;  //TODO: Change this 

    constructor() {

        this.scene = new THREE.Scene();


        /**
         * Setup objects
         * 
         */
        let polygon = new Polygon(5, 3);
        polygon.points[0].z = 1;

        const polygonMesh = polygon.generateMesh();
        this.scene.add(polygonMesh);

        const interpolation = new Interpolation(new THREE.MeshBasicMaterial({ wireframe: false, side: THREE.DoubleSide, vertexColors: true, transparent: true }), polygon.points);

        this.scene.add(interpolation.generateMesh());


        /**
         * Setup view
         * 
         */

        this.view = new MainView(this);

        /**
         * Setup controls
         * 
         */
        this.controls = new MapControls(this.view.camera, this.view.renderer.domElement);

    }

    animate() {
        const animate = () => {
            this.animate();
        }

        requestAnimationFrame(animate);
        this.controls.update();
        this.view.updateView();
    }

    run() {
        this.animate();
    }
}





export { Model }