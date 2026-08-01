export default class WorldScroller {

    constructor(road, markings, barriers) {

        this.road = road;
        this.markings = markings;
        this.barriers = barriers;

        this.speed = 0.20;

    }

    update() {

        if (this.road) {
            this.road.position.z += this.speed;
        }

        if (this.markings) {
            this.markings.position.z += this.speed;
        }

        if (this.barriers) {
            this.barriers.position.z += this.speed;
        }

        // Endless Effect
        if (this.road.position.z > 20) {

            this.road.position.z = 0;

            this.markings.position.z = 0;

            this.barriers.position.z = 0;

        }

    }

}
