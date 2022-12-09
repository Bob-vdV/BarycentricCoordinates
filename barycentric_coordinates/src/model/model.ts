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
    controls: MapControls;

    polygon: Polygon;
    interpolation: Interpolation;

    constructor() {
        this.scene = new THREE.Scene();

        /**
         * Setup objects
         * 
         */
        this.polygon = new Polygon(6, 3);
        this.polygon.points[0].z = 1;

        const polygonMesh = this.polygon.generateMesh();
        this.scene.add(polygonMesh);

        this.interpolation = new Interpolation(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, vertexColors: true, transparent: true }), this.polygon);
        this.interpolation.generateMesh();

        this.scene.add(this.interpolation.mesh);

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

    updateInterpolation() { //TODO: Change this somehow
        this.interpolation.generateMesh() // Do calculations for new one before removal so that old one can be replaced immediately

        let mesh = this.scene.getObjectByName(this.interpolation.name);
        if (mesh != undefined) {
            this.scene.remove(mesh);
        } else {
            throw new Error("Object 'interpolation' not defined!");
        }
        this.scene.add(this.interpolation.mesh);
    }

    animate() {
        requestAnimationFrame(() => {
            this.animate();
        });
        this.controls.update();
        this.view.updateView();
    }

    run() {
        this.animate();
    }
}

export { Model }