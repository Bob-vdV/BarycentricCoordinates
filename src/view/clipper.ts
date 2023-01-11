import { WebGLRenderer, Plane, Vector3 } from "three"
import { Interpolation } from "../model/interpolation";

class Clipper {
    readonly thickness = 0.01;
    private height = 0.5;
    lower: Plane;
    upper: Plane;
    interpolation: Interpolation

    constructor(renderer: WebGLRenderer, interpolation: Interpolation) {
        this.interpolation = interpolation;

        renderer.localClippingEnabled = true;

        this.lower = new Plane(new Vector3(0, 0, -1), this.height).negate();
        this.upper = new Plane(new Vector3(0, 0, -1), this.height + this.thickness);
    }

    toggleClipping(enabled: boolean) {
        if (enabled) {
            this.interpolation.material.clippingPlanes = [this.lower, this.upper];
        } else {
            this.interpolation.material.clippingPlanes = [];
        }
    }

    setHeight(height: number) {
        this.lower.constant = -height;
        this.upper.constant = height + this.thickness;
    }
}

export { Clipper }