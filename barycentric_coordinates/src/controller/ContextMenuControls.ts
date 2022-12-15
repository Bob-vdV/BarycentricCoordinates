import * as THREE from "three";

import { EventDispatcher, Mesh, Raycaster, Vector2} from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";




//TODO: move this probably somewhere else 
const menu = document.createElement( 'form' );
menu.className = 'form';
menu.style.backgroundColor = "black";
menu.style.color = "white";
menu.style.display = "";

const xLabel = document.createElement("label");
xLabel.textContent = "x";
const xInput = document.createElement("input");

const yLabel = document.createElement("label");
yLabel.textContent = "y";
const yInput = document.createElement("input");

const zLabel = document.createElement("label");
zLabel.textContent = "z";
const zInput = document.createElement("input");

const button = document.createElement("input");
button.type = "button";
button.value = "Update polygon";

menu.appendChild(xLabel);
menu.appendChild(xInput);
menu.appendChild(document.createElement("br"));
menu.appendChild(yLabel);
menu.appendChild(yInput);
menu.appendChild(document.createElement("br"));
menu.appendChild(zLabel);
menu.appendChild(zInput);
menu.appendChild(document.createElement("br"));
menu.appendChild(button);



const label = new CSS2DObject( menu );
label.layers.set(1);

class ContextMenuControls extends EventDispatcher {
    objects: THREE.Object3D[];
    camera: THREE.PerspectiveCamera;
    domElement: any;

    constructor(objects: THREE.Object3D[], camera: THREE.PerspectiveCamera, domElement: any){
        super();

        this.objects = objects;
        this.camera = camera;
        camera.layers.enableAll();
        camera.layers.toggle(1);

        this.domElement = domElement;

        const pointerLocation = new Vector2();
        const raycaster = new Raycaster();
        const intersections: THREE.Intersection<THREE.Object3D<Event>>[] = [];
        let intersected: THREE.Object3D<Event>| null = null;

        domElement.addEventListener('pointerdown', onMouseDown);

        function onMouseDown(event: any){
            updatePointerLocation(event);

            intersections.length = 0;

            raycaster.setFromCamera( pointerLocation, camera );
			raycaster.intersectObjects( objects, true, intersections );

            if(intersections.length > 0){
                intersected = intersections[0].object;

                if(intersected instanceof Mesh){
                    let labelPosition = intersected.geometry.boundingSphere.center;

                    label.position.set(labelPosition.x, labelPosition.y, labelPosition.z);
                    intersected.add(label);
                    camera.layers.enable(1);
                } else {
                    throw new Error("Intersected object is not a mesh");
                }

                
            } else {
                intersected = null;
                camera.layers.disable(1);
            }

        }


		function updatePointerLocation(event: any) { 
			const rect = domElement.getBoundingClientRect();

			pointerLocation.x = (event.clientX - rect.left) / rect.width * 2 - 1;
			pointerLocation.y = - (event.clientY - rect.top) / rect.height * 2 + 1;

		}


    }
}


export {ContextMenuControls}