import * as THREE from "three";
import { mod, to2dVector, signedTriangleArea } from "./utils";
import { evaluate_cmap } from "./colormaps.js";
import { BarycentricGeometry } from "./BarycentricGeometry";
import * as c_fun from "./cFunctions";


class Interpolation {
    readonly name = "interpolation";
    params = {
        c_function: c_fun.powRP, 
        p: 1,
        slices: 100,
        colormap: "viridis",
        wireframe: false,
    }
    material: THREE.MeshBasicMaterial;
    points: THREE.Vector3[];
    mesh = new THREE.Mesh(); //immediately replaced with other mesh but allows easier code elsewhere.

    constructor(material: THREE.MeshBasicMaterial, points: THREE.Vector3[]) {
        this.material = material;
        this.points = points;
    }

    bivariteFunction(x: THREE.Vector2, points: THREE.Vector3[], idx: number): number {
        const point = to2dVector(points[idx]);
        const r = x.distanceTo(point);
        return this.params.c_function(r, this.params.p);
    }

    calculateWeight(x: THREE.Vector2, idx: number) {
        const numPoints = this.points.length;

        const idxPrev = mod(idx - 1, numPoints);
        const idxNext = mod(idx + 1, numPoints);

        const pPrev = to2dVector(this.points[idxPrev]);
        const p = to2dVector(this.points[idx]);
        const pNext = to2dVector(this.points[idxNext]);

        const APrev = signedTriangleArea([x, pPrev, p]);
        const A = signedTriangleArea([x, p, pNext]);
        const B = signedTriangleArea([x, pPrev, pNext]);

        const weight = (
            this.bivariteFunction(x, this.points, idxNext) * APrev -
            this.bivariteFunction(x, this.points, idx) * B +
            this.bivariteFunction(x, this.points, idxPrev) * A
        ) / (APrev * A);

        return weight;
    }

    interpolate(xCoord: number, yCoord: number): number {
        const vector = new THREE.Vector2(xCoord, yCoord);
        let weights = [];
        let sumWeights = 0;
        for (let idx = 0; idx < this.points.length; idx++) {
            weights.push(this.calculateWeight(vector, idx));
            sumWeights += weights[idx];
        }

        let zCoord = 0;

        for (let idx = 0; idx < this.points.length; idx++) {
            let p = this.points[idx];
            const lambda = weights[idx] / sumWeights;
            zCoord += p.z * lambda;
        }

        return zCoord;
    }

    generateMesh() {
        this.material.wireframe = this.params.wireframe;

        let testFunction = (u: number, v: number, target: THREE.Vector3) => {
            const temp = 7;   //  TODO:remove this 

            u = u * temp - (temp / 2);
            v = v * temp - (temp / 2);

            const z = this.interpolate(u, v);
            target.set(u, v, z);
        };

        const geometry = new BarycentricGeometry(testFunction, this.params.slices, this.params.slices);

        this.applyColorMap(geometry);

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.name = this.name;
    }

    applyColorMap(geometry: BarycentricGeometry) {
        const positions = geometry.getAttribute("position");
        const count = positions.count

        const zMin = 0;
        const zMax = 1;

        const numColors = 4;

        let colors = new Float32Array(count * numColors);
        for (let i = 0; i < count; i++) {
            let value = (Math.max(zMin, Math.min(zMax, positions.array[i * 3 + 2])) - zMin) * (zMax - zMin);

            if (isNaN(value)) {
                console.error("value at ", i, " is NaN");
                continue;
            }
            let color: number[] = evaluate_cmap(value, this.params.colormap, false);

            colors[i * numColors] = color[0];
            colors[i * numColors + 1] = color[1];
            colors[i * numColors + 2] = color[2];
            colors[i * numColors + 3] = 1; // TODO
        }
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, numColors)
        );
    }

}

export { Interpolation }