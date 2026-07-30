/**
 * ============================================================
 * RaceNova
 * Checkpoint Manager
 * ============================================================
 */

import * as THREE from "three";

export default class CheckpointManager {

    constructor(scene) {

        this.scene = scene;
        this.checkpoints = [];

    }

    createCheckpoint(x, y, z) {

        const geometry = new THREE.BoxGeometry(
            8,
            5,
            1
        );

        const material = new THREE.MeshStandardMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0.35
        });

        const checkpoint = new THREE.Mesh(
            geometry,
            material
        );

        checkpoint.position.set(x, y, z);

        this.scene.add(checkpoint);

        this.checkpoints.push(checkpoint);

        return checkpoint;

    }

    getCheckpoints() {

        return this.checkpoints;

    }

    clear() {

        this.checkpoints.forEach(checkpoint => {

            this.scene.remove(checkpoint);

        });

        this.checkpoints = [];

    }

}
