/**
 * ============================================================
 * RaceNova
 * Road Pool
 * ============================================================
 */

import RoadSegment from "./RoadSegment.js";
import { WORLD } from "../constants/worldConstants.js";

export default class RoadPool {

    constructor(scene, count = 3) {

        this.scene = scene;
        this.segments = [];

        for (let i = 0; i < count; i++) {

            const segment = new RoadSegment(
                -i * WORLD.ROAD_LENGTH
            );

            this.scene.add(segment.getMesh());

            this.segments.push(segment);

        }

    }

    getSegments() {

        return this.segments;

    }

}
