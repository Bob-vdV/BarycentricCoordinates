import { MapControls } from "three/examples/jsm/controls/OrbitControls"
import { Polygon } from "../model/polygon";
import { View } from "../view/view";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { InterpolationUpdater } from "./updaters/interpolationUpdater";
import { Interpolation } from "../model/interpolation";
import { PolygonUpdater } from "./updaters/polygonUpdater";

class Controls {
    mainControls: MapControls; // 3D view
    mapControls: DragControls; // 2D view (minimap)

    constructor(polygon: Polygon, interpolation: Interpolation, view: View, scene: THREE.Scene) {
        this.mainControls = new MapControls(view.camera, view.renderer.domElement);
        this.mapControls = new DragControls([polygon.corners], view.mapCamera, view.mapRenderer.domElement);
        this.mapControls.getRaycaster().layers.set(1);

        const polygonUpdater = new PolygonUpdater(polygon, scene);
        const interpolationUpdater = new InterpolationUpdater(interpolation, scene);

        this.mapControls.addEventListener("drag", onDrag);
        this.mapControls.addEventListener("dragstart", onDragStart);
        this.mapControls.addEventListener("dragend", onDragEnd);

        // End of constructor
        function onDrag(event: any) {
            const index = Number(event.object.name);
            const originalPoint = polygon.points[index].clone();

            polygon.points[index].setX(event.object.position.x);
            polygon.points[index].setY(event.object.position.y);

            // If it is self intersecting, revert changes
            if(polygon.isSelfIntersecting()){
                polygon.points[index] = originalPoint;
            }

            polygonUpdater.update();
        }

        function onDragStart(event: any) {
            const index = Number(event.object.name);
            view.gui.parameters.pointIndex = index;
            view.gui.parameters.z = polygon.points[index].z;
        }

        function onDragEnd(_event: any) {
            interpolationUpdater.update();
        }
    }

    update() {
        this.mainControls.update();
    }
}

export { Controls }