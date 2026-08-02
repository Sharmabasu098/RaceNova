/**
 * ============================================================
 * RaceNova
 * Road Segment
 * ============================================================
 */

import * as THREE from "three";
import { WORLD } from "../constants/worldConstants.js";

export default class RoadSegment {

    constructor(z = 0) {

        this.mesh = this.createSegment();

        this.mesh.position.z = z;

    }

    createSegment() {

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

    update(speed) {

        this.mesh.position.z += speed;

    }

    setZ(z) {

        this.mesh.position.z = z;

    }

    getZ() {

        return this.mesh.position.z;

    }

    getMesh() {

        return this.mesh;

    }

}
