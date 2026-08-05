/**
 * ============================================================
 * RaceNova
 * Collision Manager
 * Version : 4.0
 * File : src/physics/CollisionManager.js
 * ============================================================
 */

export default class CollisionManager {

    constructor(
        player,
        trafficManager,
        coinManager
    ) {

        this.player = player;
        this.trafficManager = trafficManager;
        this.coinManager = coinManager;

        this.crashed = false;

        this.carCollisionDistance = 2.0;

    }

    update() {

        if (this.crashed) return;

        const playerMesh = this.player.getMesh();

        // ==========================================
        // Traffic Collision
        // ==========================================

        if (this.trafficManager) {

            const cars = this.trafficManager.getCars();

            for (const traffic of cars) {

                const trafficMesh = traffic.getMesh();

                const distance =
                    playerMesh.position.distanceTo(
                        trafficMesh.position
                    );

                if (distance < this.carCollisionDistance) {

                    this.crashed = true;

                    console.log("💥 Collision Detected!");

                    return;

                }

            }

        }

        // ==========================================
        // Coin Collection (Lane Based)
        // ==========================================

        if (this.coinManager) {

            const coins = this.coinManager.getCoins();

            for (let i = coins.length - 1; i >= 0; i--) {

                const coin = coins[i];

                if (!coin.isActive()) continue;

                const coinMesh = coin.getMesh();

                const sameLane =
                    Math.abs(
                        playerMesh.position.x -
                        coinMesh.position.x
                    ) < 0.6;

                const nearPlayer =
                    Math.abs(
                        playerMesh.position.z -
                        coinMesh.position.z
                    ) < 2.5;

                if (sameLane && nearPlayer) {

                    this.coinManager.collectCoin(i);

                    console.log("🪙 Coin Collected");

                }

            }

        }

    }

    isCrashed() {

        return this.crashed;

    }

    reset() {

        this.crashed = false;

    }

}
