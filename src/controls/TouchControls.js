/**
 * ====================================
 * RaceNova
 * Touch Controls
 * ====================================
 */

export default class TouchControls {

    constructor(player) {

        this.player = player;

        this.leftPressed = false;
        this.rightPressed = false;

        this.init();

    }

    init() {

        window.addEventListener("touchstart", (event) => {

            const x = event.touches[0].clientX;

            if (x < window.innerWidth / 2) {

                this.leftPressed = true;

            } else {

                this.rightPressed = true;

            }

        });

        window.addEventListener("touchend", () => {

            this.leftPressed = false;
            this.rightPressed = false;

        });

    }

    update(deltaTime) {

        if (this.leftPressed) {

            this.player.moveLeft(deltaTime);

        }

        if (this.rightPressed) {

            this.player.moveRight(deltaTime);

        }

    }

}
