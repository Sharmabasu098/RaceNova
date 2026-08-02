/**
 * ============================================================
 * RaceNova
 * Traffic Car
 * Version : 1.0
 * ============================================================
 */

import * as THREE from "three";

export default class TrafficCar {

    constructor(scene, lane = 0, z = -50) {

        this.scene = scene;

        const geometry = new THREE.BoxGeometry(1.2, 0.6, 2.4);

        const material = new THREE.MeshStandardMaterial({
            color: 0x0066ff
        });

        this.mesh = new THREE.Mesh(
            geometry,
            material
        );

        this.mesh.castShadow = true;

        this.mesh.position.set(
            lane,
            0.4,
            z
        );

        this.scene.add(this.mesh);

    }

    update(speed) {

        this.mesh.position.z += speed;

    }

    getMesh() {

        return this.mesh;

    }

}
