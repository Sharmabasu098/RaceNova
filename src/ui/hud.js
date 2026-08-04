/**
 * ============================================================
 * RaceNova
 * HUD System
 * Version : 1.0
 * ============================================================
 */

export default class HUD {

    constructor() {

        this.container = document.createElement("div");

        this.container.style.position = "fixed";
        this.container.style.top = "20px";
        this.container.style.left = "20px";
        this.container.style.color = "#ffffff";
        this.container.style.fontSize = "26px";
        this.container.style.fontFamily = "Arial";
        this.container.style.fontWeight = "bold";
        this.container.style.zIndex = "999";

        this.container.innerHTML = `
            <div id="speedText">Speed : 0 km/h</div>
            <div id="gearText">Gear : N</div>
        `;

        document.body.appendChild(this.container);

        this.speedText =
            document.getElementById("speedText");

        this.gearText =
            document.getElementById("gearText");

    }

    update(speed) {

        const kmh =
            Math.floor(speed * 220);

        this.speedText.innerHTML =
            `Speed : ${kmh} km/h`;

        let gear = "N";

        if (kmh > 5) gear = "1";
        if (kmh > 30) gear = "2";
        if (kmh > 60) gear = "3";
        if (kmh > 100) gear = "4";
        if (kmh > 150) gear = "5";

        this.gearText.innerHTML =
            `Gear : ${gear}`;

    }

}
