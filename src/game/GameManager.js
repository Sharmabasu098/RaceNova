/**
 * ============================================================
 * RaceNova
 * Game Manager
 * File : src/game/GameManager.js
 * ============================================================
 */

import Game from "../core/Game.js";

class GameManager {

    constructor() {

        this.game = null;

    }

    initialize() {

        this.game = new Game();

        this.game.init();

    }

    start() {

        if (!this.game) {

            console.error("Game not initialized.");

            return;

        }

        this.game.start();

    }

    stop() {

        if (this.game) {

            this.game.stop();

        }

    }

    pause() {

        if (this.game) {

            this.game.pause();

        }

    }

    resume() {

        if (this.game) {

            this.game.resume();

        }

    }

    restart() {

        if (this.game) {

            this.game.restart();

        }

    }

    getGame() {

        return this.game;

    }

}

export default GameManager;
