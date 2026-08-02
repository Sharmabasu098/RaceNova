/**
 * ============================================================
 * RaceNova
 * Road Manager
 * Version : 1.0
 * ============================================================
 */
import RoadPool from "./RoadPool.js";
import { WORLD } from "../constants/worldConstants.js";

export default class RoadManager {

    constructor(roadBuilder, roadMarkings, roadBarrier) {

        this.roadBuilder = roadBuilder;
        this.roadMarkings = roadMarkings;
        this.roadBarrier = roadBarrier;

        this.speed = 0.0;
        this.maxSpeed = 0.35;
        this.roadPool = null;

    }

    start(scene) {

    this.speed = 0.08;

    if (!this.roadPool) {

        this.roadPool = new RoadPool(scene);

    }

    }

    getSpeed() {

        return this.speed;

    }

    setSpeed(speed) {

    this.speed = Math.min(speed, this.maxSpeed);

}

update(deltaTime) {

    this.speed = Math.min(this.speed, this.maxSpeed);

    if (!this.roadPool) return;

    const segments = this.roadPool.getSegments();

    for (const segment of segments) {

        segment.update(this.speed);

        if (segment.getZ() > WORLD.ROAD_LENGTH) {

            let farthest = 0;

            for (const s of segments) {

                if (s.getZ() < farthest) {

                    farthest = s.getZ();

                }

            }

            segment.setZ(
                farthest - WORLD.ROAD_LENGTH
            );

        }

    }

}

}
