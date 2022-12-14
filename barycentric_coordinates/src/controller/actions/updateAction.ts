import { Interpolation } from "../../model/interpolation"
import { Polygon } from "../../model/polygon"


class UpdateAction{
    figure: Polygon | Interpolation;
    scene: THREE.Scene;

    constructor(figure: Polygon | Interpolation, scene: THREE.Scene){
        this.figure = figure;
        this.scene = scene;
    }

    update(){
        this.figure.generateMesh() 

        let mesh = this.scene.getObjectByName(this.figure.name);
        if (mesh != undefined) {
            this.scene.remove(mesh);
        } else {
            throw new Error("Object 'interpolation' not defined!");
        }
        this.scene.add(this.figure.mesh);
    }
}


export {UpdateAction}