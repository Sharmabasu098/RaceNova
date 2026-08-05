/**
 * ============================================================
 * RaceNova
 * Base Collectible
 * Version : 1.0
 * ============================================================
 */

export default class BaseCollectible {

    constructor(scene) {

        this.scene = scene;

        this.mesh = null;

        this.active = true;

    }

    update(worldSpeed) {

        if (!this.active) return;

        if (this.mesh) {

            this.mesh.position.z += worldSpeed;

        }

    }

    collect() {

        this.active = false;

    }

    destroy() {

        if (!this.mesh) return;

        this.scene.remove(this.mesh);

    }

    getMesh() {

        return this.mesh;

    }

    isActive() {

        return this.active;

    }

}
