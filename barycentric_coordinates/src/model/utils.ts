import { Vector2, Vector3 } from "three";

function mod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

function to2dVector(v: Vector3): Vector2 {
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

export { mod, to2dVector, signedTriangleArea }