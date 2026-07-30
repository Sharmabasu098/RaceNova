/**
 * ============================================================
 * RaceNova
 * Camera Manager
 * ============================================================
 */

import * as THREE from "three";
import { CAMERA } from "../../constants/cameraConstants.js";

export default class CameraManager {

    constructor() {

        this.camera = new THREE.PerspectiveCamera(
            CAMERA.FOV,
            window.innerWidth / window.innerHeight,
            CAMERA.NEAR,
            CAMERA.FAR
        );

        this.camera.position.set(
            CAMERA.POSITION.x,
            CAMERA.POSITION.y,
            CAMERA.POSITION.z
        );

        this.camera.lookAt(
            CAMERA.LOOK_AT.x,
            CAMERA.LOOK_AT.y,
            CAMERA.LOOK_AT.z
        );

    }

    getCamera() {
        return this.camera;
    }

    updateAspect() {

        this.camera.aspect =
            window.innerWidth / window.innerHeight;

        this.camera.updateProjectionMatrix();

    }

}
