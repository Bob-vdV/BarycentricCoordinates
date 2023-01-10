import { Vector2 } from "three";

/**
 * Represents edge where first point is always lower than second point. 
 * 
 * Most functions here are based on the following code:
 * https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
 */
class Edge {
    p1: Vector2;
    p2: Vector2;

    constructor(p1: Vector2, p2: Vector2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    // Find orientation of edge with other point
    // The function returns following values
    // 0 --> p, q and r are collinear
    // 1 --> Clockwise
    // 2 --> Counterclockwise
    orientation(point: Vector2): number {
        // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
        // for details of below formula.

        let val = (point.y - this.p1.y) * (this.p2.x - point.x) -
            (point.x - this.p1.x) * (this.p2.y - point.y);

        if (val == 0) {
            return 0;
        };

        return (val > 0) ? 1 : 2; // clock or counterclock wise
    }

    // Given a point colinear with the edge, check if
    // point lies on this edge
    onSegment(point: Vector2): boolean {
        if (
            point.x <= Math.max(this.p1.x, this.p2.x) &&
            point.x >= Math.min(this.p1.x, this.p2.x) &&
            point.y <= Math.max(this.p1.y, this.p2.y) &&
            point.y >= Math.min(this.p1.y, this.p2.y)
        ) {
            return true;
        }
        return false;
    }

    intersectsWith(other: Edge): boolean {
        // Find the four orientations needed for general and
        // special cases
        let o1 = this.orientation(other.p1);
        let o2 = this.orientation(other.p2);
        let o3 = other.orientation(this.p1);
        let o4 = other.orientation(this.p2);

        // General case
        if (o1 != o2 && o3 != o4)
            return true;

        // Special Cases
        // p1, q1 and p2 are collinear and p2 lies on segment p1q1
        if (o1 == 0 && this.onSegment(other.p1)) return true;

        // p1, q1 and q2 are collinear and q2 lies on segment p1q1
        if (o2 == 0 && this.onSegment(other.p2)) return true;

        // p2, q2 and p1 are collinear and p1 lies on segment p2q2
        if (o3 == 0 && other.onSegment(this.p1)) return true;

        // p2, q2 and q1 are collinear and q1 lies on segment p2q2
        if (o4 == 0 && other.onSegment(this.p2)) return true;
        
        return false;
    }

    // https://www.youtube.com/watch?v=5FkOO1Wwb8w
    // Where: this = ab, other = cd
    intersection(other: Edge): Vector2 {
        let ab = this.vector();
        let cd = other.vector();
        let ac = new Vector2(other.p1.x - this.p1.x, other.p1.y - this.p1.y);
        let t = ac.clone().cross(other.vector()) / (ab.clone().cross(cd))
        return this.p1.clone().add(ac.multiplyScalar(t));
    }

    vector(): Vector2{
        return new Vector2(this.p2.x - this.p1.x, this.p2.y - this.p1.y);
    }


}

export { Edge }