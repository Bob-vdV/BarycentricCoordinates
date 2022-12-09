import * as THREE from "three";
import { mod, to2dVector, signedTriangleArea } from "./utils";
import { evaluate_cmap } from "./colormaps.js";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry"

import * as c_fun from "./cFunctions";
import { Polygon } from "./polygon";


class Interpolation {
    readonly name = "interpolation";
    params = {
        c_function: c_fun.powRP,
        p: 1,
        slices: 200,
        colormap: "viridis",
        wireframe: false,
    }
    material: THREE.MeshBasicMaterial;
    polygon: Polygon;
    mesh!: THREE.Mesh;

    constructor(material: THREE.MeshBasicMaterial, polygon: Polygon) {
        this.material = material;
        this.polygon = polygon;
    }

    bivariteFunction(x: THREE.Vector2, points: THREE.Vector3[], idx: number): number {
        const point = to2dVector(points[idx]);
        const r = x.distanceTo(point);
        return this.params.c_function(r, this.params.p);
    }

    calculateWeight(x: THREE.Vector2, idx: number) {
        const numPoints = this.polygon.points.length;

        const idxPrev = mod(idx - 1, numPoints);
        const idxNext = mod(idx + 1, numPoints);

        const pPrev = to2dVector(this.polygon.points[idxPrev]);
        const p = to2dVector(this.polygon.points[idx]);
        const pNext = to2dVector(this.polygon.points[idxNext]);

        const APrev = signedTriangleArea([x, pPrev, p]);
        const A = signedTriangleArea([x, p, pNext]);
        const B = signedTriangleArea([x, pPrev, pNext]);

        const weight = (
            this.bivariteFunction(x, this.polygon.points, idxNext) * APrev -
            this.bivariteFunction(x, this.polygon.points, idx) * B +
            this.bivariteFunction(x, this.polygon.points, idxPrev) * A
        ) / (APrev * A);

        return weight;
    }

    interpolate(xCoord: number, yCoord: number): number {
        const vector = new THREE.Vector2(xCoord, yCoord);
        let weights = [];
        let sumWeights = 0;
        for (let idx = 0; idx < this.polygon.points.length; idx++) {
            weights.push(this.calculateWeight(vector, idx));
            sumWeights += weights[idx];
        }

        let zCoord = 0;

        for (let idx = 0; idx < this.polygon.points.length; idx++) {
            let p = this.polygon.points[idx];
            const lambda = weights[idx] / sumWeights;
            zCoord += p.z * lambda;
        }

        return zCoord;
    }

    generateMesh() {
        this.material.wireframe = this.params.wireframe;

        const Eps = 0.001 //Offset to prevent division by 0 on the polygon's points
        const uMin = this.polygon.boundingBox[0] + Eps;
        const uMax = this.polygon.boundingBox[2] - Eps;
        const uRange = uMax - uMin;

        const vMin = this.polygon.boundingBox[1] + Eps;
        const vMax = this.polygon.boundingBox[3] - Eps;
        const vRange = vMax - vMin;

        let wrapperFunction = (u: number, v: number, target: THREE.Vector3) => {
            u = uMin + u * uRange;
            v = vMin + v * vRange;

            const z = this.interpolate(u, v);
            target.set(u, v, z);
        };

        const geometry = new ParametricGeometry(wrapperFunction, this.params.slices, this.params.slices);

        this.applyColorMap(geometry);

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.name = this.name;
    }

    applyColorMap(geometry: ParametricGeometry) {
        const positions = geometry.getAttribute("position");
        const numDims = positions.itemSize;

        const count = positions.count

        const zMin = 0; //TODO: make flexible?
        const zMax = 1;
        const zRange = zMax - zMin;

        const numColors = 4;

        let colors = new Float32Array(count * numColors);
        for (let i = 0; i < count; i++) {
            let value = (Math.max(zMin, Math.min(zMax, positions.array[i * numDims + 2])) - zMin) * zRange;

            if (isNaN(value)) {
                console.error("value at ", i, " is NaN");
                continue;
            }
            let color: number[] = evaluate_cmap(value, this.params.colormap, false);

            colors[i * numColors] = color[0];
            colors[i * numColors + 1] = color[1];
            colors[i * numColors + 2] = color[2];

            if (this.polygon.isInPolygon(positions.array[i * numDims], positions.array[i * numDims + 1])) {
                colors[i * numColors + 3] = 1;
            } else {
                colors[i * numColors + 3] = 0;
            }

        }
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, numColors)
        );
    }

}

export { Interpolation }