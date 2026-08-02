/**
 * ============================================================
 * RaceNova
 * Player Movement System
 * Version : 2.0
 * ============================================================
 */

export default class PlayerMovement {

    constructor(player) {

        this.player = player;

        this.speed = 0;

        this.acceleration = 0.08;

        this.maxSpeed = 0.60;

        this.brakeForce = 0.15;

    }

    update(deltaTime) {

        if (this.speed < this.maxSpeed) {

            this.speed += this.acceleration * deltaTime;

        }

    }

    brake(deltaTime) {

        this.speed -= this.brakeForce * deltaTime;

        if (this.speed < 0) {

            this.speed = 0;

        }

    }

    getSpeed() {

        return this.speed;

    }

}
