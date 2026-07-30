/**
 * ============================================================
 * RaceNova
 * Road Barrier
 * ============================================================
 */

import * as THREE from "three";
import { WORLD } from "../constants/worldConstants.js";

export default class RoadBarrier {

    constructor() {

        this.group = new THREE.Group();

        this.createBarriers();

    }

    createBarriers() {

        const geometry = new THREE.BoxGeometry(
            0.5,
            1,
            WORLD.ROAD_LENGTH
        );

        const material = new THREE.MeshStandardMaterial({
            color: 0xff4444
        });

        // Left Barrier
        const leftBarrier = new THREE.Mesh(
            geometry,
            material
        );

        leftBarrier.position.set(
            -WORLD.ROAD_WIDTH / 2 - 0.5,
            0.5,
            0
        );

        leftBarrier.castShadow = true;
        leftBarrier.receiveShadow = true;

        // Right Barrier
        const rightBarrier = new THREE.Mesh(
            geometry,
            material
        );

        rightBarrier.position.set(
            WORLD.ROAD_WIDTH / 2 + 0.5,
            0.5,
            0
        );

        rightBarrier.castShadow = true;
        rightBarrier.receiveShadow = true;

        this.group.add(leftBarrier);
        this.group.add(rightBarrier);

    }

    getMesh() {

        return this.group;

    }

}
