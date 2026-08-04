/**
 * ============================================================
 * RaceNova
 * Steering Controller
 * Version : 3.0
 * ============================================================
 */

import { LANE_ORDER } from "../constants/laneConstants.js";

export default class SteeringController {

    constructor(player) {

        this.player = player;

        // 0 = Left, 1 = Center, 2 = Right
        this.currentLaneIndex = 1;

        this.targetX = LANE_ORDER[this.currentLaneIndex];

        this.steeringSpeed = 10;

    }

    update(deltaTime) {

        const mesh = this.player.getMesh();

        mesh.position.x +=
            (this.targetX - mesh.position.x) *
            this.steeringSpeed *
            deltaTime;

    }

    moveLeft() {

        if (this.currentLaneIndex > 0) {

            this.currentLaneIndex--;

            this.targetX =
                LANE_ORDER[this.currentLaneIndex];

        }

    }

    moveRight() {

        if (this.currentLaneIndex < LANE_ORDER.length - 1) {

            this.currentLaneIndex++;

            this.targetX =
                LANE_ORDER[this.currentLaneIndex];

        }

    }

}
