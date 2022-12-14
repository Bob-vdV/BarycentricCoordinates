import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3,
} from "three";

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, touch: two-finger move

const _changeEvent = { type: "change" };
const _startEvent = { type: "start" };
const _endEvent = { type: "end" };

class OrbitControls extends EventDispatcher {
	// How far you can dolly in and out ( PerspectiveCamera only )
	minDistance = 0;
	maxDistance = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	minPolarAngle = 0; // radians
	maxPolarAngle = Math.PI; // radians

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	zoomSpeed = 1.0;

	// Set to false to disable rotating
	rotateSpeed = 1.0;

	// Set to false to disable panning
	panSpeed = 1.0;
	screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up

	// Mouse buttons
	mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };

	// Touch fingers
	touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };

	camera: THREE.PerspectiveCamera;
	domElement: any;
	enabled: boolean;
	target: THREE.Vector3;

	target0: THREE.Vector3;
	position0: THREE.Vector3;
	zoom0: number;

	getPolarAngle: () => number;
	getAzimuthalAngle: () => number;
	getDistance: () => number;
	saveState: () => void;
	reset: () => void;
	dispose: () => void;

	update: () => void;

	constructor(camera: THREE.PerspectiveCamera, domElement: any) {
		super();

		this.camera = camera;
		this.domElement = domElement;
		this.domElement.style.touchAction = "none"; // disable touch scroll

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new Vector3();

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.camera.position.clone();
		this.zoom0 = this.camera.zoom;

		//
		// public methods
		//

		this.getPolarAngle = function (): number {
			return spherical.phi;
		};

		this.getAzimuthalAngle = function (): number {
			return spherical.theta;
		};

		this.getDistance = function (): number {
			return this.camera.position.distanceTo(this.target);
		};

		this.saveState = function () {
			scope.target0.copy(scope.target);
			scope.position0.copy(scope.camera.position);
			scope.zoom0 = scope.camera.zoom;
		};

		this.reset = function () {
			scope.target.copy(scope.target0);
			scope.camera.position.copy(scope.position0);
			scope.camera.zoom = scope.zoom0;

			scope.camera.updateProjectionMatrix();
			scope.dispatchEvent(_changeEvent);

			scope.update();

			state = STATE.NONE;
		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = (function () {
			const offset = new Vector3();

			// so camera.up is the orbit axis
			const quat = new Quaternion().setFromUnitVectors(
				camera.up,
				new Vector3(0, 1, 0)
			);
			const quatInverse = quat.clone().invert();

			const lastPosition = new Vector3();
			const lastQuaternion = new Quaternion();

			return function update() {
				const position = scope.camera.position;

				offset.copy(position).sub(scope.target);

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion(quat);

				// angle from z-axis around y-axis
				spherical.setFromVector3(offset);

				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;

				// restrict phi to be between desired limits
				spherical.phi = Math.max(
					scope.minPolarAngle,
					Math.min(scope.maxPolarAngle, spherical.phi)
				);

				spherical.makeSafe();

				spherical.radius *= scale;

				// restrict radius to be between desired limits
				spherical.radius = Math.max(
					scope.minDistance,
					Math.min(scope.maxDistance, spherical.radius)
				);

				// move target to panned location
				scope.target.add(panOffset);

				offset.setFromSpherical(spherical);

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion(quatInverse);

				position.copy(scope.target).add(offset);

				scope.camera.lookAt(scope.target);

				sphericalDelta.set(0, 0, 0);

				panOffset.set(0, 0, 0);

				scale = 1;

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if (
					zoomChanged ||
					lastPosition.distanceToSquared(scope.camera.position) > EPS ||
					8 * (1 - lastQuaternion.dot(scope.camera.quaternion)) > EPS
				) {
					scope.dispatchEvent(_changeEvent);

					lastPosition.copy(scope.camera.position);
					lastQuaternion.copy(scope.camera.quaternion);
					zoomChanged = false;

					return true;
				}

				return false;
			};
		})();

		this.dispose = function () {
			scope.domElement.removeEventListener("contextmenu", onContextMenu);

			scope.domElement.removeEventListener("pointerdown", onPointerDown);
			scope.domElement.removeEventListener("pointercancel", onPointerCancel);
			scope.domElement.removeEventListener("wheel", onMouseWheel);

			scope.domElement.removeEventListener("pointermove", onPointerMove);
			scope.domElement.removeEventListener("pointerup", onPointerUp);
		};

		//
		// internals
		//

		const scope = this;

		const STATE = {
			NONE: -1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6,
		};

		let state = STATE.NONE;

		const EPS = 0.000001;

		// current position in spherical coordinates
		const spherical = new Spherical();
		const sphericalDelta = new Spherical();

		let scale = 1;
		const panOffset = new Vector3();
		let zoomChanged = false;

		const rotateStart = new Vector2();
		const rotateEnd = new Vector2();
		const rotateDelta = new Vector2();

		const panStart = new Vector2();
		const panEnd = new Vector2();
		const panDelta = new Vector2();

		const dollyStart = new Vector2();
		const dollyEnd = new Vector2();
		const dollyDelta = new Vector2();

		const pointers: any[] = [];
		const pointerPositions: any = {};

		function getZoomScale() {
			return Math.pow(0.95, scope.zoomSpeed);
		}

		function rotateLeft(angle: number) {
			sphericalDelta.theta -= angle;
		}

		function rotateUp(angle: number) {
			sphericalDelta.phi -= angle;
		}

		const panLeft = (function () {
			const v = new Vector3();

			return function panLeft(distance: number, objectMatrix: any) {
				v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
				v.multiplyScalar(-distance);

				panOffset.add(v);
			};
		})();

		const panUp = (function () {
			const v = new Vector3();

			return function panUp(distance: number, objectMatrix: any) {
				if (scope.screenSpacePanning === true) {
					v.setFromMatrixColumn(objectMatrix, 1);
				} else {
					v.setFromMatrixColumn(objectMatrix, 0);
					v.crossVectors(scope.camera.up, v);
				}

				v.multiplyScalar(distance);

				panOffset.add(v);
			};
		})();

		// deltaX and deltaY are in pixels; right and down are positive
		const pan = (function () {
			const offset = new Vector3();

			return function pan(deltaX: number, deltaY: number) {
				const element = scope.domElement;

				// perspective
				const position = scope.camera.position;
				offset.copy(position).sub(scope.target);
				let targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan(((scope.camera.fov / 2) * Math.PI) / 180.0);

				// we use only clientHeight here so aspect ratio does not distort speed
				panLeft(
					(2 * deltaX * targetDistance) / element.clientHeight,
					scope.camera.matrix
				);
				panUp(
					(2 * deltaY * targetDistance) / element.clientHeight,
					scope.camera.matrix
				);
			};
		})();

		function dollyOut(dollyScale: number) {
			scale /= dollyScale;
		}

		function dollyIn(dollyScale: number) {
			scale *= dollyScale;
		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate(event: any) {
			rotateStart.set(event.clientX, event.clientY);
		}

		function handleMouseDownDolly(event: any) {
			dollyStart.set(event.clientX, event.clientY);
		}

		function handleMouseDownPan(event: any) {
			panStart.set(event.clientX, event.clientY);
		}

		function handleMouseMoveRotate(event: any) {
			rotateEnd.set(event.clientX, event.clientY);

			rotateDelta
				.subVectors(rotateEnd, rotateStart)
				.multiplyScalar(scope.rotateSpeed);

			const element = scope.domElement;

			rotateLeft((2 * Math.PI * rotateDelta.x) / element.clientHeight); // yes, height

			rotateUp((2 * Math.PI * rotateDelta.y) / element.clientHeight);

			rotateStart.copy(rotateEnd);

			scope.update();
		}

		function handleMouseMoveDolly(event: any) {
			dollyEnd.set(event.clientX, event.clientY);

			dollyDelta.subVectors(dollyEnd, dollyStart);

			if (dollyDelta.y > 0) {
				dollyOut(getZoomScale());
			} else if (dollyDelta.y < 0) {
				dollyIn(getZoomScale());
			}

			dollyStart.copy(dollyEnd);

			scope.update();
		}

		function handleMouseMovePan(event: any) {
			panEnd.set(event.clientX, event.clientY);

			panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);

			pan(panDelta.x, panDelta.y);

			panStart.copy(panEnd);

			scope.update();
		}

		function handleMouseWheel(event: any) {
			if (event.deltaY < 0) {
				dollyIn(getZoomScale());
			} else if (event.deltaY > 0) {
				dollyOut(getZoomScale());
			}

			scope.update();
		}

		function handleTouchStartRotate() {
			if (pointers.length === 1) {
				rotateStart.set(pointers[0].pageX, pointers[0].pageY);
			} else {
				const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
				const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);

				rotateStart.set(x, y);
			}
		}

		function handleTouchStartPan() {
			if (pointers.length === 1) {
				panStart.set(pointers[0].pageX, pointers[0].pageY);
			} else {
				const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
				const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);

				panStart.set(x, y);
			}
		}

		function handleTouchStartDolly() {
			const dx = pointers[0].pageX - pointers[1].pageX;
			const dy = pointers[0].pageY - pointers[1].pageY;

			const distance = Math.sqrt(dx * dx + dy * dy);

			dollyStart.set(0, distance);
		}

		function handleTouchStartDollyPan() {
			handleTouchStartDolly();

			handleTouchStartPan();
		}

		function handleTouchStartDollyRotate() {
			handleTouchStartDolly();

			handleTouchStartRotate();
		}

		function handleTouchMoveRotate(event: any) {
			if (pointers.length == 1) {
				rotateEnd.set(event.pageX, event.pageY);
			} else {
				const position = getSecondPointerPosition(event);

				const x = 0.5 * (event.pageX + position.x);
				const y = 0.5 * (event.pageY + position.y);

				rotateEnd.set(x, y);
			}

			rotateDelta
				.subVectors(rotateEnd, rotateStart)
				.multiplyScalar(scope.rotateSpeed);

			const element = scope.domElement;

			rotateLeft((2 * Math.PI * rotateDelta.x) / element.clientHeight); // yes, height

			rotateUp((2 * Math.PI * rotateDelta.y) / element.clientHeight);

			rotateStart.copy(rotateEnd);
		}

		function handleTouchMovePan(event: any) {
			if (pointers.length === 1) {
				panEnd.set(event.pageX, event.pageY);
			} else {
				const position = getSecondPointerPosition(event);

				const x = 0.5 * (event.pageX + position.x);
				const y = 0.5 * (event.pageY + position.y);

				panEnd.set(x, y);
			}

			panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);

			pan(panDelta.x, panDelta.y);

			panStart.copy(panEnd);
		}

		function handleTouchMoveDolly(event: any) {
			const position = getSecondPointerPosition(event);

			const dx = event.pageX - position.x;
			const dy = event.pageY - position.y;

			const distance = Math.sqrt(dx * dx + dy * dy);

			dollyEnd.set(0, distance);

			dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));

			dollyOut(dollyDelta.y);

			dollyStart.copy(dollyEnd);
		}

		function handleTouchMoveDollyPan(event: any) {
			handleTouchMoveDolly(event);
			handleTouchMovePan(event);
		}

		function handleTouchMoveDollyRotate(event: any) {
			handleTouchMoveDolly(event);
			handleTouchMoveRotate(event);
		}

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onPointerDown(event: any) {
			if (scope.enabled === false) return;

			if (pointers.length === 0) {
				scope.domElement.setPointerCapture(event.pointerId);

				scope.domElement.addEventListener("pointermove", onPointerMove);
				scope.domElement.addEventListener("pointerup", onPointerUp);
			}

			//

			addPointer(event);

			if (event.pointerType === "touch") {
				onTouchStart(event);
			} else {
				onMouseDown(event);
			}
		}

		function onPointerMove(event: any) {
			if (scope.enabled === false) return;

			if (event.pointerType === "touch") {
				onTouchMove(event);
			} else {
				onMouseMove(event);
			}
		}

		function onPointerUp(event: any) {
			removePointer(event);

			if (pointers.length === 0) {
				scope.domElement.releasePointerCapture(event.pointerId);

				scope.domElement.removeEventListener("pointermove", onPointerMove);
				scope.domElement.removeEventListener("pointerup", onPointerUp);
			}

			scope.dispatchEvent(_endEvent);

			state = STATE.NONE;
		}

		function onPointerCancel(event: any) {
			removePointer(event);
		}

		function onMouseDown(event: any) {
			let mouseAction;

			switch (event.button) {
				case 0:
					mouseAction = scope.mouseButtons.LEFT;
					break;

				case 1:
					mouseAction = scope.mouseButtons.MIDDLE;
					break;

				case 2:
					mouseAction = scope.mouseButtons.RIGHT;
					break;

				default:
					mouseAction = -1;
			}

			switch (mouseAction) {
				case MOUSE.DOLLY:
					handleMouseDownDolly(event);
					state = STATE.DOLLY;
					break;

				case MOUSE.ROTATE:
					handleMouseDownRotate(event);
					state = STATE.ROTATE;
					break;

				case MOUSE.PAN:
					handleMouseDownPan(event);
					state = STATE.PAN;
					break;

				default:
					state = STATE.NONE;
			}

			if (state !== STATE.NONE) {
				scope.dispatchEvent(_startEvent);
			}
		}

		function onMouseMove(event: any) {
			switch (state) {
				case STATE.ROTATE:
					handleMouseMoveRotate(event);

					break;

				case STATE.DOLLY:
					handleMouseMoveDolly(event);

					break;

				case STATE.PAN:
					handleMouseMovePan(event);

					break;
			}
		}

		function onMouseWheel(event: any) {
			if (scope.enabled === false || state !== STATE.NONE) return;

			event.preventDefault();

			scope.dispatchEvent(_startEvent);

			handleMouseWheel(event);

			scope.dispatchEvent(_endEvent);
		}

		function onTouchStart(event: any) {
			trackPointer(event);

			switch (pointers.length) {
				case 1:
					switch (scope.touches.ONE) {
						case TOUCH.ROTATE:
							handleTouchStartRotate();

							state = STATE.TOUCH_ROTATE;

							break;

						case TOUCH.PAN:
							handleTouchStartPan();

							state = STATE.TOUCH_PAN;

							break;

						default:
							state = STATE.NONE;
					}

					break;

				case 2:
					switch (scope.touches.TWO) {
						case TOUCH.DOLLY_PAN:
							handleTouchStartDollyPan();

							state = STATE.TOUCH_DOLLY_PAN;

							break;

						case TOUCH.DOLLY_ROTATE:
							handleTouchStartDollyRotate();

							state = STATE.TOUCH_DOLLY_ROTATE;

							break;

						default:
							state = STATE.NONE;
					}

					break;

				default:
					state = STATE.NONE;
			}

			if (state !== STATE.NONE) {
				scope.dispatchEvent(_startEvent);
			}
		}

		function onTouchMove(event: any) {
			trackPointer(event);

			switch (state) {
				case STATE.TOUCH_ROTATE:
					handleTouchMoveRotate(event);

					scope.update();

					break;

				case STATE.TOUCH_PAN:
					handleTouchMovePan(event);

					scope.update();

					break;

				case STATE.TOUCH_DOLLY_PAN:
					handleTouchMoveDollyPan(event);

					scope.update();

					break;

				case STATE.TOUCH_DOLLY_ROTATE:
					handleTouchMoveDollyRotate(event);

					scope.update();

					break;

				default:
					state = STATE.NONE;
			}
		}

		function onContextMenu(event: any) {
			if (scope.enabled === false) return;

			event.preventDefault();
		}

		function addPointer(event: any) {
			pointers.push(event);
		}

		function removePointer(event: any) {
			delete pointerPositions[event.pointerId];

			for (let i = 0; i < pointers.length; i++) {
				if (pointers[i].pointerId == event.pointerId) {
					pointers.splice(i, 1);
					return;
				}
			}
		}

		function trackPointer(event: any) {
			let position = pointerPositions[event.pointerId];

			if (position === undefined) {
				position = new Vector2();
				pointerPositions[event.pointerId] = position;
			}

			position.set(event.pageX, event.pageY);
		}

		function getSecondPointerPosition(event: any) {
			const pointer =
				event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];

			return pointerPositions[pointer.pointerId];
		}

		//

		scope.domElement.addEventListener("contextmenu", onContextMenu);

		scope.domElement.addEventListener("pointerdown", onPointerDown);
		scope.domElement.addEventListener("pointercancel", onPointerCancel);
		scope.domElement.addEventListener("wheel", onMouseWheel, {
			passive: false,
		});

		// force an update at start

		this.update();
	}
}

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse / touch: one-finger move

class MapControls extends OrbitControls {
	constructor(object: THREE.PerspectiveCamera, domElement: any) {
		super(object, domElement);

		this.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

		this.mouseButtons.LEFT = MOUSE.PAN;
		this.mouseButtons.RIGHT = MOUSE.ROTATE;

		this.touches.ONE = TOUCH.PAN;
		this.touches.TWO = TOUCH.DOLLY_ROTATE;
	}
}

export { OrbitControls, MapControls };
