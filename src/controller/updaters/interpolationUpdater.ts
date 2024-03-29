import { Interpolation } from "../../model/interpolation"

class InterpolationUpdater {
    figure: Interpolation;
    scene: THREE.Scene;

    constructor(figure: Interpolation, scene: THREE.Scene) {
        this.figure = figure;
        this.scene = scene;
    }

    update() {
        this.figure.generateMesh()

        let mesh = this.scene.getObjectByName(this.figure.name);
        if (mesh != undefined) {
            this.scene.remove(mesh);
        } else {
            throw new Error("Object not defined!");
        }
        this.scene.add(this.figure.mesh);
    }
}

export { InterpolationUpdater }