import { Vector2, Vector3 } from "three";

function mod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

function to_2d_vector(v: Vector3): Vector2 {
    const p = new Vector2(v.x, v.y);
    return p;
}

export { mod, to_2d_vector }