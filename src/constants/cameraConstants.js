/**
 * ============================================================
 * RaceNova
 * Camera Constants
 * ============================================================
 */

export const CAMERA = {

  // Perspective Camera
  FOV: 45,
  NEAR: 0.1,
  FAR: 1000,

  // Default Position
  POSITION: {
    x: 0,
    y: 8,
    z: 12
  },

  // Default Look At
  LOOK_AT: {
    x: 0,
    y: 0,
    z: 0
  },

  // Camera Modes
  MODES: {
    FOLLOW: "follow",
    COCKPIT: "cockpit",
    TOP: "top",
    CINEMATIC: "cinematic"
  },

  // Smooth Camera
  SMOOTHING: 0.12,

  // Shake Effect
  SHAKE: {
    ENABLED: true,
    INTENSITY: 0.4
  }

};
