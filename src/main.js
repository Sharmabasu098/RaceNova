/**
 * ============================================================
 * RaceNova
 * Main Entry Point
 * Version : 1.0
 * ============================================================
 */

import SceneManager from "./core/scene/SceneManager.js";
import CameraManager from "./core/camera/CameraManager.js";
import RendererManager from "./core/renderer/RendererManager.js";
import LightingManager from "./core/lighting/LightingManager.js";

import RoadBuilder from "./world/RoadBuilder.js";
import RoadMarkings from "./world/RoadMarkings.js";
import RoadBarrier from "./world/RoadBarrier.js";

class RaceNovaEngine {

    constructor() {

        // Core Managers
        this.sceneManager = null;
        this.cameraManager = null;
        this.rendererManager = null;
        this.lightingManager = null;

        // World
        this.roadBuilder = null;
        this.roadMarkings = null;
        this.roadBarrier = null;

        // References
        this.scene = null;
        this.camera = null;
        this.renderer = null;

        // Game Loop
        this.animationId = null;
        this.lastFrameTime = 0;
        this.deltaTime = 0;

        // State
        this.isRunning = false;
        this.debugMode = false;

    }

    initialize() {

        this.createManagers();
        this.createWorld();
        this.registerEvents();

    }

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

    createWorld() {

        // Road
        this.roadBuilder = new RoadBuilder(this.scene);
        this.roadBuilder.build();

        // Lane Markings
        this.roadMarkings = new RoadMarkings();
        this.scene.add(
            this.roadMarkings.getMesh()
        );

        // Road Barriers
        this.roadBarrier = new RoadBarrier();
        this.scene.add(
            this.roadBarrier.getMesh()
        );

        // Future Modules
        this.player = null;
        this.trafficManager = null;
        this.coinManager = null;
        this.nitroManager = null;
        this.environmentManager = null;
        this.audioManager = null;
        this.uiManager = null;

        console.log("✅ RaceNova World Initialized");

    }

    registerEvents() {

        window.addEventListener("resize", () => {

            this.cameraManager.updateAspect();
            this.rendererManager.resize();

        });

    }

}

export default RaceNovaEngine;
