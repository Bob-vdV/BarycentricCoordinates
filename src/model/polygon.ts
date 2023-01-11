import * as THREE from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { compute_angle, mod } from "./utils";

class Polygon {
    readonly name = "polygon";
    color = 0xFF6347;
    lineThickness = 0.002;
    points: THREE.Vector3[];
    material: LineMaterial;
    mesh = new THREE.Group();
    lines: THREE.Mesh | null = null;
    corners = new THREE.Group();

    constructor() {
        this.points = [];

        this.material = new LineMaterial({
            color: this.color,
            linewidth: this.lineThickness,
        });
    }

    generateLines() {
        let positions = [];
        for (let i = 0; i < this.points.length; i++) {
            positions.push(this.points[i].x);
            positions.push(this.points[i].y);
            positions.push(this.points[i].z);
        }

        // Add first point again to draw the line from last to first point.
        positions.push(this.points[0].x);
        positions.push(this.points[0].y);
        positions.push(this.points[0].z);

        const geometry = new LineGeometry();
        geometry.setPositions(positions);
        const lines = new Line2(geometry, this.material);
        this.mesh.add(lines);

        const minimapLines = new Line2(geometry, new LineMaterial({
            color: this.color,
            linewidth: 0.01,
            depthTest: false,
            depthWrite: false,
        }))
        minimapLines.layers.set(1);
        minimapLines.renderOrder = 998;
        this.mesh.add(minimapLines);

        // Add 'base' line segments at z=0 if the edges are not already at 0
        let basePositions = [];
        let baseMaterial = new LineMaterial({
            color: 0x752e21,
            linewidth: this.lineThickness,
        });

        for (let i = 0; i < this.points.length; i++) {

            if (this.points[i].z != 0 || this.points[mod(i - 1, this.points.length)].z != 0) {
                basePositions.length = 0;
                basePositions.push(this.points[mod(i - 1, this.points.length)].x);
                basePositions.push(this.points[mod(i - 1, this.points.length)].y);
                basePositions.push(0);

                basePositions.push(this.points[i].x);
                basePositions.push(this.points[i].y);
                basePositions.push(0);

                const lineSegment = new LineGeometry();
                lineSegment.setPositions(basePositions);
                const baseLines = new Line2(lineSegment, baseMaterial);
                this.mesh.add(baseLines);
            }
        }
    }

    generateCorners() {
        this.corners.clear();
        let material = new THREE.MeshBasicMaterial({
            color: "red",
        })

        //TODO: replace with simple sprite
        for(let i=0;i<this.points.length;i++){
            let circleGeometry = new THREE.CircleGeometry(0.4, 20);
            let circlemesh = new THREE.Mesh(circleGeometry, material);

            circlemesh.position.copy(this.points[i]).setZ(11);
            circlemesh.layers.set(1);
            circlemesh.name = i.toString();
            this.corners.add(circlemesh);
        }

        this.mesh.add(this.corners);
    }

    generateMesh() {
        this.mesh.clear();
        this.generateLines();
        this.generateCorners();
        this.mesh.name = this.name;
    }

    isConvex(): boolean {
        const n = this.points.length;
        for (let i = 0; i < n; i++) {
            let angle = compute_angle(this.points[mod(i - 1, n)], this.points[i], this.points[mod(i + 1, n)]);
            if (angle > Math.PI) {
                return false;
            }
        }
        return true;
    }
}

export { Polygon }