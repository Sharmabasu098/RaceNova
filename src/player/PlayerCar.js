import * as THREE from "three";
import PlayerMovement from "./PlayerMovement.js";

export default class PlayerCar {

    constructor(scene) {

        this.scene = scene;

        this.movement = new PlayerMovement(this);

        const geometry = new THREE.BoxGeometry(1.2, 0.6, 2.4);

        const material = new THREE.MeshStandardMaterial({
            color: 0xff0000
        });

        this.mesh = new THREE.Mesh(geometry, material);

        this.mesh.position.set(0, 0.4, 5);

        this.mesh.castShadow = true;

        this.scene.add(this.mesh);

    }

    update(deltaTime) {

        this.movement.update(deltaTime);

    }

    getMesh() {

        return this.mesh;

    }

}
