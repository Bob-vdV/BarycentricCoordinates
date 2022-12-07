import { Interpolation } from "../interpolation"


class UpdateAction {
    interpolation: Interpolation

    constructor(interpolation: Interpolation){
        this.interpolation = interpolation;
    }

    fireUpdate(){
        
    }


}


export {UpdateAction}