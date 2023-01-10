import { BufferGeometry, Float32BufferAttribute} from "three"
import { Polygon } from "./polygon";
import { Triangle } from "./triangle";
import { Earcut } from "three/src/extras/Earcut";

class BarycentricGeometry extends BufferGeometry {
    parameters: any;

    constructor(polygon: Polygon, func: (u: number, v: number) => number, density = 4) {
        super();
        this.type = "BarycentricGeometry"

        this.parameters = {
            func: func,
        }

        let mainTriangles = earcut(polygon);

        let positions: number[] = [];
        for (let i = 0; i < mainTriangles.length; i++) {
            mainTriangles[i].subTriangles(density, positions, func);
        }

        this.setAttribute('position', new Float32BufferAttribute(positions, 3));
        // End of constructor

        function earcut(polygon: Polygon): Triangle[] {
            const data:number[] = [];
            for(let i=0;i<polygon.points.length;i++){
                data.push(polygon.points[i].x);
                data.push(polygon.points[i].y);
            }
            const results!: number[] = Earcut.triangulate(data, [], 2); // Wrong type declared: https://github.com/three-types/three-ts-types/issues/268

            const triangles: Triangle[] = [];

            for(let i=0;i<results.length;i += 3){
                let p0 = polygon.points[results[i]];
                let p1 = polygon.points[results[i+1]];
                let p2 = polygon.points[results[i+2]];
                triangles.push(new Triangle([p0, p1, p2]));
            }
            return triangles
        }
    }
}

export { BarycentricGeometry }