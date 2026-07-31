/**
 * ============================================================
 * RaceNova
 * Game Engine
 * File : src/core/Game.js
 * Version : 1.0
 * ============================================================
 */

import SceneManager from "./scene/SceneManager.js";
import CameraManager from "./camera/CameraManager.js";
import RendererManager from "./renderer/RendererManager.js";
import LightingManager from "./lighting/LightingManager.js";

import RoadBuilder from "../world/RoadBuilder.js";
import RoadBarrier from "../world/RoadBarrier.js";
import RoadMarkings from "../world/RoadMarkings.js";

class Game {

    constructor() {

        // ==========================
        // Core Managers
        // ==========================

        this.sceneManager = null;
        this.cameraManager = null;
        this.rendererManager = null;
        this.lightingManager = null;

        // ==========================
        // Three.js References
        // ==========================

        this.scene = null;
        this.camera = null;
        this.renderer = null;

        // ==========================
        // World
        // ==========================

        this.roadBuilder = null;
        this.roadBarrier = null;
        this.roadMarkings = null;

        // ==========================
        // Future Modules
        // ==========================

        this.player = null;
        this.aiManager = null;
        this.vehicleManager = null;
        this.coinManager = null;
        this.nitroManager = null;
        this.environmentManager = null;
        this.audioManager = null;
        this.uiManager = null;
        this.physicsManager = null;

        // ==========================
        // Game State
        // ==========================

        this.running = false;
        this.paused = false;

        this.lastTime = 0;
        this.deltaTime = 0;
        this.frameId = null;

    }

    /**
     * ==========================
     * Initialize Game
     * ==========================
     */

    init() {

        this.createManagers();

        this.createWorld();

        this.registerEvents();

        console.log("==================================");
        console.log("RaceNova Engine Started");
        console.log("==================================");

    }

    /**
     * ==========================
     * Create Managers
     * ==========================
     */

    createManagers() {

        this.sceneManager = new SceneManager();

        this.cameraManager = new CameraManager();

        this.rendererManager = new RendererManager();

        this.scene = this.sceneManager.getScene();

        this.camera = this.cameraManager.getCamera();

        this.renderer = this.rendererManager.getRenderer();

        this.rendererManager.appendTo(document.body);

        this.lightingManager =
            new LightingManager(this.scene);

    }

    /**
     * ==========================
     * Create World
     * ==========================
     */

    createWorld() {

        this.roadBuilder =
            new RoadBuilder(this.scene);

        this.roadBuilder.build();

        this.roadMarkings =
            new RoadMarkings();

        this.scene.add(
            this.roadMarkings.getMesh()
        );

        this.roadBarrier =
            new RoadBarrier();

        this.scene.add(
            this.roadBarrier.getMesh()
        );

        console.log("World Loaded");

    }
