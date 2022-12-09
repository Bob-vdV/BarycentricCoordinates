import { Vector2, Vector3 } from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { to2dVector } from "./utils";
import { Edge } from "./edge";

class Polygon {
    color = 0xFF6347;
    lineThickness = 0.002;
    points: THREE.Vector3[];
    material: LineMaterial;
    boundingBox: number[] = []; // [xmin ymin xmax ymax], Z coordinate is not needed and thus not computed.
    edgeTable!: Vector2[][];

    constructor(numPoints: number, radius: number, z = 0) {
        this.points = [];
        for (let i = 0; i < numPoints; i++) {
            let x = radius * Math.cos(i * 2 * Math.PI / numPoints);
            let y = radius * Math.sin(i * 2 * Math.PI / numPoints);
            this.points.push(new Vector3(x, y, z));
        }

        this.material = new LineMaterial({
            color: this.color,
            linewidth: this.lineThickness,
        });

        this.computeBoundingBox();
        this.getEdgeTable();
    }

    generateMesh(): THREE.Mesh {
        const geometry = new LineGeometry();
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

        geometry.setPositions(positions);
        const mesh = new Line2(geometry, this.material);
        mesh.computeLineDistances();
        mesh.scale.set(1, 1, 1);

        return mesh;
    }

    computeBoundingBox() {
        let xMin = Infinity;
        let xMax = -Infinity;
        let yMin = Infinity;
        let yMax = -Infinity;

        for (let i = 0; i < this.points.length; i++) {
            let point = this.points[i];
            xMin = Math.min(xMin, point.x);
            xMax = Math.max(xMax, point.x);
            yMin = Math.min(yMin, point.y);
            yMax = Math.max(yMax, point.y);
        }

        this.boundingBox[0] = xMin;
        this.boundingBox[1] = yMin;
        this.boundingBox[2] = xMax;
        this.boundingBox[3] = yMax;
    }

    getEdgeTable() {
        let edgeTable = [];

        for (let i = 0; i < this.points.length; i++) {
            const curr = to2dVector(this.points[i]);
            const next = to2dVector(this.points[(i + 1) % this.points.length]);

            if (curr.y != next.y) {
                if (curr.y < next.y) { // add point with lowest y as first element
                    edgeTable.push([curr, next]);
                } else {
                    edgeTable.push([next, curr]);
                }
            }
        }

        const compareLowerY = (edgeA: Vector2[], edgeB: Vector2[]): number => {
            if (edgeA[0].y < edgeB[0].y) {
                return -1;
            }
            if (edgeA[0].y > edgeB[0].y) {
                return 1;
            }
            return 0;
        };

        edgeTable.sort(compareLowerY);

        this.edgeTable = edgeTable;
    }

    // TODO: VERY INEFFICIENT: fix this bottleneck with a scanline algorithm.
    isInPolygon(xCoord: number, yCoord: number): boolean {
        const edgeTable = this.edgeTable;

        let xRange = this.boundingBox[2] - this.boundingBox[0];
        let horizontalEdge = new Edge(xCoord, yCoord, xCoord + xRange, yCoord);

        let numIntersects = 0;

        for (let i=0;i<edgeTable.length;i++){
            let edge = new Edge(edgeTable[i][0].x, edgeTable[i][0].y, edgeTable[i][1].x, edgeTable[i][1].y);
            if (horizontalEdge.intersectsWith(edge)){
                numIntersects++;
            }
        }

        if (numIntersects % 2 == 1) {
            return true
        }
        return false;
    }
}

export { Polygon }