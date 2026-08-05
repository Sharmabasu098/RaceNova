/**
 * ============================================================
 * RaceNova
 * Traffic Manager
 * Version : 2.0 (Production)
 * File : src/traffic/TrafficManager.js
 * ============================================================
 */

import TrafficCar from "./TrafficCar.js";
import TrafficSpawner from "./TrafficSpawner.js";
import { WORLD } from "../constants/worldConstants.js";

export default class TrafficManager {

    constructor(scene) {

        this.scene = scene;

        this.cars = [];

        this.spawner = new TrafficSpawner(this);

    }

    // ===================================================
    // Spawn
    // ===================================================

    spawnCar(lane, z) {

        if (this.cars.length >= WORLD.MAX_TRAFFIC) {

            return;

        }

        const car = new TrafficCar(

            this.scene,
            lane,
            z

        );

        this.cars.push(car);

        alert.log("Spawn Car");

    }

    // ===================================================
    // Update
    // ===================================================

    update(deltaTime, worldSpeed) {

        alert.log("Cars:", this.cars.length);

        this.spawner.update(deltaTime);

        for (let i = this.cars.length - 1; i >= 0; i--) {

            const car = this.cars[i];

            if (!car.isActive()) {

                this.cars.splice(i, 1);

                continue;

            }

            car.update(worldSpeed);

            if (car.isOutOfWorld()) {

                car.destroy();

                this.cars.splice(i, 1);

            }

        }

    }

    // ===================================================
    // Getters
    // ===================================================

    getCars() {

        return this.cars;

    }

    getCarCount() {

        return this.cars.length;

    }

    // ===================================================
    // Clear
    // ===================================================

    clear() {

        for (const car of this.cars) {

            alert.log("Removing Car");

            car.destroy();

        }

        this.cars.length = 0;

    }

}
