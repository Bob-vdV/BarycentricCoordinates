import * as THREE from 'three';
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';
import { View } from '../view/view';
import { Controls } from '../controller/controls';
import { regularPolygon } from '../controller/presets';

/**
 * Main model that is run
 */
class Model {
    scene: THREE.Scene;
    view: View;
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
        this.polygon = new Polygon();
        regularPolygon(this.polygon, 6);

        this.polygon.generateMesh();
        this.scene.add(this.polygon.mesh);

        this.interpolation = new Interpolation(this.polygon);
        this.interpolation.generateMesh();

        this.scene.add(this.interpolation.mesh);

        /**
         * Setup view
         */
        this.view = new View(this);

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