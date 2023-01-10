import { Parser } from "expr-eval";

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
function sqRDiv1SqR(r: number, _p: number): number {
    return r * r / (1 + r * r);
}

// Arbitrary function where only the type is used as return type of custom()
const type = (r: number, _p: number): number => { return r; }

// Custom function with r as parameter
function custom(func: string): typeof type {
    let custom_function = Parser.parse(func);
    const symbols = custom_function.symbols();
    if (symbols.length > 1 || (symbols.length != 0 && symbols[0] != "r")) {
        throw new Error("Illegal parameter(s) used in function: " + symbols);
    }
    return custom_function.toJSFunction("r");
}

export { powRP, log1R, RDiv1R, sqRDiv1SqR, custom }