import {solarSystem} from './solarSystem.js';

document.addEventListener("DOMContentLoaded", () => {
/**
 *  Add modal to index.html
 */
    const modal = document.querySelector(".modale-cont");

    const timeModal = setTimeout(() => {
        modal.style.display = "block";
    }, 10000);

    const planetDiameter = solarSystem.map((element) => element.radius * 2);
    console.log(planetDiameter);
})