import * as THREE from 'three';
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';
import { MainView } from '../view/mainView';
import { Controls } from '../controller/controls';

/**
 * Main model that is run
 * 
 * 
 */

class Model {
    scene: THREE.Scene;
    view: MainView;
    controls: Controls;
    polygon: Polygon;
    interpolation: Interpolation;

    constructor() {
        /**
         * Setup scene
         */
        this.scene = new THREE.Scene();

        /**
         * Setup objects
         */
        this.polygon = new Polygon(6, 3);
        this.polygon.points[0].z = 1;

        this.polygon.generateMesh();
        this.scene.add(this.polygon.mesh);

        this.interpolation = new Interpolation(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, vertexColors: true }), this.polygon);
        this.interpolation.generateMesh();

        this.scene.add(this.interpolation.mesh);

        /**
         * Setup view
         */
        this.view = new MainView(this);

        /**
         * Setup controls
         */
        this.controls = new Controls(this.polygon, this.interpolation, this.view, this.scene);
    }

    animate() {
        requestAnimationFrame(() => {
            this.animate();
        });
        this.controls.update();
        this.view.update();
    }

    run() {
        this.animate();
    }
}

export { Model }