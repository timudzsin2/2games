import Negyzet from "./Negyzet.js";

export default class Tabla{
    #meret;
    #lepes = 0;
    #negyzetTomb = [];
    constructor(){
        this.#meret = 4;
        for (let i = 0; i < (this.#meret * this.#meret); i++) {
            this.#negyzetTomb.push(new Negyzet());
        }
    }

    lepesNovelo(){
        this.#lepes++;
        this.nyeresEllenorzes();
    }
    nyeresEllenorzes(){
        //sorok ellenőrzése

        //ezzel a ciklussal végigmegyek a tábla sorain
        for (let i = 0; i < this.#meret; i++) {
            //ezzel a ciklussal végigmegyek az adott sor mindegyik nyégyzetén
            for (let j = i; j < this.#meret; j++) {
                console.log(i + " " + j);
                console.log(this.#negyzetTomb[i+j].getTartalom())
            }
        }

    }
    getLepes(){
        return this.#lepes;
    }
}