import { Interpolation } from "../model/interpolation"


class UpdateAction {
    interpolation: Interpolation

    constructor(interpolation: Interpolation){
        this.interpolation = interpolation;
    }

    fireUpdate(){

    }


}


export {UpdateAction}