/**
 * ============================================================
 * RaceNova
 * Traffic Manager
 * Version : 1.0
 * ============================================================
 */

import TrafficCar from "./TrafficCar.js";
import TrafficSpawner from "./TrafficSpawner.js";

export default class TrafficManager {

    constructor(scene) {

        this.scene = scene;

        this.cars = [];

        this.spawner = new TrafficSpawner(this);

    }

    spawnCar(lane, z) {

        const car = new TrafficCar(
            this.scene,
            lane,
            z
        );

        this.cars.push(car);

    }

    update(deltaTime, speed) {

        this.spawner.update(deltaTime);

        for (let i = 0; i < this.cars.length; i++) {

            this.cars[i].update(speed);

        }

    }

    getCars() {

        return this.cars;

    }

    clear() {

        for (let i = 0; i < this.cars.length; i++) {

            const mesh = this.cars[i].getMesh();

            if (mesh) {

                this.scene.remove(mesh);

            }

        }

        this.cars = [];

    }

}
