import * as THREE from "three";

class Polygon {
    points: THREE.Vector3[];

    constructor(numPoints: number, radius: number, z = 0) {
        this.points = [];
        for (let i = 0; i < numPoints; i++) {
            let x = radius * Math.cos(i * 2 * Math.PI / numPoints);
            let y = radius * Math.sin(i * 2 * Math.PI / numPoints);
            this.points.push(new THREE.Vector3(x, y, z));
        }
    }

    generateGeometry(): THREE.BufferGeometry {
        //Copy points, then add first point again for drawing last line
        let pointsCopy = Object.assign([], this.points);
        pointsCopy.push(pointsCopy[0]);

        const geometry = new THREE.BufferGeometry().setFromPoints(pointsCopy);
        return geometry;
    }
}

export { Polygon }