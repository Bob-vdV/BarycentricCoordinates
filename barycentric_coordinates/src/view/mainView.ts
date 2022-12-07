import { Model } from "../model/model"
import * as THREE from "three";
import { GuiWrapper } from "./guiwrapper"

class MainView {
    readonly windowWidth: number;
    readonly windowHeight: number;

    model: Model

    camera: THREE.PerspectiveCamera;
    tanFOV: number;
    renderer: THREE.WebGLRenderer;

    constructor(model: Model) {
        this.model = model;

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        this.camera = new THREE.PerspectiveCamera(75, this.windowWidth / this.windowHeight, 0.001, 1000); //FOV, ascpectRatio, minRenderdist, maxRenderdist.
        this.tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov / 2));

        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("app") as HTMLCanvasElement
        });
        this.renderer.setClearColor(0x222222, 1); // Sets background color

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.windowWidth, this.windowHeight);

        this.camera.position.setZ(10);

        this.camera.up = new THREE.Vector3(0, 0, 1); // Change the 'up' parameter to Z so that the controls work as intended

        window.addEventListener('resize', this.onWindowResize, false);


        const gui = new GuiWrapper;
    }


    /**
     * Window resize listener
     * 
     * Source: http://jsfiddle.net/Q4Jpu/
     * 
     */
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;

        // adjust the FOV
        this.camera.fov = (360 / Math.PI) * Math.atan(this.tanFOV * (window.innerHeight / this.windowHeight));

        this.camera.updateProjectionMatrix();
        this.camera.lookAt(this.model.scene.position);

        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

    updateView() {
        this.renderer.render(this.model.scene, this.camera);
    }
}

export { MainView }