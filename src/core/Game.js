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
import PlayerCar from "../player/PlayerCar.js";
import TouchControls from "../controls/TouchControls.js";
import RoadManager from "../world/RoadManager.js";
import TrafficManager from "../traffic/TrafficManager.js";
import CollisionManager from "../physics/CollisionManager.js";

class Game {

    constructor() {

        // ==========================
        // Core Managers
        // ==========================

        this.sceneManager = null;
        this.cameraManager = null;
        this.rendererManager = null;
        this.lightingManager = null;
        this.worldScroller = null;

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
        this.roadManager = null;

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
        this.trafficManager = null;
        this.collisionManager = null;

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

    this.player =
        new PlayerCar(this.scene);

    this.touchControls =
        new TouchControls(this.player);

    this.trafficManager =
    new TrafficManager(this.scene);

this.trafficManager.spawnCar(
    0,
    -30
);

    this.collisionManager =
    new CollisionManager(
        this.player,
        this.trafficManager
    );

    this.roadManager =
    new RoadManager(
        this.roadBuilder,
        this.roadMarkings,
        this.roadBarrier
    );

this.roadManager.start(this.scene);

    console.log("World Loaded");

}

        /**
     * ==========================
     * Register Events
     * ==========================
     */

    registerEvents() {

        window.addEventListener(
            "resize",
            () => this.onResize()
        );

    }

    /**
     * ==========================
     * Start Game
     * ==========================
     */

    start() {

        if (this.running) return;

        this.running = true;
        this.lastTime = performance.now();

        this.loop(this.lastTime);

        console.log("Game Started");

    }

    /**
     * ==========================
     * Main Game Loop
     * ==========================
     */

    loop(currentTime) {

        if (!this.running) return;

        this.deltaTime =
            (currentTime - this.lastTime) / 1000;

        this.lastTime = currentTime;

        if (!this.paused) {

            this.update(this.deltaTime);

            this.render();

        }

        this.frameId =
            requestAnimationFrame(
                (time) => this.loop(time)
            );

    }

    /**
     * ==========================
     * Update
     * ==========================
     */

    update(deltaTime) {

    if (
        this.roadManager &&
        typeof this.roadManager.update === "function"
    ) {

        this.roadManager.update(deltaTime);

    }

    if (
        this.roadBuilder &&
        typeof this.roadBuilder.update === "function"
    ) {

        this.roadBuilder.update(deltaTime);

    }

    if (
        this.player &&
        typeof this.player.update === "function"
    ) {

        this.player.update(deltaTime);

    }

    if (
        this.trafficManager &&
        typeof this.trafficManager.update === "function"
    ) {

        this.trafficManager.update(
            deltaTime,
            this.roadManager.getSpeed()
        );

    }

    if (
        this.touchControls &&
        typeof this.touchControls.update === "function"
    ) {

        this.touchControls.update(deltaTime);

    }

    if (
        this.collisionManager &&
        typeof this.collisionManager.update === "function"
    ) {

        this.collisionManager.update();

        if (this.collisionManager.isCrashed()) {

            console.log("💥 Collision Detected!");
            console.log("🏁 GAME OVER");

        }

    }

    if (
        this.aiManager &&
        typeof this.aiManager.update === "function"
    ) {

        this.aiManager.update(deltaTime);

    }

    }

    /**
     * ==========================
     * Render
     * ==========================
     */

    render() {

        this.renderer.render(
            this.scene,
            this.camera
        );

    }

    /**
     * ==========================
     * Window Resize
     * ==========================
     */

    onResize() {

        if (this.cameraManager) {

            this.cameraManager.updateAspect();

        }

        if (this.rendererManager) {

            this.rendererManager.resize();

        }

    }

        /**
     * ==========================
     * Pause Game
     * ==========================
     */

    pause() {

        this.paused = true;

        console.log("Game Paused");

    }

    /**
     * ==========================
     * Resume Game
     * ==========================
     */

    resume() {

        this.paused = false;

        console.log("Game Resumed");

    }

    /**
     * ==========================
     * Stop Game
     * ==========================
     */

    stop() {

        this.running = false;

        if (this.frameId) {

            cancelAnimationFrame(this.frameId);

            this.frameId = null;

        }

        console.log("Game Stopped");

    }

    /**
     * ==========================
     * Restart Game
     * ==========================
     */

    restart() {

        this.stop();

        this.init();

        this.start();

        console.log("Game Restarted");

    }

    /**
     * ==========================
     * Getters
     * ==========================
     */

    getScene() {

        return this.scene;

    }

    getCamera() {

        return this.camera;

    }

    getRenderer() {

        return this.renderer;

    }

}

export default Game;
