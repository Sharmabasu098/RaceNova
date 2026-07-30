/**
 * ============================================================
 * RaceNova
 * Road Markings
 * ============================================================
 */

import * as THREE from "three";
import { WORLD } from "../constants/worldConstants.js";

export default class RoadMarkings {

    constructor() {

        this.group = new THREE.Group();

        this.createMarkings();

    }

    createMarkings() {

        const laneLines = WORLD.LANE_COUNT - 1;

        for (let i = 1; i <= laneLines; i++) {

            const x =
                -WORLD.ROAD_WIDTH / 2 +
                i * WORLD.LANE_WIDTH;

            const geometry = new THREE.PlaneGeometry(
                0.15,
                WORLD.ROAD_LENGTH
            );

            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff
            });

            const line = new THREE.Mesh(
                geometry,
                material
            );

            line.rotation.x = -Math.PI / 2;

            line.position.set(
                x,
                0.01,
                0
            );

            this.group.add(line);

        }

    }

    getMesh() {

        return this.group;

    }

}
