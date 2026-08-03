/**
 * ============================================================
 * RaceNova
 * Traffic Car
 * Version : 2.0 (Production)
 * File : src/traffic/TrafficCar.js
 * ============================================================
 */

import * as THREE from "three";
import { WORLD } from "../constants/worldConstants.js";

export default class TrafficCar {

    constructor(scene, laneX = 0, startZ = -80) {

        this.scene = scene;

        // --------------------------------
        // Settings
        // --------------------------------

        this.active = true;

        this.speed =
            WORLD.TRAFFIC_MIN_SPEED +
            Math.random() *
            (WORLD.TRAFFIC_MAX_SPEED -
             WORLD.TRAFFIC_MIN_SPEED);

        // --------------------------------
        // Car Mesh
        // --------------------------------

        const geometry =
            new THREE.BoxGeometry(
                1.2,
                0.6,
                2.4
            );

        const colors = [
            0x0066ff,
            0xffcc00,
            0x00cc66,
            0xffffff,
            0xff5500,
            0xaa00ff
        ];

        const material =
            new THREE.MeshStandardMaterial({

                color:
                    colors[
                        Math.floor(
                            Math.random() *
                            colors.length
                        )
                    ]

            });

        this.mesh =
            new THREE.Mesh(
                geometry,
                material
            );

        this.mesh.castShadow = true;

        this.mesh.position.set(
            laneX,
            0.4,
            startZ
        );

        this.scene.add(this.mesh);

    }

    // ===================================================
    // Update
    // ===================================================

    update(worldSpeed) {

        if (!this.active) return;

        this.mesh.position.z +=
            worldSpeed + this.speed;

    }

    // ===================================================
    // State
    // ===================================================

    isOutOfWorld() {

        return (
            this.mesh.position.z >
            WORLD.TRAFFIC_DESPAWN_DISTANCE
        );

    }

    destroy() {

        if (!this.active) return;

        this.active = false;

        this.scene.remove(this.mesh);

        this.mesh.geometry.dispose();
        this.mesh.material.dispose();

    }

    // ===================================================
    // Getters
    // ===================================================

    getMesh() {

        return this.mesh;

    }

    getLane() {

        return this.mesh.position.x;

    }

    getZ() {

        return this.mesh.position.z;

    }

    isActive() {

        return this.active;

    }

}
