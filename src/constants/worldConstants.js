/**
 * ============================================================
 * RaceNova
 * World Constants
 * ============================================================
 */

export const WORLD = {

  // Road
  ROAD_WIDTH: 12,
  ROAD_LENGTH: 1000,
  LANE_COUNT: 3,
  LANE_WIDTH: 4,

  // Environment
  SKY_COLOR: 0x87CEEB,
  FOG_ENABLED: true,
  FOG_NEAR: 100,
  FOG_FAR: 600,

  // Lighting
  SUN_INTENSITY: 2.2,
  AMBIENT_INTENSITY: 1.0,

  // Traffic
  MAX_TRAFFIC: 25,

  // Obstacles
  MAX_OBSTACLES: 15,

  // ============================================================
// AI Traffic
// ============================================================

// Maximum AI Cars
MAX_TRAFFIC: 25,

// Traffic Speed
TRAFFIC_MIN_SPEED: 0.08,
TRAFFIC_MAX_SPEED: 0.25,

// Spawn Settings
TRAFFIC_SPAWN_INTERVAL: 2.0,
TRAFFIC_SPAWN_DISTANCE: -250,

// Remove AI after passing player
TRAFFIC_DESPAWN_DISTANCE: 40,

// Lane Positions
LANE_POSITIONS: [
    -4,
     0,
     4
],

// Safe Distance Between Cars
TRAFFIC_MIN_GAP: 18,

// AI Behaviour
TRAFFIC_RANDOM_LANE: true,
TRAFFIC_AVOID_OVERLAP: true,

  // Collectibles
  MAX_COINS: 100,
  MAX_NITRO_PICKUPS: 10,

  // Weather
  WEATHER: {
    SUNNY: "sunny",
    RAIN: "rain",
    NIGHT: "night",
    FOG: "fog"
  }

};
