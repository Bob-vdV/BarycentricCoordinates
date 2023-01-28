import { Vector2, Vector3 } from "three";

function mod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

function toVector2(v: Vector3): Vector2 {
    const p = new Vector2(v.x, v.y);
    return p;
}

/**
 * Calculate the signed area of the triangle between three points in 2d space.
 * 
 * @param points Three points that make up the triangle.
 * 
 */
function signedTriangleArea(points: Vector2[]): number {
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

// Compute angle between edges p1-p2 and p2-p3
function compute_angle(p1: Vector2 | Vector3, p2: Vector2 | Vector3, p3: Vector2 | Vector3): number {
    let v1 = new Vector3(p2.x - p1.x, p2.y - p1.y); // Use vector3 because of angleTo function
    let v2 = new Vector3(p2.x - p3.x, p2.y - p3.y);

    let angle = v1.angleTo(v2); // Always returns smaller angle
    let orientation = v1.x * v2.y - v1.y * v2.x;
    if (orientation > 0) {
        angle = 2 * Math.PI - angle;
    }
    return angle;
}


/**
 * Used to pass count by reference 
 * 
 */
interface Counter {
    count:number;
}

/**
 * Divide a triangle into 4 subtriangles until depth==1. Then add the indexes 
 * of the subtriangles to the array of indexes.
 * Triangle points are numbered as follows: 
 * 
 *           0
 *          / \
 *         /   \
 *        3 - - 5
 *       / \   / \
 *      /   \ /   \
 *     1 - - 4 - - 2
 * 
 */
function subTriangles(depth: number, array: Vector2[], p0Idx:number, p1Idx:number, p2Idx:number, counter:Counter, indexes: number[]): void {
    if (depth == 1) {
        indexes.push(p0Idx, p1Idx, p2Idx);
        return;
    }

    const p0 = array[p0Idx];
    const p1 = array[p1Idx];
    const p2 = array[p2Idx];

    const p3 = new Vector2().lerpVectors(p0, p1, 0.5);
    const p4 = new Vector2().lerpVectors(p1, p2, 0.5);
    const p5 = new Vector2().lerpVectors(p2, p0, 0.5);
    array.push(p3, p4, p5);

    const count = counter.count;
    const p3Idx = count;
    const p4Idx = count + 1;
    const p5Idx = count + 2;

    counter.count += 3;

    subTriangles(depth-1, array, p0Idx, p3Idx, p5Idx, counter, indexes);
    subTriangles(depth-1, array, p3Idx, p1Idx, p4Idx, counter, indexes);
    subTriangles(depth-1, array, p4Idx, p5Idx, p3Idx, counter, indexes); // flipped upside down
    subTriangles(depth-1, array, p5Idx, p4Idx, p2Idx, counter, indexes);
}

export { mod, toVector2, signedTriangleArea, compute_angle , subTriangles}