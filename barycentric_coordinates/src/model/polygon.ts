import { Vector2, Vector3} from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { Line2 } from "three/examples/jsm/lines/Line2";

class Polygon {
    color = 0xFF6347;
    lineThickness = 0.002;
    points: THREE.Vector3[];
    material: LineMaterial;
    boundingBox: number[]= []; // [xmin ymin xmax ymax], Z coordinate is not needed and thus not computed.

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
    /*
    TODO
    isInPolygon(point: THREE.Vector2): boolean {

        let min_x = Infinity;
        let max_x = -Infinity;

        for (let i =0;i<this.points.length;i++){
            let curr_x = this.points[i].x;

            if (min_x > curr_x){
                min_x = curr_x;
            } else if (max_x > curr_x){
                max_x = curr_x;
            }
        }

        const x_range = max_x - min_x;





    }
    */
}

export { Polygon }