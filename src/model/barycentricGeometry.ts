import { BufferGeometry, Float32BufferAttribute, Vector2, Vector3 } from "three"
import { Polygon } from "./polygon";
import { Triangle } from "./triangle";
import { Earcut } from "three/src/extras/Earcut";
import { compute_angle, mod, subTriangles, toVector2 } from "./utils";

class BarycentricGeometry extends BufferGeometry {
    parameters: any;

    constructor(polygon: Polygon, func: (u: number, v: number) => number, density = 4) {
        super();
        this.type = "BarycentricGeometry"

        this.parameters = {
            func: func,
        }
        const Eps = 0.0001;

        let points = movePoints(polygon.points);

        let mainTriangles = earcut(points);

        let positions: number[] = [];
        let indices: number[] = [];
        let counter = { count: 0 };
        let vectors: Vector2[] = [];

        for (let i = 0; i < mainTriangles.length; i++) {
            mainTriangles[i].points.forEach(point => {
                vectors.push(point);
            });

            let c = counter.count;
            counter.count += 3;

            subTriangles(density, vectors, c + 0, c + 1, c + 2, counter, indices);
        }

        // Calculate all the vertices
        for (let i = 0; i < vectors.length; i++) {
            positions.push(vectors[i].x, vectors[i].y, func(vectors[i].x, vectors[i].y));
        }

        this.setAttribute('position', new Float32BufferAttribute(positions, 3));
        this.setIndex(indices);
        // End of constructor

        /**
         * Clone the points and then move them slightly inwards so that they won't 
         * be on the edges and produce NaN's
         * 
         */
        function movePoints(points: Vector3[]): Vector2[] {
            let newPoints: Vector2[] = [];
            for (let i = 0; i < points.length; i++) {
                let prev = toVector2(points[mod(i - 1, points.length)]);
                let curr = toVector2(points[i]);
                let next = toVector2(points[mod(i + 1, points.length)]);

                // Calculate the bisection, then add/substract it depending on the angle
                let e1 = curr.clone().sub(prev).normalize();
                let e2 = curr.clone().sub(next).normalize();

                // b = |e2| * e1 + |e1| * e2
                let bisectionUnitVector = e1.clone().multiplyScalar(e2.length()).add(e2.multiplyScalar(e1.length()));;
                bisectionUnitVector.normalize();
                let angle = compute_angle(prev, curr, next);

                if (angle <= Math.PI) {
                    bisectionUnitVector.negate();
                }
                newPoints.push(curr.clone().addScaledVector(bisectionUnitVector, Eps));
            }
            return newPoints;
        }

        function earcut(points: Vector2[]): Triangle[] {
            const data: number[] = [];
            for (let i = 0; i < points.length; i++) {
                data.push(points[i].x);
                data.push(points[i].y);
            }
            const results: any[] = Earcut.triangulate(data, [], 2); // Wrong type declared: https://github.com/three-types/three-ts-types/issues/268

            const triangles: Triangle[] = [];

            for (let i = 0; i < results.length; i += 3) {
                let p0 = points[results[i]];
                let p1 = points[results[i + 1]];
                let p2 = points[results[i + 2]];
                triangles.push({ points: [p0, p1, p2] });
            }
            return triangles
        }
    }
}

export { BarycentricGeometry }