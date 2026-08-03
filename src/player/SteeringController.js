/**
 * ============================================================
 * RaceNova
 * Steering Controller
 * Version : 2.0
 * ============================================================
 */

export default class SteeringController {

    constructor(player) {

        this.player = player;

        this.laneWidth = 4;

        this.currentLane = 0;

        this.targetX = 0;

        this.steeringSpeed = 8;

    }

    update(deltaTime) {

        const mesh = this.player.getMesh();

        mesh.position.x +=
            (this.targetX - mesh.position.x) *
            this.steeringSpeed *
            deltaTime;

    }

    moveLeft() {

        if (this.currentLane > -1) {

            this.currentLane--;

            this.targetX =
                this.currentLane * this.laneWidth;

        }

    }

    moveRight() {

        if (this.currentLane < 1) {

            this.currentLane++;

            this.targetX =
                this.currentLane * this.laneWidth;

        }

    }

}
