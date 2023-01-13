import * as THREE from "three";
import { mod, toVector2, signedTriangleArea } from "./utils";
import { evaluate_cmap, colorData } from "./colormaps.js";
import * as c_fun from "./cFunctions";
import { Polygon } from "./polygon";
import { BarycentricGeometry } from "./barycentricGeometry";

class Interpolation {
    readonly name = "interpolation";
    params = {
        c_function: c_fun.powRP,
        p: 1,
        density: 6,
        colormap: "viridis",
        wireframe: false,
    }
    material!: THREE.ShaderMaterial;
    polygon: Polygon;
    mesh!: THREE.Mesh;

    constructor(polygon: Polygon) {
        this.polygon = polygon;
        this.initMaterial();
    }

    initMaterial() {
        let uniforms = {
            fragmentSize: { value: 0.1 },
            heightLineWidth: { value: 0.005 },
            colors: { value: null }, // Defined when colors are set
            numColors: { value: null },
            zMin: { value: null }, // Defined when interpolation is calculated
            zRange: { value: null },
        }

        this.material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader(),
            transparent: false,
            side: THREE.DoubleSide,
        });

        this.setColors(this.params.colormap);

        function vertexShader() {
            return `
                varying vec3 vUv; 
            
                void main() {
                    vUv = position; 
            
                    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * modelViewPosition; 
                }
                `
        }
    }

    setColors(colormap: string) {
        this.params.colormap = colormap;

        let colors: any = colorData[this.params.colormap]["colors"];

        let vectors: THREE.Color[] = [];
        for (let i = 0; i < colors.length; i++) {
            vectors.push(new THREE.Color(colors[i][0], colors[i][1], colors[i][2]));
        }

        this.material.uniforms.numColors.value = vectors.length;

        this.material.uniforms.colors.value = vectors;
        this.material.fragmentShader = fragmentShader();

        function fragmentShader() {
            return `
                uniform int numColors;
                uniform vec3[${vectors.length}] colors;
                uniform float zMin, zRange;
                uniform float fragmentSize, heightLineWidth;
                varying vec3 vUv;

                void main() {
                    float colorValue = (vUv.z - zMin) / zRange;

                    int lo = int(colorValue * float(numColors - 1));
                    int hi = int(ceil(colorValue * float(numColors - 1)));
                    gl_FragColor = vec4(mix(colors[lo], colors[hi], 0.5), 1.0);

                    if(fragmentSize != 0.0){
                        float f = min(
                            vUv.z  - floor(vUv.z / fragmentSize) * fragmentSize,
                            (vUv.z  - ceil(vUv.z / fragmentSize) * fragmentSize) * -1.0
                        );

                        if(f < heightLineWidth){
                            gl_FragColor = mix(gl_FragColor, vec4(1.0, 1.0, 1.0, 1.0), 1.0 - f / heightLineWidth);
                        }
                    }
                }
            `
        }
    }

    bivariteFunction(x: THREE.Vector2, points: THREE.Vector3[], idx: number): number {
        const point = toVector2(points[idx]);
        const r = x.distanceTo(point);
        return this.params.c_function(r, this.params.p);
    }

    calculateWeight(x: THREE.Vector2, idx: number) {
        const numPoints = this.polygon.points.length;

        const idxPrev = mod(idx - 1, numPoints);
        const idxNext = mod(idx + 1, numPoints);

        const pPrev = toVector2(this.polygon.points[idxPrev]);
        const p = toVector2(this.polygon.points[idx]);
        const pNext = toVector2(this.polygon.points[idxNext]);

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

        let wrapperFunction = (u: number, v: number): number => {
            let result = this.interpolate(u, v);
            return result;
        };

        const geometry = new BarycentricGeometry(this.polygon, wrapperFunction, this.params.density);
        geometry.computeBoundingBox();

        //this.applyColorMap(geometry);
        this.material.uniforms.zMin.value = geometry.boundingBox?.min.z;
        this.material.uniforms.zRange.value = geometry.boundingBox!.max.z - geometry.boundingBox!.min.z;

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.name = this.name;
    }

    //TODO: remove
    applyColorMap(geometry: THREE.BufferGeometry) {
        const positions = geometry.getAttribute("position");
        const numDims = positions.itemSize;

        const count = positions.count

        const arr = this.polygon.points.map(point => point.z);
        const zMin = Math.min.apply(null, arr);
        const zMax = Math.max.apply(null, arr);

        let zRange = zMax - zMin;

        // Prevent division by 0 when every point is same height. 
        if (zRange == 0) {
            zRange = Infinity;
        }

        const numColors = 3;
        let colors = new Float32Array(count * numColors);
        for (let i = 0; i < count; i++) {
            let value = (Math.max(zMin, Math.min(zMax, positions.array[i * numDims + 2])) - zMin);

            if (isNaN(value)) { // Occurs when point is on an edge
                const x = positions.array[i * numDims];
                const y = positions.array[i * numDims + 1]
                console.error("z value at (", x, ", ", y, ") is NaN");
                continue;
            }
            let color: number[] = evaluate_cmap(value / zRange, this.params.colormap, false);

            colors[i * numColors] = color[0];
            colors[i * numColors + 1] = color[1];
            colors[i * numColors + 2] = color[2];
        }
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, numColors)
        );
    }
}

export { Interpolation }