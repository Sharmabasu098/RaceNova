/**
 * ============================================================
 * RaceNova
 * Player Movement System
 * Version : 3.0
 * ============================================================
 */

export default class PlayerMovement {

    constructor(player, speedController) {

        this.player = player;

        this.speedController = speedController;

    }

    update(deltaTime) {

        if (
            this.speedController &&
            typeof this.speedController.update === "function"
        ) {

            this.speedController.update(deltaTime);

        }

    }

    brake(deltaTime) {

        if (
            this.speedController &&
            typeof this.speedController.brake === "function"
        ) {

            this.speedController.brake(deltaTime);

        }

    }

    getSpeed() {

        if (
            this.speedController &&
            typeof this.speedController.getSpeed === "function"
        ) {

            return this.speedController.getSpeed();

        }

        return 0;

    }

    setSpeed(speed) {

        if (
            this.speedController &&
            typeof this.speedController.setSpeed === "function"
        ) {

            this.speedController.setSpeed(speed);

        }

    }

}
