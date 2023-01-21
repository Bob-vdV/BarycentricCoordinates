import { Polygon } from "../../model/polygon";

class PolygonUpdater {
    figure: Polygon;
    scene: THREE.Scene;

    constructor(figure: Polygon, scene: THREE.Scene) {
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

        this.checkConvex();
    }

    checkConvex() {
        if (!this.figure.isConvex()) {
            document.getElementById("polygon-warning")!.style.visibility = "visible"
        } else {
            document.getElementById("polygon-warning")!.style.visibility = "hidden"
        }
    }
}

export { PolygonUpdater }