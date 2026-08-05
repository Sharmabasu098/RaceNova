/**
 * ============================================================
 * RaceNova
 * Coin
 * Version : 3.0
 * File : src/coins/Coin.js
 * ============================================================
 */

import * as THREE from "three";
import BaseCollectible from "../collectibles/BaseCollectible.js";

export default class Coin extends BaseCollectible {

    constructor(scene, laneX = 0, startZ = -80) {

        super(scene);

        this.type = "coin";

        const geometry = new THREE.CylinderGeometry(
            0.45,
            0.45,
            0.12,
            32
        );

        const material = new THREE.MeshStandardMaterial({

            color: 0xffd700,
            metalness: 0.9,
            roughness: 0.2

        });

        this.mesh = new THREE.Mesh(
            geometry,
            material
        );

        this.mesh.rotation.z = Math.PI / 2;

        this.mesh.castShadow = true;

        this.mesh.position.set(
            laneX,
            0.8,
            startZ
        );

        this.scene.add(this.mesh);

    }

    update(worldSpeed) {

        if (!this.active) return;

        this.mesh.rotation.y += 0.08;

        super.update(worldSpeed);

    }

    isOutOfWorld() {

        return this.mesh.position.z > 40;

    }

    destroy() {

        if (!this.active) return;

        super.collect();

        this.scene.remove(this.mesh);

        this.mesh.geometry.dispose();
        this.mesh.material.dispose();

    }

}
