/**
 * ============================================================
 * RaceNova
 * Lane System
 * ============================================================
 */

import { WORLD } from "../constants/worldConstants.js";

export default class LaneSystem {

    constructor() {

        this.laneCount = WORLD.LANE_COUNT;
        this.laneWidth = WORLD.LANE_WIDTH;

        this.lanes = [];

        this.createLanes();

    }

    createLanes() {

        this.lanes = [];

        const totalWidth = this.laneCount * this.laneWidth;
        const leftEdge = -totalWidth / 2 + this.laneWidth / 2;

        for (let i = 0; i < this.laneCount; i++) {

            this.lanes.push(
                leftEdge + (i * this.laneWidth)
            );

        }

    }

    getLanePosition(index) {

        if (index < 0) index = 0;

        if (index >= this.lanes.length)
            index = this.lanes.length - 1;

        return this.lanes[index];

    }

    getLaneCount() {

        return this.laneCount;

    }

    getAllLanes() {

        return this.lanes;

    }

}
