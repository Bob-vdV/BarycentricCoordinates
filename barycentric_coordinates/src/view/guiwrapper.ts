import { GUI } from "dat.gui";

class GuiWrapper {
    gui: GUI;

    constructor() {
        this.gui = new GUI();

        const param = {
            'p': 1,
            "colormap": "viridis",
        }

        this.gui.add(param, "p", -2, 2, 0.1).onChange(function (val) {
            console.log(val);
        });



        this.gui.add(param, "colormap")

    }
}



export { GuiWrapper }