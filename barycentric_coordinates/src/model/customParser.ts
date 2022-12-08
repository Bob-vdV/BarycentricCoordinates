import { Parser, ParserOptions } from "expr-eval";

class CustomParser extends Parser {
    static instance: CustomParser;
    // Full list of operators supported by Parser with as many as possible disabled.


    

    static getinstance(): CustomParser {
        if (!CustomParser.instance) {
            this.instance = new CustomParser();
        }
        return this.instance;
    }

    private constructor() {
        const options: ParserOptions = {
            operators: {
                add: true,
                concatenate: true, //??
                divide: true,
                power: true,
                subtract: true,

                comparison: false,

                conditional: false,

                factorial: false,
                logical: false,
                multiply: false, // Not needed now but probably in the future

                remainder: false,

                sin: false,
                cos: false,
                tan: false,
                asin: false,
                acos: false,
                atan: false,
                sinh: false,
                cosh: false,
                tanh: false,
                asinh: false,
                acosh: false,
                atanh: false,
                sqrt: false,
                log: true,
                ln: false,
                lg: false,
                log10: false,
                abs: false,
                ceil: false,
                floor: false,
                round: false,
                trunc: false,
                exp: false,
                length: false,
                in: false,
                random: false,
                min: false,
                max: false,
                assignment: false,
                fndef: false,
                cbrt: false,
                expm1: false,
                log1p: false,
                sign: false,
                log2: false
            }
        }
        super({ options });
    }

}


export { CustomParser }