/**
 * ============================================================
 * RaceNova
 * Base Collectible
 * Version : 2.0
 * ============================================================
 */

export default class BaseCollectible {

    constructor(scene) {

        this.scene = scene;

        this.mesh = null;

        this.active = true;

        this.type = "collectible";

    }

    update(worldSpeed) {

        if (!this.active || !this.mesh) return;

        this.mesh.position.z += worldSpeed;

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

    getType() {

        return this.type;

    }

    isActive() {

        return this.active;

    }

}
