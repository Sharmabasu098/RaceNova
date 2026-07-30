/**
 * ============================================================
 * RaceNova
 * Lighting Manager
 * ============================================================
 */

import * as THREE from "three";

export default class LightingManager {

    constructor(scene) {

        this.scene = scene;

        this.createAmbientLight();
        this.createDirectionalLight();

    }

    createAmbientLight() {

        this.ambientLight = new THREE.AmbientLight(
            0xffffff,
            1.0
        );

        this.scene.add(this.ambientLight);

    }

    createDirectionalLight() {

        this.sunLight = new THREE.DirectionalLight(
            0xffffff,
            2.2
        );

        this.sunLight.position.set(20, 30, 10);

        this.sunLight.castShadow = true;

        this.scene.add(this.sunLight);

    }

}
