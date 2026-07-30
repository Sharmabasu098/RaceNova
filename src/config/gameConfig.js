/**
 * ============================================================
 * RaceNova
 * Master Game Configuration
 * Version: 0.1.0
 * Author: Basudev Sharma & ChatGPT
 * ============================================================
 */

export const GAME_CONFIG = {

  // Game Information
  title: "RaceNova",
  version: "0.1.0",
  build: "Prototype",

  // Display
  width: 1280,
  height: 720,

  // Performance
  targetFPS: 60,
  antialias: true,

  // Camera
  cameraFov: 45,
  cameraNear: 0.1,
  cameraFar: 1000,

  // Physics
  gravity: 9.81,

  // Gameplay
  startingCoins: 1000,
  startingFuel: 100,

  // Audio
  masterVolume: 1.0,
  musicVolume: 0.8,
  effectsVolume: 1.0,

  // Graphics
  shadows: true,
  bloom: false,

  // Future Support
  piNetwork: false,
  multiplayer: false

};
