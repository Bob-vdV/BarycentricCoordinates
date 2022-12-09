/**
 * Represents edge where first point is always lower than second point. 
 * 
 * Most functions here are based on the following code:
 * https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
 */
class Edge {
    lowX: number;
    lowY: number;
    highX: number;
    highY: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        if (y1 <= y2) {
            this.lowX = x1;
            this.lowY = y1;
            this.highX = x2;
            this.highY = y2;
        } else {
            this.lowX = x2;
            this.lowY = y2;
            this.highX = x1;
            this.highY = y1;
        }
    }

    // Find orientation of edge with other point
    // The function returns following values
    // 0 --> p, q and r are collinear
    // 1 --> Clockwise
    // 2 --> Counterclockwise
    orientation(xCoord: number, yCoord: number): number {

        // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
        // for details of below formula.

        let val = (yCoord - this.lowY) * (this.highX - xCoord) -
            (xCoord - this.lowX) * (this.highY - yCoord);

        if (val == 0) {
            return 0;
        };

        return (val > 0) ? 1 : 2; // clock or counterclock wise
    }

    intersectsWith(other: Edge): boolean {
        // Find the four orientations needed for general and
        // special cases
        let o1 = this.orientation(other.lowX, other.lowY);
        let o2 = this.orientation(other.highX, other.highY);
        let o3 = other.orientation(this.lowX, this.lowY);
        let o4 = other.orientation(this.highX, this.highY);

        // General case
        if (o1 != o2 && o3 != o4)
            return true;

        return false;
    }
}

export { Edge }