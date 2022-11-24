import * as THREE from "three";

class Interpolation {
    material: THREE.Material;
    bivarite_function = Interpolation.wachspress;

    constructor(material: THREE.Material) {
        this.material = material;
    }

    // TODO: move this to somewhere else
    static mod(a: number, b: number): number {
        return ((a % b) + b) % b;
    }

    static wachspress(x: THREE.Vector2, points: THREE.Vector3[], idx: number): number {
        let p = new THREE.Vector2(points[idx].x, points[idx].y);
        let r = x.distanceTo(p);
        let power = 1; // TODO: THis is not wachspress but mean value, but change it later
        return r ** power;
    }

    /**
     * Calculate the area of the triangle between three points,
     * where only the x and y axes are considered - z is discarded.
     * 
     * @param points Three points that make up the triangle.
     */
    static calculate_2d_triangle(points: THREE.Vector2[]): number {
        let area = Math.abs((
            points[0].x * points[1].y +
            points[1].x * points[2].y +
            points[2].x * points[0].y -
            points[0].y * points[1].x -
            points[1].y * points[2].x -
            points[2].y * points[0].x
        ) / 2);
        return area;
    }

    calculate_weight(x: THREE.Vector2, points: THREE.Vector3[], idx: number) {
        let num_points = points.length;

        let prev_idx = Interpolation.mod(idx - 1, num_points);
        let next_idx = Interpolation.mod(idx + 1, num_points);

        //TODO: maybe refactor this into new function?
        let p_prev = new THREE.Vector2(points[prev_idx].x, points[prev_idx].y);
        let p = new THREE.Vector2(points[idx].x, points[idx].y);
        let p_next = new THREE.Vector2(points[next_idx].x, points[next_idx].y);

        let A_prev = Interpolation.calculate_2d_triangle([x, p_prev, p]);
        let A = Interpolation.calculate_2d_triangle([x, p, p_next]);
        let B = Interpolation.calculate_2d_triangle([x, p_prev, p_next]);

        let weight = (
            this.bivarite_function(x, points, next_idx) * A_prev -
            this.bivarite_function(x, points, idx) * B +
            this.bivarite_function(x, points, prev_idx) * A
        ) / (A_prev * A);

        return weight;
    }

    interpolate(x: THREE.Vector2, points: THREE.Vector3[]): THREE.Vector3 {
        let weights = [];
        let sum_weights = 0;
        for (let idx = 0; idx < points.length; idx++) {
            weights.push(this.calculate_weight(x, points, idx));
            sum_weights += weights[idx];
        }

        let interpolation = new THREE.Vector3();

        for (let idx = 0; idx < points.length; idx++) {
            let p = points[idx].clone();
            let lambda = weights[idx] / sum_weights;
            p.multiplyScalar(lambda);
            interpolation.add(p);
        }

        return interpolation;
    }

    generateMesh(points: THREE.Vector3[]) {
        //TODO


    }



}

export { Interpolation }