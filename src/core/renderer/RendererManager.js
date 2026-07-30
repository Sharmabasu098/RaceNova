/**
 * ============================================================
 * RaceNova
 * Renderer Manager
 * ============================================================
 */

import * as THREE from "three";

export default class RendererManager {

    constructor() {

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer.shadowMap.enabled = true;

    }

    getRenderer() {
        return this.renderer;
    }

    appendTo(container = document.body) {
        container.appendChild(this.renderer.domElement);
    }

    resize() {

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }

    render(scene, camera) {

        this.renderer.render(scene, camera);

    }

}
