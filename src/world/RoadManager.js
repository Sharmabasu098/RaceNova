/**
 * ============================================================
 * RaceNova
 * Road Manager
 * Version : 1.0
 * ============================================================
 */
import RoadPool from "./RoadPool.js";

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

}
