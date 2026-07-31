/**
 * ============================================================
 * RaceNova
 * Main Entry Point
 * ============================================================
 */

import GameManager from "./game/GameManager.js";

const gameManager = new GameManager();

gameManager.initialize();

gameManager.start();
