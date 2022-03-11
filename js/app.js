import { solarSystem } from './solarSystem.js';
import { monkeysEquipe } from './monkeys.js';

document.addEventListener("DOMContentLoaded", () => {
    const modalOne = document.querySelector(".modaleOne-cont");
    const modalTwo = document.querySelector(".modaleTwo-cont");
    const btnAccept = document.querySelector(".accept");
    const btnEvent = document.querySelector(".btn-event");
    const page = document.querySelector(".main");
    const monkeysCont = document.querySelector(".monkeys");



    /**
     *  Add modal to index.html.
     */
    setTimeout(() => { modalOne.style.display = "block" }, 5000);

    btnAccept.addEventListener("click", () => {
        modalOne.style.display = "none";
    })

    /**
     *  Functions to translate names of planets and calculate diameter of planets.
     */

    const italianName = (planet) => {
        switch (planet.name) {
            case 'Sun':
                planet.name = 'Sole';
                break;

            case 'Mercury':
                planet.name = 'Mercurio';
                break;

            case 'Venus':
                planet.name = 'Venere';
                break;

            case 'Earth':
                planet.name = 'Terra';
                break;

            case 'Mars':
                planet.name = 'Marte';
                break;

            case 'Jupiter':
                planet.name = 'Giove';
                break;

            case 'Saturn':
                planet.name = 'Saturno';
                break;

            case 'Uranus':
                planet.name = 'Uranio';
                break;

            case 'Neptune':
                planet.name = 'Nettuno';
                break;
        }
        return planet;
    }

    console.log(solarSystem.map(italianName));

    const planetDiameter = solarSystem.map((element) => element.radius * 2);
    console.log(planetDiameter);

    /**
     *  Monkeys!
     */

    btnEvent.addEventListener("click", () => {
        page.className = "hidden";

        const intervalModal = setInterval(() => {
            if (modalTwo.style.display === "none") {
                modalTwo.style.display = "block";
            } else {
                modalTwo.style.display = "none";
            }
        }, 2000);

        // setTimeout(() => {modalTwo.style.display = "block";}, 5000);
        // setTimeout(() => {modalTwo.style.display = "none"}, 10000); 



        // const monkeys = monkeysEquipe.forEach((item) => {

        //     clearInterval(intervalModal);

        //     const newH1 = document.createElement("h1");
        //     const newH2 = document.createElement("h2");

        //     newH1.className = "name-Monkey";
        //     newH2.className = "aka-Monkey";

        //     monkeysCont.appendChild(newH1);
        //     monkeysCont.appendChild(newH2);

        //     newH1.textContent = item.name;
        //     newH2.textContent = item.aka;

        //     monkeysCont.style.display = "block";         


        // })
        // setInterval(monkeys, 3000);


    })

})