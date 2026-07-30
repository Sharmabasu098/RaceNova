/**
 * ============================================================
 * RaceNova
 * Scene Manager
 * ============================================================
 */

import * as THREE from "three";

export default class SceneManager {

    constructor() {

        this.scene = new THREE.Scene();

        this.scene.background = new THREE.Color(0x87CEEB);

    }

    getScene() {

        return this.scene;

    }

    setBackground(color) {

        this.scene.background = new THREE.Color(color);

    }

}
