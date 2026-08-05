/**
 * ============================================================
 * RaceNova
 * Collision Manager
 * Version : 1.0
 * ============================================================
 */

constructor(
    player,
    trafficManager,
    coinManager
) {

    this.player = player;

    this.trafficManager = trafficManager;

    this.coinManager = coinManager;

    this.crashed = false;

}

    update() {

        if (this.crashed) return;

        const playerMesh = this.player.getMesh();

        const cars = this.trafficManager.getCars();

        for (const traffic of cars) {

            const trafficMesh = traffic.getMesh();

            const distance =
                playerMesh.position.distanceTo(
                    trafficMesh.position
                );

            if (distance < 2.0) {

                this.crashed = true;

                console.log("💥 Collision Detected!");

                break;

            }

        }

    }

    isCrashed() {

        return this.crashed;

    }

    reset() {

        this.crashed = false;

    }

}
