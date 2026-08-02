/**
 * ============================================================
 * RaceNova
 * Traffic Manager
 * Version : 1.0
 * ============================================================
 */

import TrafficCar from "./TrafficCar.js";

export default class TrafficManager {

    constructor(scene) {

        this.scene = scene;

        this.cars = [];

    }

    spawnCar(lane, z) {

        const car = new TrafficCar(
            this.scene,
            lane,
            z
        );

        this.cars.push(car);

    }

    update(speed) {

        this.cars.forEach((car) => {

            car.update(speed);

        });

    }

    getCars() {

        return this.cars;

    }

}
