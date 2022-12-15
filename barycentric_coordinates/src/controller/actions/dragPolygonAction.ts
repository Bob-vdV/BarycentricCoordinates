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

        console.log(idx)//TODOOO
    }

}

export {DragPolygonAction}