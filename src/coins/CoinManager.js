/**
 * ============================================================
 * RaceNova
 * Coin Manager
 * Version : 2.0 (Production)
 * File : src/coins/CoinManager.js
 * ============================================================
 */

import Coin from "./Coin.js";
import CoinSpawner from "./CoinSpawner.js";
import { WORLD } from "../constants/worldConstants.js";

export default class CoinManager {

    constructor(scene) {

        this.scene = scene;

        this.coins = [];

        this.totalCollected = 0;

        this.spawner = new CoinSpawner(this);

    }

    // ==========================================
    // Spawn Coin
    // ==========================================

    spawnCoin(lane, z) {

        if (this.coins.length >= WORLD.MAX_COINS) {

            return;

        }

        const coin = new Coin(
            this.scene,
            lane,
            z
        );

        this.coins.push(coin);

    }

    // ==========================================
    // Update
    // ==========================================

    update(deltaTime, worldSpeed) {

        this.spawner.update(deltaTime);

        for (let i = this.coins.length - 1; i >= 0; i--) {

            const coin = this.coins[i];

            if (!coin.isActive()) {

                this.coins.splice(i, 1);

                continue;

            }

            coin.update(worldSpeed);

            if (coin.isOutOfWorld()) {

                coin.destroy();

                this.coins.splice(i, 1);

            }

        }

    }

    // ==========================================
    // Collect Coin
    // ==========================================

    collectCoin(index) {

        if (index < 0 || index >= this.coins.length) {

            return;

        }

        this.coins[index].destroy();

        this.coins.splice(index, 1);

        this.totalCollected++;

    }

    // ==========================================
    // Getters
    // ==========================================

    getCoins() {

        return this.coins;

    }

    getCollectedCoins() {

        return this.totalCollected;

    }

    // ==========================================
    // Reset
    // ==========================================

    reset() {

        for (const coin of this.coins) {

            coin.destroy();

        }

        this.coins = [];

        this.totalCollected = 0;

    }

}
