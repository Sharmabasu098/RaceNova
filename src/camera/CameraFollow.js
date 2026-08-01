/**
 * ============================================================
 * RaceNova
 * Camera Follow System
 * Version : 1.0
 * ============================================================
 */

import * as THREE from "three";

export default class CameraFollow {

    constructor(camera, player) {

        this.camera = camera;
        this.player = player;

        this.offset = new THREE.Vector3(
            0,
            8,
            12
        );

        this.lookOffset = new THREE.Vector3(
            0,
            1,
            -8
        );

    }

    update() {

        if (!this.player) return;

        const car = this.player.getMesh();

        this.camera.position.x = car.position.x + this.offset.x;

        this.camera.position.y = car.position.y + this.offset.y;

        this.camera.position.z = car.position.z + this.offset.z;

        this.camera.lookAt(

            car.position.x + this.lookOffset.x,

            car.position.y + this.lookOffset.y,

            car.position.z + this.lookOffset.z

        );

    }

}
