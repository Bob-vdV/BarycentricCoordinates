import * as THREE from "three";

class Polygon {
    points: THREE.Vector3[];

    constructor(num_points: number, radius: number, z = 0) {
        this.points = [];
        for (let i = 0; i < num_points; i++) {
            let x = radius * Math.cos(i * 2 * Math.PI / num_points);
            let y = radius * Math.sin(i * 2 * Math.PI / num_points);
            this.points.push(new THREE.Vector3(x, y, z));
        }
    }

    generateGeometry(): THREE.BufferGeometry {
        //Copy points, then add first point again for drawing last line
        let pointsCopy = this.points;
        pointsCopy.push(pointsCopy[0]);

        const geometry = new THREE.BufferGeometry().setFromPoints(pointsCopy);
        return geometry;
    }
}

export { Polygon }