/**
 * ====================================
 * RaceNova
 * Swipe Controls
 * Version : 1.0
 * ====================================
 */

export default class TouchControls {

    constructor(player) {

        this.player = player;

        this.startX = 0;
        this.endX = 0;

        this.minSwipeDistance = 80;

        this.init();

    }

    init() {

        window.addEventListener("touchstart", (event) => {

            this.startX = event.touches[0].clientX;

        });

        window.addEventListener("touchend", (event) => {

            this.endX = event.changedTouches[0].clientX;

            const distance = this.endX - this.startX;

            if (distance > this.minSwipeDistance) {

                this.player.moveRight();

            }

            else if (distance < -this.minSwipeDistance) {

                this.player.moveLeft();

            }

        });

    }

    update() {

        // Swipe Control doesn't need update.

    }

}
