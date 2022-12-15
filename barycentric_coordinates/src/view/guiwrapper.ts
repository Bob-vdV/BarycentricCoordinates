import { GUI } from "dat.gui";
import { Model } from "../model/model";
import * as c_fun from "../model/cFunctions";
import { UpdateAction } from "../controller/actions/updateAction";

class GuiWrapper {
    parameters: any;
    model: Model;
    gui: GUI;
    pointIndex = 0;

    constructor(model: Model) {
        this.gui = new GUI();
        this.model = model;

        let interpolationUpdater = new UpdateAction(model.interpolation, model.scene);

        this.parameters = {
            p: 1,
            c_function: "r^p",
            colormap: "viridis",
            wireframe: false,
            slices: model.interpolation.params.slices,
            update: function () { interpolationUpdater.update(); },
            index: this.pointIndex,
            x: this.model.polygon.points[this.pointIndex].x,
            y: this.model.polygon.points[this.pointIndex].y,
            z: this.model.polygon.points[this.pointIndex].z,
        }

        this.initInterpolationFolder();

        this.initViewFolder();

        this.polygonFolder();

        this.gui.add(this.parameters, "update").name("Update shape");
    }

    initInterpolationFolder() {
        const interpolationParams = this.model.interpolation.params;

        let interpolationFolder = this.gui.addFolder("Interpolation options");

        interpolationFolder.add(this.parameters, "c_function", ["r^p", "log(1+r)", "r/(1+r)", "r^2/(1+r^2)"]).onChange(function (c_function) {
            switch (c_function) {
                case "r^p":
                    interpolationParams["c_function"] = c_fun.powRP;
                    break;
                case "log(1+r)":
                    interpolationParams["c_function"] = c_fun.log1R;
                    break;
                case "r/(1+r)":
                    interpolationParams["c_function"] = c_fun.RDiv1R;
                    break;
                case "r^2/(1+r^2)":
                    interpolationParams["c_function"] = c_fun.sqRdiv1sqR;
                    break;
                default:
                    throw new Error("C function is not recognized");
            }
        });

        interpolationFolder.add(this.parameters, "p").min(-2).max(2).step(0.5).onChange(function (p) {
            interpolationParams["p"] = p;
        });
    }


    initViewFolder() {
        const interpolationParams = this.model.interpolation.params;

        let viewFolder = this.gui.addFolder("Viewing Options");

        viewFolder.add(this.parameters, "colormap", ["viridis", "gray", "hsv", "inferno", "jet", "terrain"]).onChange(function (colormap) {
            interpolationParams["colormap"] = colormap;
        });

        viewFolder.add(this.parameters, "wireframe").onChange(function (wireframe) {
            interpolationParams["wireframe"] = wireframe;
        })

        viewFolder.add(this.parameters, "slices").min(10).max(1000).step(10).onChange(function (slices) {
            interpolationParams["slices"] = slices;
        })
    }

    polygonFolder() {
        const polygon = this.model.polygon;

        const indexes = [];
        for (let i = 0; i < polygon.points.length; i++) {
            indexes.push(i);
        }
        let scope = this;

        const updateAction = new UpdateAction(polygon, this.model.scene);//TODO: move

        const minCoordVal = -10;
        const maxCoordVal = 10;
        const step = 0.1;

        let polygonFolder = this.gui.addFolder("Polygon");

        polygonFolder.add(this.parameters, "index", indexes).onChange(function (index) {
            scope.pointIndex = index;
            scope.parameters.x = polygon.points[scope.pointIndex].x;
            scope.parameters.y = polygon.points[scope.pointIndex].y;
            scope.parameters.z = polygon.points[scope.pointIndex].z;
        });

        polygonFolder.add(this.parameters, "x").min(minCoordVal).max(maxCoordVal).step(step).listen().onChange(function (x) {
            polygon.points[scope.pointIndex].x = x;
            updateAction.update();
        });

        polygonFolder.add(this.parameters, "y").min(minCoordVal).max(maxCoordVal).step(step).listen().onChange(function (y) {
            polygon.points[scope.pointIndex].y = y;
            updateAction.update();
        });

        polygonFolder.add(this.parameters, "z").min(minCoordVal).max(maxCoordVal).step(step).listen().onChange(function (z) {
            polygon.points[scope.pointIndex].z = z;
            updateAction.update();
        });
    }
}



export { GuiWrapper }