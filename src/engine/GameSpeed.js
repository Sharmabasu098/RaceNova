/**
 * ============================================================
 * RaceNova
 * Game Speed
 * Version : 1.0
 * ============================================================
 */

export default class GameSpeed {

    constructor(speedController) {

        this.speedController = speedController;

    }

    update(deltaTime) {

        this.speedController.update(deltaTime);

    }

    brake(deltaTime) {

        this.speedController.brake(deltaTime);

    }

    getSpeed() {

        return this.speedController.getSpeed();

    }

    setSpeed(speed) {

        this.speedController.setSpeed(speed);

    }

    reset() {

        this.speedController.reset();

    }

}
