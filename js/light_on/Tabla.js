import { Lampa } from "./Lampa.js";

export class Tabla{
    #meret = Math.floor(Math.random() * 5) + 3;
    #lampaTomb = [];
    constructor(){
        for (let i = 0; i < (this.#meret * this.#meret); i++) {
            this.#lampaTomb.push(new Lampa());         
        }
        this.tablaElrendezo();
        
        
        
    }

    tablaElrendezo(){
        let tablaElem = document.querySelector("#tabla");
        let tablaGyerekSzam = tablaElem.children.length;
        // eltárolom a tábla méretét a gyerekeinek száma alapján
        let meret = Math.ceil(Math.sqrt(tablaGyerekSzam));
    
        // beállítom a táblaelem CSS grid-jét a méretnek megfelelően
        tablaElem.style.gridTemplateColumns = `repeat(${meret}, 1fr)`;
        tablaElem.style.gridTemplateRows = `repeat(${meret}, 1fr)`;
        tablaElem.style.gap = `${Math.ceil((1/meret)*40)}px`;
    }
}