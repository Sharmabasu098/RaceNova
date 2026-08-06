/**
 * ============================================================
 * RaceNova
 * Camera Follow System
 * Version : 3.0 (Production)
 * ============================================================
 */

import * as THREE from "three";

export default class CameraFollow {

    constructor(camera, player) {

        this.camera = camera;
        this.player = player;

        // Camera Position
        this.followOffset = new THREE.Vector3(
            0,
            6.2,
            10.5
        );

        // Camera Looking Point
        this.lookOffset = new THREE.Vector3(
            0,
            1.3,
            -20
        );

        // Smoothness
        this.followSmooth = 0.08;

        this.lookTarget =
            new THREE.Vector3();

    }

    update() {

        if (!this.player) return;

        const car =
            this.player.getMesh();

        // Target Position

        const target =
            new THREE.Vector3(
                car.position.x,
                car.position.y,
                car.position.z
            );

        target.add(this.followOffset);

        // Smooth Follow

        this.camera.position.lerp(
            target,
            this.followSmooth
        );

        // Look Ahead

        this.lookTarget.set(

            car.position.x,

            car.position.y +
            this.lookOffset.y,

            car.position.z +
            this.lookOffset.z

        );

        this.camera.lookAt(
            this.lookTarget
        );

    }

}
