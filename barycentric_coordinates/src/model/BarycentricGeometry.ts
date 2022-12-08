/**
 * Barycentric Geometry.
 * 
 * Based on the Parametric Geometry in the THREEjs examples:
 * https://github.com/mrdoob/three.js/blob/dev/examples/jsm/geometries/ParametricGeometry.js
 * 
 */
import {
    BufferGeometry,
    Float32BufferAttribute,
    Vector2,
    Vector3
} from 'three';

class BarycentricGeometry extends BufferGeometry { // CURRENTLY UNUSED
    parameters: {
        func: (u: number, v: number, target: Vector3) => void,
        points: Vector3[],
        slices: number,
        stacks: number
    }

    constructor(func = (u: number, v: number, target: Vector3) => { target.set(u, v, Math.cos(u) * Math.sin(v)) }, points: Vector3[], slices = 8, stacks = 8) {

        super();

        this.type = 'BarycentricGeometry';

        this.parameters = {
            func: func,
            points: points,
            slices: slices,
            stacks: stacks
        };

        // buffers

        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];

        const normal = new Vector3();

        const p0 = new Vector3(), p1 = new Vector3();
        const pu = new Vector3(), pv = new Vector3();

        // generate vertices, normals and uvs

        const sliceCount = slices + 1;

        for (let i = 0; i <= stacks; i++) {

            const v = i / stacks;

            for (let j = 0; j <= slices; j++) {

                const u = j / slices;

                // vertex

                func(u, v, p0);

                vertices.push(p0.x, p0.y, p0.z);

                // normal

                // approximate tangent vectors via finite differences

                if (u >= 0) {

                    func(u, v, p1);
                    pu.subVectors(p0, p1);

                } else {

                    func(u, v, p1);
                    pu.subVectors(p1, p0);

                }

                if (v >= 0) {

                    func(u, v, p1);
                    pv.subVectors(p0, p1);

                } else {

                    func(u, v, p1);
                    pv.subVectors(p1, p0);

                }

                // cross product of tangent vectors returns surface normal

                normal.crossVectors(pu, pv).normalize();
                normals.push(normal.x, normal.y, normal.z);

                // uv

                uvs.push(u, v);

            }

        }

        // generate indices

        for (let i = 0; i < stacks; i++) {

            for (let j = 0; j < slices; j++) {

                const a = i * sliceCount + j;
                const b = i * sliceCount + j + 1;
                const c = (i + 1) * sliceCount + j + 1;
                const d = (i + 1) * sliceCount + j;

                // faces one and two

                indices.push(a, b, d);
                indices.push(b, c, d);

            }

        }

        // build geometry

        this.setIndex(indices);
        this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));

    }

}

export { BarycentricGeometry };
