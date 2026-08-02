/**
 * ============================================================
 * RaceNova
 * Traffic Spawner
 * Version : 1.0
 * ============================================================
 */

export default class TrafficSpawner {

    constructor(trafficManager) {

        this.trafficManager = trafficManager;

        this.spawnTimer = 0;

        this.spawnInterval = 2.5;

    }

    update(deltaTime) {

        this.spawnTimer += deltaTime;

        if (this.spawnTimer >= this.spawnInterval) {

            this.spawnTimer = 0;

            const lane =
                Math.floor(Math.random() * 3) - 1;

            this.trafficManager.spawnCar(
                lane * 4,
                -80
            );

        }

    }

}
