/**
 * ============================================================
 * RaceNova
 * Engine Speed Controller
 * Version : 2.0
 * ============================================================
 */

export default class SpeedController {

    constructor() {

        this.currentSpeed = 0;

        this.maxSpeed = 0.60;

        this.acceleration = 0.08;

        this.brakePower = 0.15;

    }

    update(deltaTime) {

        if (this.currentSpeed < this.maxSpeed) {

            this.currentSpeed +=
                this.acceleration * deltaTime;

            if (this.currentSpeed > this.maxSpeed) {

                this.currentSpeed = this.maxSpeed;

            }

        }

    }

    brake(deltaTime) {

        this.currentSpeed -=
            this.brakePower * deltaTime;

        if (this.currentSpeed < 0) {

            this.currentSpeed = 0;

        }

    }

    reset() {

        this.currentSpeed = 0;

    }

    getSpeed() {

        return this.currentSpeed;

    }

    setSpeed(speed) {

        this.currentSpeed =
            Math.min(speed, this.maxSpeed);

    }

}
