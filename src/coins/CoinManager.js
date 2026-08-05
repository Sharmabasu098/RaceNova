/**
 * ============================================================
 * RaceNova
 * Coin Manager
 * Version : 3.0
 * File : src/coins/CoinManager.js
 * ============================================================
 */

import Coin from "./Coin.js";
import CoinSpawner from "./CoinSpawner.js";
import CollectibleManager from "../collectibles/CollectibleManager.js";
import { WORLD } from "../constants/worldConstants.js";

export default class CoinManager {

    constructor(scene) {

        this.scene = scene;

        this.collectibleManager =
            new CollectibleManager(scene);

        this.spawner =
            new CoinSpawner(this);

        this.totalCollected = 0;

    }

    // ==========================================
    // Spawn Coin
    // ==========================================

    spawnCoin(lane, z) {

        if (
            this.collectibleManager
                .getCollectibles().length >=
            WORLD.MAX_COINS
        ) {

            return;

        }

        const coin = new Coin(
            this.scene,
            lane,
            z
        );

        this.collectibleManager.add(coin);

    }

    // ==========================================
    // Update
    // ==========================================

    update(deltaTime, worldSpeed) {

        this.spawner.update(deltaTime);

        this.collectibleManager.update(
            worldSpeed
        );

    }

    // ==========================================
    // Collect
    // ==========================================

    collectCoin(coin) {

        if (!coin) return;

        this.collectibleManager.remove(coin);

        this.totalCollected++;

    }

    // ==========================================
    // Getters
    // ==========================================

    getCoins() {

        return this.collectibleManager.getCollectibles();

    }

    getCollectedCoins() {

        return this.totalCollected;

    }

    // ==========================================
    // Reset
    // ==========================================

    reset() {

        this.collectibleManager.clear();

        this.totalCollected = 0;

    }

}
