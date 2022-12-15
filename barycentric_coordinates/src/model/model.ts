import * as THREE from 'three';
import { Polygon } from './polygon';
import { Interpolation } from './interpolation';
import { MainView } from '../view/mainView';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';

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

        const light = new THREE.PointLight( 0xfffff, 100, 20);
        light.position.set(0,0,15);
        this.scene.add(light);

        /**
         * Setup objects
         * 
         */
        this.polygon = new Polygon(6, 3);
        this.polygon.points[0].z = 1;

        this.polygon.generateMesh();
        this.scene.add(this.polygon.mesh);

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
        this.controls = new MapControls(this.view.camera, this.view.labelRenderer.domElement);

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