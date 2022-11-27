import * as THREE from "three";
import { mod, to2dVector, signedTriangleArea } from "./utils";
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry';

class Interpolation {
    slices: number;
    material: THREE.Material;
    bivariteFunction = Interpolation.wachspress;
    points: THREE.Vector3[];

    constructor(material: THREE.Material, points: THREE.Vector3[], slices = 400) {
        this.material = material;
        this.points = points;
        this.slices = slices;
    }

    static wachspress(x: THREE.Vector2, points: THREE.Vector3[], idx: number): number {
        const p = to2dVector(points[idx]);
        const r = x.distanceTo(p);
        const power = 1; // TODO: This is not wachspress but mean value, but change it later
        return r ** power;
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

    generateMesh(): THREE.Mesh {
        let testFunction = (u: number, v: number, target: THREE.Vector3) => {
            const temp = 7;   //  TODO:remove this 

            u = u * temp - (temp / 2);
            v = v * temp - (temp / 2);

            const z = this.interpolate(u, v);
            target.set(u, v, z);
        };

        const geometry = new ParametricGeometry(testFunction, this.slices, this.slices);



        this.applyColorMap(geometry);

        console.log(geometry);

        const mesh = new THREE.Mesh(geometry, this.material);





        return mesh;
    }

    applyColorMap(geometry: ParametricGeometry) {
        const positions = geometry.getAttribute("position");
        const count = positions.count

        const zMin = 0;
        const zMax = 1;

        let colors = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            let color = (Math.max(zMin, Math.min(zMax, positions.array[i * 3 + 2])) - zMin)  * (zMax - zMin);
            colors[i*3] = color;
            colors[i*3 + 1] = color;
            colors[i*3 + 2] = color;
        }
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, 3)
        );
    }



}

export { Interpolation }