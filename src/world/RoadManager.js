/**
 * ============================================================
 * RaceNova
 * Road Manager
 * Version : 1.0
 * ============================================================
 */

export default class RoadManager {

    constructor(roadBuilder, roadMarkings, roadBarrier) {

        this.roadBuilder = roadBuilder;
        this.roadMarkings = roadMarkings;
        this.roadBarrier = roadBarrier;

        this.speed = 0.0;
        this.maxSpeed = 0.35;

    }

    start() {

        this.speed = 0.08;

    }

    stop() {

        this.speed = 0;

    }

    update(deltaTime) {

        // अगले Version में
        // Endless Road
        // Speed
        // Nitro
        // Traffic
        // सब यहीं आएगा

    }

    getSpeed() {

        return this.speed;

    }

    setSpeed(speed) {

        this.speed = Math.min(speed, this.maxSpeed);

    }

}
