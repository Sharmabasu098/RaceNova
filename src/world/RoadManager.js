/**
 * ============================================================
 * RaceNova
 * Road Manager
 * Version : 2.0 (Production)
 * File : src/world/RoadManager.js
 * ============================================================
 */

import RoadPool from "./RoadPool.js";
import { WORLD } from "../constants/worldConstants.js";

export default class RoadManager {

    constructor(roadBuilder, roadMarkings, roadBarrier) {

        this.roadBuilder = roadBuilder;
        this.roadMarkings = roadMarkings;
        this.roadBarrier = roadBarrier;

        this.roadPool = null;

        this.speed = 0;
        this.maxSpeed = 0.60;

    }

    start(scene) {

        if (!this.roadPool) {

            this.roadPool = new RoadPool(scene);

        }

        this.speed = 0.08;

    }

    update(deltaTime) {

        if (!this.roadPool) return;

        const moveSpeed = this.speed * deltaTime * 60;

        const segments = this.roadPool.getSegments();

        for (const segment of segments) {

            segment.update(moveSpeed);

            if (segment.getZ() >= WORLD.ROAD_LENGTH) {

                let farthestZ = 0;

                for (const s of segments) {

                    if (s.getZ() < farthestZ) {

                        farthestZ = s.getZ();

                    }

                }

                segment.setZ(
                    farthestZ - WORLD.ROAD_LENGTH
                );

            }

        }

    }

    setSpeed(speed) {

        this.speed = Math.min(
            speed,
            this.maxSpeed
        );

    }

    getSpeed() {

        return this.speed;

    }

    reset() {

        this.speed = 0.08;

        if (this.roadPool) {

            this.roadPool.reset();

        }

    }

}
