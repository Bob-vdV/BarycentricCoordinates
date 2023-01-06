import { BufferGeometry, Float32BufferAttribute, Vector3 } from "three"
import { Polygon } from "./polygon";
import { Triangle } from "./triangle";
import { mod, compute_angle } from "./utils";

class BarycentricGeometry extends BufferGeometry {
    parameters: any;

    constructor(polygon: Polygon, func: (u: number, v: number) => number, density = 4) {
        super();
        this.type = "BarycentricGeometry"

        this.parameters = {
            func: func,
        }

        let mainTriangles = earclip(polygon);

        let positions: number[] = [];
        for (let i = 0; i < mainTriangles.length; i++) {
            mainTriangles[i].subTriangles(density, positions, func);
        }

        this.setAttribute('position', new Float32BufferAttribute(positions, 3));
        // End of constructor

        function isValidEar(triangle: Triangle, polygonPoints: Vector3[]): boolean {
            let angle = compute_angle(triangle.points[0], triangle.points[1], triangle.points[2]);
            if (angle > Math.PI) {
                return false;
            }

            for (let j = 0; j < polygonPoints.length; j++) {
                if (triangle.contains(polygonPoints[j])) {
                    return false;
                }
            }
            return true;
        }

        function earclip(polygon: Polygon): Triangle[] {
            let points: Vector3[] = [];
            for (let i = 0; i < polygon.points.length; i++) {
                points.push(polygon.points[i].clone());
            }
            let triangles: Triangle[] = [];

            while (points.length > 3) {
                for (let i = 0; i < points.length; i++) {
                    let last = points[mod(i - 1, points.length)];
                    let curr = points[i];
                    let next = points[mod(i + 1, points.length)];
                    let triangle = new Triangle([last, curr, next]);

                    if (isValidEar(triangle, points)) {
                        triangles.push(triangle);
                        points.splice(i, 1);
                        break;
                    }
                }
            }
            triangles.push(new Triangle([points[0], points[1], points[2]]));
            return triangles;
        }
    }
}

export { BarycentricGeometry }