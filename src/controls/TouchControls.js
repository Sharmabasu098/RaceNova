/**
 * ====================================
 * RaceNova
 * Touch Controls
 * ====================================
 */

export default class TouchControls {

    constructor(player) {

        this.player = player;

        this.moveSpeed = 0.15;

        this.init();

    }

    init() {

        window.addEventListener("touchstart", (event) => {

            const x = event.touches[0].clientX;

            if (x < window.innerWidth / 2) {

                this.player.getMesh().position.x -= this.moveSpeed;

            } else {

                this.player.getMesh().position.x += this.moveSpeed;

            }

        });

    }

}
