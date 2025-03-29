import { aTabla } from "./main.js";

export class Lampa{
    #felkapcsolva = false;
    static peldanySzam = 0;
    #id;
    constructor(){
        this.#id = Lampa.peldanySzam;
        Lampa.peldanySzam++;
        if(Math.floor(Math.random() * 5) == 0){
            this.#felkapcsolva = true;
        }
        this.elhelyezATablaban();
        this.clickEventListenerHozzaad();
    }

    elhelyezATablaban(){
        if(this.#felkapcsolva == false){
            var html=`<div class="lampa le"></div>`;
        }else{
            var html=`<div class="lampa fel"></div>`;
        }
        document.getElementById("tabla").insertAdjacentHTML("beforeend",html);
    }

    clickEventListenerHozzaad(){
        this.elem = document.querySelector(".lampa:last-child");
        this.elem.addEventListener("click",()=>{
            this.kapcsolSzomszedokkal();
        });
    }

    kapcsol(){
        if(this.#felkapcsolva){
            this.elem.classList.remove("fel");
            this.elem.classList.add("le");
        }else{
            this.elem.classList.remove("le");
            this.elem.classList.add("fel");
        }
        this.#felkapcsolva = !this.#felkapcsolva;
    }

    kapcsolSzomszedokkal(){
        this.kapcsol();
        aTabla.kapcsolSzomszedok(this.#id);
    }

    getFelkapcsolva(){
        return this.#felkapcsolva;
    }
}