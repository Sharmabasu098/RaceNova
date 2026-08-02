/**
 * ============================================================
 * RaceNova
 * Camera Follow
 * Version : 2.0
 * ============================================================
 */

import * as THREE from "three";

export default class CameraFollow {

    constructor(camera, player) {

        this.camera = camera;
        this.player = player;

        this.offset = new THREE.Vector3(
            0,
            6,
            10
        );

        this.lookOffset = new THREE.Vector3(
            0,
            1,
            -8
        );

        this.smoothness = 0.10;

    }

    update() {

        const playerMesh = this.player.getMesh();

        const targetPosition =
            playerMesh.position.clone().add(this.offset);

        this.camera.position.lerp(
            targetPosition,
            this.smoothness
        );

        const lookTarget =
            playerMesh.position.clone().add(this.lookOffset);

        this.camera.lookAt(lookTarget);

    }

}
