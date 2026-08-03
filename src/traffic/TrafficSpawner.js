/**
 * ============================================================
 * RaceNova
 * Traffic Spawner
 * Version : 2.0 (Production)
 * File : src/traffic/TrafficSpawner.js
 * ============================================================
 */

import { WORLD } from "../constants/worldConstants.js";

export default class TrafficSpawner {

    constructor(trafficManager) {

        this.trafficManager = trafficManager;

        this.spawnTimer = 0;

        this.spawnInterval =
            WORLD.TRAFFIC_SPAWN_INTERVAL;

    }

    update(deltaTime) {

        this.spawnTimer += deltaTime;

        if (this.spawnTimer < this.spawnInterval) {

            return;

        }

        this.spawnTimer = 0;

        this.spawnTraffic();

    }

    // ===================================================
    // Spawn Logic
    // ===================================================

    spawnTraffic() {

        const cars =
            this.trafficManager.getCars();

        const lanes =
            [...WORLD.LANE_POSITIONS];

        // Random Lane

        lanes.sort(() => Math.random() - 0.5);

        for (const lane of lanes) {

            let blocked = false;

            for (const car of cars) {

                if (!car.isActive()) continue;

                if (
                    car.getLane() === lane &&
                    Math.abs(
                        car.getZ() -
                        WORLD.TRAFFIC_SPAWN_DISTANCE
                    ) <
                    WORLD.TRAFFIC_MIN_GAP
                ) {

                    blocked = true;

                    break;

                }

            }

            if (!blocked) {

                this.trafficManager.spawnCar(

                    lane,

                    WORLD.TRAFFIC_SPAWN_DISTANCE

                );

                return;

            }

        }

    }

}
