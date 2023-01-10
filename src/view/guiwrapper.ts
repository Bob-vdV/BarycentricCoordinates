import { GUI } from "dat.gui";
import { Model } from "../model/model";
import * as c_fun from "../model/cFunctions";
import { InterpolationUpdateAction } from "../controller/actions/interpolationUpdateAction";
import { Vector3 } from "three";
import { PolygonUpdateAction } from "../controller/actions/polygonUpdateAction";

class GuiWrapper {
    parameters: any;
    model: Model;
    gui: GUI;

    constructor(model: Model) {
        this.gui = new GUI();
        this.model = model;

        let scope = this;

        const interpolationUpdater = new InterpolationUpdateAction(model.interpolation, model.scene);
        const polygonUpdater = new PolygonUpdateAction(model.polygon, this.model.scene);

        let indexController: any;
        const indexes: number[] = []; //Simple list of [0..lastIndex]

        let initialIndex = 0;
        this.parameters = {
            p: 1,
            c_function: "r^p",
            colormap: "viridis",
            wireframe: false,
            density: model.interpolation.params.density,
            pointIndex: initialIndex,
            z: this.model.polygon.points[initialIndex].z,
            deletePoint: function () { deletePoint(); },
            addPoint: function () { addPoint(); },
        }

        initInterpolationFolder();

        initShadingFolder();

        initPolygonFolder();


        // End of constructor, functions are declared under here:

        function initInterpolationFolder() {
            const interpolationParams = scope.model.interpolation.params;

            let interpolationFolder = scope.gui.addFolder("Interpolation");

            interpolationFolder.add(scope.parameters, "c_function", ["r^p", "log(1+r)", "r/(1+r)", "r^2/(1+r^2)"]).onFinishChange(function (c_function) {
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
                interpolationUpdater.update();
            });

            interpolationFolder.add(scope.parameters, "p").min(-2).max(2).step(0.5).onFinishChange(function (p) {
                interpolationParams["p"] = p;
                interpolationUpdater.update();
            })
        }

        function initShadingFolder() {
            const interpolationParams = scope.model.interpolation.params;

            let viewFolder = scope.gui.addFolder("Shading");

            viewFolder.add(scope.parameters, "colormap", ["viridis", "gray", "hsv", "inferno", "jet", "terrain"]).onFinishChange(function (colormap) {
                interpolationParams["colormap"] = colormap;
                interpolationUpdater.update();
            });

            viewFolder.add(scope.parameters, "wireframe").onFinishChange(function (wireframe) {
                interpolationParams["wireframe"] = wireframe;
                interpolationUpdater.update();
            })

            viewFolder.add(scope.parameters, "density").min(1).max(8).step(1).onFinishChange(function (density) {
                interpolationParams["density"] = density;
                interpolationUpdater.update();
            })
        }

        function initPolygonFolder() {
            const minCoordVal = -10;
            const maxCoordVal = 10;
            const step = 0.1;

            generateIndexes();

            let polygonFolder = scope.gui.addFolder("Polygon");

            indexController = polygonFolder.add(scope.parameters, "pointIndex", indexes).listen()
                .onChange(function (index) {
                    scope.parameters.pointIndex = index;
                    updateSliders();
                });

            polygonFolder.add(scope.parameters, "z").min(minCoordVal).max(maxCoordVal).step(step).listen()
                .onChange(function (z) {
                    model.polygon.points[scope.parameters.pointIndex].z = z;
                    polygonUpdater.update();
                })
                .onFinishChange(function () {
                    interpolationUpdater.update();
                });

            polygonFolder.add(scope.parameters, "deletePoint").name("Delete point");

            polygonFolder.add(scope.parameters, "addPoint").name("add new point");
        }

        /**
         * Based on following stackoverflow question:
         * https://stackoverflow.com/questions/18260307/dat-gui-update-the-dropdown-list-values-for-a-controller
         */
        function updateDropdown(target: any, list: number[]) {
            generateIndexes();

            let innerHTMLStr = "";
            for (var i = 0; i < list.length; i++) {
                var str = "<option value='" + list[i] + "'>" + list[i] + "</option>";
                innerHTMLStr += str;
            }

            if (innerHTMLStr != "") {
                target.domElement.children[0].innerHTML = innerHTMLStr;
                target.domElement.children[0].options.selectedIndex = scope.parameters.pointIndex;
            }
        }

        function updateSliders() {
            scope.parameters.z = model.polygon.points[scope.parameters.pointIndex].z;
        }

        function generateIndexes() {
            indexes.length = 0;

            for (let i = 0; i < model.polygon.points.length; i++) {
                indexes.push(i);
            }
        }

        function deletePoint() {
            if (model.polygon.points.length > 3) { // Should be valid polygon
                model.polygon.points.splice(scope.parameters.pointIndex, 1);
                if (scope.parameters.pointIndex != 0) {
                    scope.parameters.pointIndex -= 1;
                }

            } else {
                alert("Cannot delete last three points for valid polygon");
            }

            updateDropdown(indexController, indexes);
            updateSliders();

            polygonUpdater.update();
            interpolationUpdater.update();
        }

        function addPoint() {
            model.polygon.points.push(new Vector3());
            scope.parameters.pointIndex = model.polygon.points.length - 1;

            updateDropdown(indexController, indexes);
            updateSliders();

            polygonUpdater.update();
            interpolationUpdater.update();
        }
    }
}



export { GuiWrapper }