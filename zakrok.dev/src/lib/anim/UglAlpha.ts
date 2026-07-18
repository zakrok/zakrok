import {cross, divide, dot, type MathGeneric, type Matrix, matrix, multiply, norm, tan} from "mathjs";

const normalize = (vector: Matrix<MathGeneric>) => divide(vector, norm(vector)) as Matrix

const e = matrix([0, 2, 3])
const gaze = matrix([0, -0.5, -0.866])
const lookup = matrix([0, 1, 0])

const w = normalize(gaze)
const u = normalize(cross(w, lookup) as Matrix)
const v = cross(w, u) as Matrix

const mCam = matrix([
    [u.get([0]), v.get([0]), -w.get([0]), 0.],
    [u.get([1]), v.get([1]), -w.get([1]), 0.],
    [u.get([2]), v.get([2]), -w.get([2]), 0.],
    [-dot(e, u), -dot(e, v), dot(e, w), 1.],
])

export function getMvp(w: number, h: number): Matrix {
    const aspect = w / h
    const fov = 45. * (Math.PI / 180)
    const f = 1.0 / tan(fov * 0.5)
    const z_near = 0.1
    const z_far = 100.0

    const mProj = matrix([
        [f / aspect, 0., 0., 0.],
        [0.0, f, 0.0, 0.0],
        [0.0, 0.0, z_far / (z_far - z_near), 1.0],
        [0.0, 0.0, -z_far * z_near / (z_far - z_near), 0.0],
    ])

    const viewport = matrix([
        [w / 2, 0, 0, (w - 1) / 2],
        [0, h / 2, 0, (h - 1) / 2],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ])

    return multiply(viewport, multiply(mProj, mCam)) as Matrix
}
