import { MapControls } from "three/examples/jsm/controls/OrbitControls"
import { Polygon } from "../model/polygon";
import { MainView } from "../view/mainView";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { InterpolationUpdateAction } from "./actions/interpolationUpdateAction";
import { Interpolation } from "../model/interpolation";
import { PolygonUpdateAction } from "./actions/polygonUpdateAction";

class Controls {
    mainControls: MapControls; // 3D view
    mapControls: DragControls; // 2D view (minimap)

    constructor(polygon: Polygon, interpolation: Interpolation, view: MainView, scene: THREE.Scene) {
        this.mainControls = new MapControls(view.camera, view.labelRenderer.domElement);
        this.mapControls = new DragControls([polygon.corners], view.mapCamera, view.mapRenderer.domElement);
        this.mapControls.getRaycaster().layers.set(1);

        const polygonUpdater = new PolygonUpdateAction(polygon, scene);
        const interpolationUpdater = new InterpolationUpdateAction(interpolation, scene);

        this.mapControls.addEventListener("drag", onDrag);
        this.mapControls.addEventListener("dragstart", onDragStart);
        this.mapControls.addEventListener("dragend", onDragEnd);

        // End of constructor
        function onDrag(event: any) {
            const index = Number(event.object.name);
            polygon.points[index].setX(event.object.position.x);
            polygon.points[index].setY(event.object.position.y);
            polygonUpdater.update();
        }

        function onDragStart(event: any) {
            const index = Number(event.object.name);
            view.gui.parameters.pointIndex = index;
        }

        function onDragEnd(event: any) {
            interpolationUpdater.update();
        }
    }

    update() {
        this.mainControls.update();
    }
}

export { Controls }