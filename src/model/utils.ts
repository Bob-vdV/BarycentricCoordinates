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
function compute_angle(p1: Vector3, p2: Vector3, p3: Vector3): number {
    let v1 = new Vector3(p2.x - p1.x, p2.y - p1.y); // Use vector3 because of angleTo function
    let v2 = new Vector3(p2.x - p3.x, p2.y - p3.y);

    let angle = v1.angleTo(v2); // Always returns smaller angle
    let orientation = v1.x * v2.y - v1.y * v2.x;
    if (orientation > 0) {
        angle = 2 * Math.PI - angle;
    }
    return angle;
}


export { mod, toVector2, signedTriangleArea, compute_angle }