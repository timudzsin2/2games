import Tabla from "./Tabla.js";
import { aTabla } from "./main.js";

export default class Negyzet{
    #tartalom = "";
    constructor(){
        this.elhelyez();
        this.kattintasFigyelo();
    }

    elhelyez(){
        let html=`<div class="negyzet"></div>`;
        document.getElementById("tabla").insertAdjacentHTML("beforeend",html);
    }
    kattintasFigyelo(){
        this.elem = document.querySelector(".negyzet:last-child");
        this.elem.addEventListener("click",()=>{
            // létrehozom a div HTML elemet
            let temp = document.createElement("div");
            // a lépéstől megfelelően X vagy O kerül a példány tartalmába
            if(aTabla.getLepes() % 2 == 0){
                this.#tartalom = "X";
            }else{
                this.#tartalom = "O";
            }
            // a div elem szöveg tartalmát beállítom az példány tartalmára
            temp.textContent = this.#tartalom;
            // a div elemhez hozzáadok egy "negyzet" class-t
            temp.classList.add("negyzet")
            // a példányhoz tartozó eredeti HTML-elemet helyettesítem az új elemmel, amiben van egy X vagy O
            this.elem.replaceWith(temp);
            aTabla.lepesNovelo();
        });
    }

    getTartalom(){
        return this.#tartalom;
    }
}