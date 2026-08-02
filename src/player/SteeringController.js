/**
 * ============================================================
 * RaceNova
 * Steering Controller
 * Version : 1.0
 * ============================================================
 */

export default class SteeringController {

    constructor(player) {

        this.player = player;

        this.moveSpeed = 8;

        this.minX = -4;

        this.maxX = 4;

    }

    moveLeft(deltaTime) {

        const mesh = this.player.getMesh();

        mesh.position.x -= this.moveSpeed * deltaTime;

        if (mesh.position.x < this.minX) {

            mesh.position.x = this.minX;

        }

    }

    moveRight(deltaTime) {

        const mesh = this.player.getMesh();

        mesh.position.x += this.moveSpeed * deltaTime;

        if (mesh.position.x > this.maxX) {

            mesh.position.x = this.maxX;

        }

    }

}
