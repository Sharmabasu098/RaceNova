/**
 * ============================================================
 * RaceNova
 * Coin
 * Version : 2.0 (Production)
 * File : src/coins/Coin.js
 * ============================================================
 */

import * as THREE from "three";
import { WORLD } from "../constants/worldConstants.js";

export default class Coin {

    constructor(scene, laneX = 0, startZ = -80) {

        this.scene = scene;

        this.active = true;

        // ==========================
        // Geometry
        // ==========================

        const geometry = new THREE.CylinderGeometry(
            0.45,
            0.45,
            0.12,
            32
        );

        const material =
            new THREE.MeshStandardMaterial({

                color: 0xffd700,
                metalness: 0.9,
                roughness: 0.2

            });

        this.mesh =
            new THREE.Mesh(
                geometry,
                material
            );

        this.mesh.rotation.z =
            Math.PI / 2;

        this.mesh.castShadow = true;

        this.mesh.position.set(
            laneX,
            0.8,
            startZ
        );

        this.scene.add(this.mesh);

    }

    // ==========================
    // Update
    // ==========================

    update(worldSpeed) {

        if (!this.active) return;

        // Rotate Coin

        this.mesh.rotation.y += 0.08;

        // Move Towards Player

        this.mesh.position.z += worldSpeed;

    }

    // ==========================
    // Remove Check
    // ==========================

    isOutOfWorld() {

        return (
            this.mesh.position.z >
            WORLD.TRAFFIC_DESPAWN_DISTANCE
        );

    }

    // ==========================
    // Destroy
    // ==========================

    destroy() {

        if (!this.active) return;

        this.active = false;

        this.scene.remove(this.mesh);

        this.mesh.geometry.dispose();
        this.mesh.material.dispose();

    }

    // ==========================
    // Getters
    // ==========================

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
