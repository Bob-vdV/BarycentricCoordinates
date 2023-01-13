import { GUI, GUIController } from "dat.gui";
import { Model } from "../model/model";
import * as c_fun from "../model/cFunctions";
import { InterpolationUpdateAction } from "../controller/actions/interpolationUpdateAction";
import { Vector3 } from "three";
import { PolygonUpdateAction } from "../controller/actions/polygonUpdateAction";
import * as presets from "../controller/presets";

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
            c_function: "r^p",
            p: 1,
            custom_function: "2^r",
            colormap: "viridis",
            wireframe: false,
            density: model.interpolation.params.density,
            contourLines: 0.1,
            pointIndex: initialIndex,
            z: this.model.polygon.points[initialIndex].z,
            deletePoint: function () { deletePoint(); },
            addPoint: function () { addPoint(); },
            numPoints: 6,
            preset: "regular polygon",
            applyPreset: applyPreset,
        };

        const interpolationParams = scope.model.interpolation.params;

        initInterpolationFolder();
        initShadingFolder();
        initPolygonFolder();
        initPresetFolder();

        // End of constructor, functions are declared under here:
        function initInterpolationFolder() {
            let interpolationFolder = scope.gui.addFolder("Interpolation");

            interpolationFolder.add(scope.parameters, "c_function", ["r^p", "log(1+r)", "r/(1+r)", "r^2/(1+r^2)", "custom"]).onFinishChange(function (c_function: string) {
                for (let i = 0; i < interpolationFolder.__controllers.length; i++) {
                    if (interpolationFolder.__controllers[i].property == "p") {
                        if (c_function == "r^p") {
                            toggleController(interpolationFolder.__controllers[i], true);
                        }
                        else {
                            toggleController(interpolationFolder.__controllers[i], false);
                        }
                    } else if ((interpolationFolder.__controllers[i].property == "custom_function")) {
                        if (c_function == "custom") {
                            toggleController(interpolationFolder.__controllers[i], true);
                        }
                        else {
                            toggleController(interpolationFolder.__controllers[i], false);
                        }
                    }
                }

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
                        interpolationParams["c_function"] = c_fun.sqRDiv1SqR;
                        break;
                    case "custom":
                        applyCustomFunction();
                        break;
                    default:
                        throw new Error("C function is not recognized");
                }
                interpolationUpdater.update();
            });

            interpolationFolder.add(scope.parameters, "p").min(-2).max(2).step(0.5).onFinishChange(function (p: number) {
                interpolationParams["p"] = p;
                interpolationUpdater.update();
            });

            let customFuncController = interpolationFolder.add(scope.parameters, "custom_function").onFinishChange(function () {
                applyCustomFunction();
                interpolationUpdater.update();
            });
            // Disable by default (because r^p does not need it)
            toggleController(customFuncController, false);
        }

        function initShadingFolder() {
            let viewFolder = scope.gui.addFolder("Shading");

            viewFolder.add(scope.parameters, "colormap", ["viridis", "gray", "hsv", "inferno", "jet", "terrain"]).onFinishChange(function (colormap: string) {
                interpolationParams["colormap"] = colormap;
                model.interpolation.setColors(colormap);
                interpolationUpdater.update();
            });

            viewFolder.add(scope.parameters, "wireframe").onFinishChange(function (wireframe: boolean) {
                interpolationParams["wireframe"] = wireframe;
                interpolationUpdater.update();
            });

            viewFolder.add(scope.parameters, "density").min(1).max(8).step(1).onFinishChange(function (density: number) {
                interpolationParams["density"] = density;
                interpolationUpdater.update();
            });

            viewFolder.add(scope.parameters, "contourLines").min(0).max(1).step(0.05).onChange(function (ContourLines: number) {
                model.interpolation.material.uniforms.fragmentSize.value = ContourLines;
            });
        }

        function initPolygonFolder() {
            const minCoordVal = -10;
            const maxCoordVal = 10;
            const step = 0.1;

            generateIndexes();

            let polygonFolder = scope.gui.addFolder("Polygon");

            indexController = polygonFolder.add(scope.parameters, "pointIndex", indexes).listen()
                .onChange(function (index: number) {
                    scope.parameters.pointIndex = index;
                    updateSliders();
                });

            polygonFolder.add(scope.parameters, "z").min(minCoordVal).max(maxCoordVal).step(step).listen()
                .onChange(function (z: number) {
                    model.polygon.points[scope.parameters.pointIndex].z = z;
                    polygonUpdater.update();
                })
                .onFinishChange(function () {
                    interpolationUpdater.update();
                });

            polygonFolder.add(scope.parameters, "deletePoint").name("Delete point");

            polygonFolder.add(scope.parameters, "addPoint").name("add new point");
        }

        function initPresetFolder() {
            const presetFolder = scope.gui.addFolder("Presets");

            presetFolder.add(scope.parameters, "numPoints").name("Number of points").min(3).max(25).step(1);

            presetFolder.add(scope.parameters, "preset", ["regular polygon", "wave", "hyperparaboloid", "nonConvex"]).name("Preset");

            presetFolder.add(scope.parameters, "applyPreset").name("Apply preset");
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

        function toggleController(controller: GUIController, enabled: boolean) {
            if (enabled) {
                controller.domElement.style.pointerEvents = "";
                controller.domElement.style.opacity = "1";
            } else {
                controller.domElement.style.pointerEvents = "none";
                controller.domElement.style.opacity = "0.5";
            }
        }

        function deletePoint() {
            if (model.polygon.points.length > 3) { // Should be valid polygon
                model.polygon.points.splice(scope.parameters.pointIndex, 1);
                if (scope.parameters.pointIndex != 0) {
                    scope.parameters.pointIndex -= 1;
                }
            } else {
                alert("Cannot delete last three points");
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

        function applyCustomFunction() {
            try {
                interpolationParams["c_function"] = c_fun.custom(scope.parameters["custom_function"]);
            } catch (error) {
                alert(error);
            }
        }

        function applyPreset() {
            presets.applyPreset(model.polygon, scope.parameters.preset, scope.parameters.numPoints);
            polygonUpdater.update();
            interpolationUpdater.update();
        }
    }
}



export { GuiWrapper }