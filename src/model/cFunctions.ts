// c_i = r^p
function powRP(r: number, p: number): number {
    return r ** p;
}

// c_i = log(1+r)
function log1R(r: number, _p: number): number {
    return Math.log(1 + r);
}

// c_i = r / (1 + r)
function RDiv1R(r: number, _p: number): number {
    return r / (1 + r);
}

// c_i = r*r / (1+r*r)
function sqRdiv1sqR(r: number, _p: number): number {
    return r * r / (1 + r * r);
}

export { powRP, log1R, RDiv1R, sqRdiv1sqR }