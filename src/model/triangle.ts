import { Vector3 } from "three"

class Triangle {
    points: [Vector3, Vector3, Vector3];
    area!: number;

    constructor(points: [Vector3, Vector3, Vector3]) {
        this.points = points;
        this.calculateArea();
    }

    calculateArea() {
        let pts = this.points;
        this.area = 0.5 * (-pts[1].y * pts[2].x + pts[0].y * (-pts[1].x + pts[2].x) + pts[0].x * (pts[1].y - pts[2].y) + pts[1].x + pts[2].y);
    }

    subTriangles(depth: number, array: number[], func: (x: number, y: number) => number) {
        let pts = this.points;

        if (depth == 1) {
            for (let i = 0; i < pts.length; i++) {
                array.push(pts[i].x, pts[i].y, func(pts[i].x, pts[i].y));
            }
            return;
        }

        let p3 = new Vector3().lerpVectors(pts[0], pts[1], 0.5);
        let p4 = new Vector3().lerpVectors(pts[0], pts[2], 0.5);
        let p5 = new Vector3().lerpVectors(pts[1], pts[2], 0.5);

        new Triangle([p3, p4, pts[0]]).subTriangles(depth - 1, array, func);
        new Triangle([p3, pts[1], p5]).subTriangles(depth - 1, array, func);
        new Triangle([p3, p5, p4]).subTriangles(depth - 1, array, func);
        new Triangle([p4, p5, pts[2]]).subTriangles(depth - 1, array, func);
    }
}

export { Triangle }