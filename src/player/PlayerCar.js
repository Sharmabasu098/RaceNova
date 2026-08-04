import * as THREE from "three";
import PlayerMovement from "./PlayerMovement.js";
import SteeringController from "./SteeringController.js";

export default class PlayerCar {

    constructor(scene, speedController) {

        this.scene = scene;

        this.speedController = speedController;

        this.movement =
            new PlayerMovement(
                this,
                this.speedController
            );

        this.steering =
            new SteeringController(this);

        const geometry =
            new THREE.BoxGeometry(
                1.2,
                0.6,
                2.4
            );

        const material =
            new THREE.MeshStandardMaterial({

                color: 0xff0000

            });

        this.mesh =
            new THREE.Mesh(
                geometry,
                material
            );

        this.mesh.position.set(
            0,
            0.35,
            8
        );

        this.mesh.castShadow = true;

        this.scene.add(this.mesh);

    }

    update(deltaTime) {

        this.movement.update(deltaTime);

        this.steering.update(deltaTime);

    }

    moveLeft() {

        this.steering.moveLeft();

    }

    moveRight() {

        this.steering.moveRight();

    }

    brake(deltaTime) {

        this.movement.brake(deltaTime);

    }

    getSpeed() {

        return this.movement.getSpeed();

    }

    getMesh() {

        return this.mesh;

    }

}
