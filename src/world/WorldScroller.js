/**
 * ============================================================
 * RaceNova
 * World Scroller
 * Version : 1.0
 * ============================================================
 */

export default class WorldScroller {

    constructor(road, markings, barriers) {

        this.road = road;
        this.markings = markings;
        this.barriers = barriers;

        this.scrollSpeed = 0.08;

    }

    update(deltaTime = 1) {

        const move = this.scrollSpeed * deltaTime;

        if (this.road) {
            this.road.position.z += move;
        }

        if (this.markings) {
            this.markings.position.z += move;
        }

        if (this.barriers) {
            this.barriers.position.z += move;
        }

    }

    setSpeed(speed) {

        this.scrollSpeed = speed;

    }

    getSpeed() {

        return this.scrollSpeed;

    }

}
