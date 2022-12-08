import { GUI } from "dat.gui";
import { Model } from "../model/model";
import * as c_fun from "../model/cFunctions";

class GuiWrapper {
    parameters: object;
    model: Model;
    gui: GUI;

    constructor(model: Model) {
        this.gui = new GUI();
        this.model = model;

        this.parameters = {
            "p": 1,
            "c_function": "r^p",
            "colormap": "viridis",
            "wireframe": false,
            "slices": model.interpolation.params.slices,
            "update": function () { model.updateInterpolation() },
        }

        this.initInterpolationFolder();

        this.initViewFolder();

        this.gui.add(this.parameters, "update").name("Update shape");
    }

    initInterpolationFolder() {
        const interpolationParams = this.model.interpolation.params;

        let interpolationFolder = this.gui.addFolder("Interpolation options");

        interpolationFolder.add(this.parameters, "c_function", ["r^p", "log(1+r)", "r/(1+r)", "r^2/(1+r^2)"]).onChange(function (c_function) {
            switch(c_function){//Definitely not the ideal solution, but at least it works and it is fast.
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
                    throw Error("C function is not recognized");
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
}



export { GuiWrapper }