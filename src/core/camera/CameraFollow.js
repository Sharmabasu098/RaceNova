/**
 * ============================================================
 * RaceNova
 * Camera Follow System
 * Version : 2.0
 * ============================================================
 */

import * as THREE from "three";

export default class CameraFollow {

    constructor(camera, player) {

        this.camera = camera;
        this.player = player;

        // Camera car ke piche aur upar
        this.offset = new THREE.Vector3(
            0,
            5,
            8
        );

        // Camera road ki taraf dekhe
        this.lookOffset = new THREE.Vector3(
            0,
            1,
            -15
        );

    }

    update() {

        if (!this.player) return;

        const car = this.player.getMesh();

        const targetPosition = new THREE.Vector3(
            car.position.x + this.offset.x,
            car.position.y + this.offset.y,
            car.position.z + this.offset.z
        );

        // Smooth Camera
        this.camera.position.lerp(targetPosition, 0.12);

        this.camera.lookAt(
            car.position.x + this.lookOffset.x,
            car.position.y + this.lookOffset.y,
            car.position.z + this.lookOffset.z
        );

    }

}
