import { Polygon } from "../model/polygon";
import { Vector3 } from "three";
//TODO: maybe add numPoints as slider to GUI with button to apply

function applyPreset(polygon: Polygon, preset: string, numPoints: number){
    switch (preset) {
        case "regular polygon":
            regularPolygon(polygon, numPoints);
            break;
        case "wave":
            sineWave(polygon, numPoints);
            break;
        case "hyperparaboloid":
            hyperParaboloid(polygon, numPoints);
            break;
        case "nonConvex":
            nonConvex(polygon, numPoints);
            break;
        default:
            throw new Error("Unknown preset");
    }
}

function generate_ngon(polygon: Polygon, numPoints: number, radius: number): void {
    polygon.points.length = 0;
    for (let i = 0; i < numPoints; i++) {
        let x = radius * Math.cos(i * 2 * Math.PI / numPoints);
        let y = radius * Math.sin(i * 2 * Math.PI / numPoints);
        polygon.points.push(new Vector3(x, y, 0));
    }
}

function regularPolygon(polygon: Polygon, numPoints: number): void {
    const radius = 3;
    generate_ngon(polygon, numPoints, radius);
    polygon.points[0].setZ(1);
}

function sineWave(polygon: Polygon, numPoints: number): void {
    const radius = 5;
    const func = (index: number): number => {
        const sin = Math.sin;
        const PI = Math.PI;
        const v = index / numPoints;
        return sin(3 * PI * v) + sin(7 * PI * v);
    }
    generate_ngon(polygon, numPoints, radius);
    for (let i = 0; i < numPoints; i++) {
        polygon.points[i].setZ(func(i));
    }
}

/**
 * Hyperbolic paraboloid, a.k.a "pringle shape"
 * 
 */
function hyperParaboloid(polygon: Polygon, numPoints: number): void {
    const radius = 5;
    generate_ngon(polygon, numPoints, radius);

    const a = 1;
    const b = 2;
    const c = 5;
    const func = (x: number, y: number): number => {
        return (x * x / (a * a) - y * y / (b * b)) / c;
    }
    for (let i = 0; i < numPoints; i++) {
        let point = polygon.points[i];
        point.setZ(func(point.x, point.y));
    }
}

function nonConvex(polygon: Polygon, numPoints: number): void {
    const radius = 5;
    generate_ngon(polygon, numPoints, radius);

    polygon.points[0].set(-1, 0, 1);
}

export { applyPreset, regularPolygon, sineWave, hyperParaboloid, nonConvex }
