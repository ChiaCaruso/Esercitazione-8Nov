import {solarSystem} from './solarSystem.js';
import {monkeysEquipe} from './monkeys.js';

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
    setTimeout(() => {modalOne.style.display = "block"}, 10000);

    btnAccept.addEventListener("click", () =>{
        modalOne.style.display = "none";
    })


/**
 *  Function to calculate diameter of planets.
 */ 
    const planetDiameter = solarSystem.map((element) => element.radius * 2);
    console.log(planetDiameter);


    btnEvent.addEventListener("click", () =>{
        page.className = "hidden";
        setTimeout(() => {modalTwo.style.display = "block";}, 5000);
        setTimeout(() => {modalTwo.style.display = "none"}, 10000); 

        const newH1 = document.createElement("h1");
        const newH2 = document.createElement("h2");

        newH1.className = "name-Monkey";
        newH2.className = "aka-Monkey";

        monkeysCont.appendChild(newH1);
        monkeysCont.appendChild(newH2);
        
        const monkeys = monkeysEquipe.forEach((item) => {
            
            newH1.textContent = item.name;
            newH2.textContent = item.aka;

            monkeysCont.style.display = "block";         
                    

        })
        setInterval(monkeys, 3000, newH1, newH2);


    })
    
})