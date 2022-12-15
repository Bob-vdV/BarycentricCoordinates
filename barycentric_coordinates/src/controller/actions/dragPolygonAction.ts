import { Object3D, Scene } from "three";
import { Polygon } from "../../model/polygon"


class DragPolygonAction{
    figure: Polygon;
    scene: Scene;

    constructor(figure: Polygon, scene: Scene){
        this.figure = figure;
        this.scene = scene;
    }

    update(event: any){
        let points = this.figure.points;

        const name = event.object.geometry.name;
        const idx = parseFloat(name.replace("point", ""));

        points[idx] = this.figure.group.position;
        this.figure.generateMesh();

        let mesh = this.scene.getObjectByName(this.figure.name);
        if (mesh != undefined) {
            this.scene.remove(mesh);
        } else {
            throw new Error("Object not defined!");
        }
        this.scene.add(this.figure.group);
    }

}

export {DragPolygonAction}