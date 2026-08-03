/**
 * ============================================================
 * RaceNova
 * Coin Spawner
 * Version : 2.0 (Production)
 * File : src/coins/CoinSpawner.js
 * ============================================================
 */

import { WORLD } from "../constants/worldConstants.js";

export default class CoinSpawner {

    constructor(coinManager) {

        this.coinManager = coinManager;

        this.spawnTimer = 0;

        this.spawnInterval = 1.8;

    }

    update(deltaTime) {

        this.spawnTimer += deltaTime;

        if (this.spawnTimer < this.spawnInterval) {

            return;

        }

        this.spawnTimer = 0;

        this.spawnCoin();

    }

    // ===================================================
    // Spawn Logic
    // ===================================================

    spawnCoin() {

        const coins = this.coinManager.getCoins();

        const lanes = [...WORLD.LANE_POSITIONS];

        // Random Lane

        lanes.sort(() => Math.random() - 0.5);

        for (const lane of lanes) {

            let blocked = false;

            for (const coin of coins) {

                if (!coin.isActive()) continue;

                if (
                    coin.getLane() === lane &&
                    Math.abs(
                        coin.getZ() -
                        WORLD.TRAFFIC_SPAWN_DISTANCE
                    ) < 12
                ) {

                    blocked = true;

                    break;

                }

            }

            if (!blocked) {

                this.coinManager.spawnCoin(
                    lane,
                    WORLD.TRAFFIC_SPAWN_DISTANCE
                );

                return;

            }

        }

    }

}
