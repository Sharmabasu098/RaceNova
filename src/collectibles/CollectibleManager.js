/**
 * ============================================================
 * RaceNova
 * Collectible Manager
 * Version : 1.0
 * ============================================================
 */

export default class CollectibleManager {

    constructor(scene) {

        this.scene = scene;

        this.collectibles = [];

    }

    add(collectible) {

        this.collectibles.push(collectible);

    }

    update(worldSpeed) {

        for (let i = this.collectibles.length - 1; i >= 0; i--) {

            const collectible = this.collectibles[i];

            if (!collectible.isActive()) {

                collectible.destroy();

                this.collectibles.splice(i, 1);

                continue;

            }

            collectible.update(worldSpeed);

        }

    }

    clear() {

        for (const collectible of this.collectibles) {

            collectible.destroy();

        }

        this.collectibles.length = 0;

    }

    getCollectibles() {

        return this.collectibles;

    }

}
