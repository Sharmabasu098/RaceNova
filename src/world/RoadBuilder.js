/**
 * ============================================================
 * RaceNova
 * Road Builder
 * ============================================================
 */

import * as THREE from "three";
import Road from "./Road.js";

export default class RoadBuilder {

    constructor(scene) {

        this.scene = scene;
        this.road = null;

    }

    build() {

        this.road = new Road();

        this.scene.add(
            this.road.getMesh()
        );

    }

    getRoad() {

        return this.road;

    }

    remove() {

        if (!this.road) return;

        this.scene.remove(
            this.road.getMesh()
        );

        this.road = null;

    }

    rebuild() {

        this.remove();
        this.build();

    }

}
