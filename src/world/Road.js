/**
 * ============================================================
 * RaceNova
 * Road
 * ============================================================
 */

import * as THREE from "three";
import { WORLD } from "../constants/worldConstants.js";

export default class Road {

    constructor() {

        this.mesh = this.createRoad();

    }

    createRoad() {

        const geometry = new THREE.PlaneGeometry(
            WORLD.ROAD_WIDTH,
            WORLD.ROAD_LENGTH
        );

        const material = new THREE.MeshStandardMaterial({
            color: 0x2d2d2d
        });

        const road = new THREE.Mesh(
            geometry,
            material
        );

        road.rotation.x = -Math.PI / 2;
        road.receiveShadow = true;

        return road;

    }

    getMesh() {

        return this.mesh;

    }

}
