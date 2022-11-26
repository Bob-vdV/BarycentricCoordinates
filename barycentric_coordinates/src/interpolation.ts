import * as THREE from "three";
import { mod, to_2d_vector } from "./utils";
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry';

class Interpolation {
    material: THREE.Material;
    bivarite_function = Interpolation.wachspress;
    points: THREE.Vector3[];

    constructor(material: THREE.Material, points: THREE.Vector3[]) {
        this.material = material;
        this.points = points;
    }

    static wachspress(x: THREE.Vector2, points: THREE.Vector3[], idx: number): number {
        const p = to_2d_vector(points[idx]);
        const r = x.distanceTo(p);
        const power = 1; // TODO: This is not wachspress but mean value, but change it later
        return r ** power;
    }

    /**
     * Calculate the signed area of the triangle between three points in 2d space.
     * 
     * @param points Three points that make up the triangle.
     * 
     * TODO: maybe move this to utils?
     */
    static calculate_2d_triangle(points: THREE.Vector2[]): number {
        let area = (
            points[0].x * points[1].y +
            points[1].x * points[2].y +
            points[2].x * points[0].y -
            points[0].y * points[1].x -
            points[1].y * points[2].x -
            points[2].y * points[0].x
        ) / 2;
        return area;
    }

    calculate_weight(x: THREE.Vector2, idx: number) {
        let num_points = this.points.length;

        let prev_idx = mod(idx - 1, num_points);
        let next_idx = mod(idx + 1, num_points);

        //TODO: maybe refactor this into new function?
        const p_prev = to_2d_vector(this.points[prev_idx]);
        const p = to_2d_vector(this.points[idx]);
        const p_next = to_2d_vector(this.points[next_idx]);

        let A_prev = Interpolation.calculate_2d_triangle([x, p_prev, p]);
        let A = Interpolation.calculate_2d_triangle([x, p, p_next]);
        let B = Interpolation.calculate_2d_triangle([x, p_prev, p_next]);

        let weight = (
            this.bivarite_function(x, this.points, next_idx) * A_prev -
            this.bivarite_function(x, this.points, idx) * B +
            this.bivarite_function(x, this.points, prev_idx) * A
        ) / (A_prev * A);

        return weight;
    }

    interpolate(x_coor: number, y_coor: number): THREE.Vector3 {
        const vector_x = new THREE.Vector2(x_coor, y_coor);
        let weights = [];
        let sum_weights = 0;
        for (let idx = 0; idx < this.points.length; idx++) {
            weights.push(this.calculate_weight(vector_x, idx));
            sum_weights += weights[idx];
        }

        let interpolation = new THREE.Vector3();

        for (let idx = 0; idx < this.points.length; idx++) {
            let p = this.points[idx].clone();
            const lambda = weights[idx] / sum_weights;
            p.multiplyScalar(lambda);
            interpolation.add(p);
        }

        return interpolation;
    }

    generateMesh(): THREE.Mesh {

        let testFunction = ( u:number, v:number, target:THREE.Vector3 ) => {
            
            const temp = 6;   //  TODO:remove this 
            
            u = u * temp - (temp/2);
            v = v * temp - (temp/2);

            const vector = this.interpolate(u, v);
            //console.log(u, v, vector);
            target.copy(vector);
            target.x = u;
            target.y = v;

            //target.set( u, v, Math.cos( u ) * Math.sin( v ) );
        };
            

        const slices = 1000;

        const geometry = new ParametricGeometry(testFunction, slices, slices);

        /*
        const wireframe = new WireframeGeometry(geometry);
        const lines = new THREE.LineSegments(wireframe);
        return lines;*/

        const mesh = new THREE.Mesh(geometry, this.material);

        return mesh;
    }




}

export { Interpolation }