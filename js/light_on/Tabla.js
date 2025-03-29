import { Lampa } from "./Lampa.js";

export class Tabla{
    #meret = Math.floor(Math.random() * 3) + 3;
    #lampaTomb = [];
    constructor(){
        for (let i = 0; i < (this.#meret * this.#meret); i++) {
            this.#lampaTomb.push(new Lampa());         
        }

        let j = 0;
        while(j < this.#lampaTomb.length && this.#lampaTomb[j].getFelkapcsolva() == false){
            j++;
        }
        if(j == (this.#meret * this.#meret)){
            this.#lampaTomb[Math.floor(Math.random() * (this.#meret * this.#meret))].kapcsol();
            console.log("Eredetileg egy lámpa sem volt felkapcsolva, ezért egyet random fel kellett kapcsolni.");
        }

        this.tablaElrendezo();   
    }

    maradtDBesNyeresEllenorzo(){
        let db = 0;
        for (let i = 0; i < this.#lampaTomb.length; i++) {
            if(this.#lampaTomb[i].getFelkapcsolva() == true){
                db++;
            }
        }
        console.log(db);
    }

    kapcsolSzomszedok(eredeti){
        /*
            0  1  2  3  4        n = 5
            5  6  7  8  9
            10 11 12 13 14
            15 16 17 18 19
            20 21 22 23 24

            0  1  2  3  4  5     n = 6
            6  7  8  9  10 11
            12 13 14 15 16 17
            18 19 20 21 22 23
            24 25 26 27 28 29
            30 31 32 33 34 35
        */
        let n = this.#meret;

        // ha a lámpa a bal felső sarok, vagyis #id = 0
        if(eredeti == 0)
        {
            this.#lampaTomb[0 +1].kapcsol();
            this.#lampaTomb[0 +n].kapcsol();
        }
        // ha a lámpa a jobb felső sarok, vagyis #id = n-1
        else if(eredeti == n-1){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
        // ha a lámpa a bal alsó sarok, vagyis #id = n(n-1)
        else if(eredeti == n*(n-1)){
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
        }
        // ha a lámpa a jobb alsó sarok, vagyis #id = n*n-1
        else if(eredeti == n*n-1){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
        }

        // ha a lámpa a felső élen van, vagyis #id = 1, 2, 3... n-2
        else if(1 <= eredeti && eredeti <= n-2){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
        // ha a lámpa az alsó élen van, vagyis #id = (n*n)-(n-1), (n*n)-(n-2), (n*n)-(n-3)... (n*n)-2
        else if((n*n)-(n-1) <= eredeti && eredeti <= (n*n)-2){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
        }
        // ha a lámpa a bal élen van, vagyis #id osztható n-el és  n <= #id <= n*n-2n
        else if(eredeti % n == 0 && n <= eredeti && eredeti <= (n*n)-(2*n)){
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }
        // ha a lámpa a jobb élen van, vagyis #id-(n-1) osztható n-el és  2*n-1 <= #id <= ((n-1)*n)-1
        else if((eredeti-(n-1)) % n == 0 && 2*n-1 <= eredeti && eredeti <= ((n-1)*n)-1){
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }

        // különben valahol középen van
        else{
            this.#lampaTomb[eredeti-1].kapcsol();
            this.#lampaTomb[eredeti+1].kapcsol();
            this.#lampaTomb[eredeti-n].kapcsol();
            this.#lampaTomb[eredeti+n].kapcsol();
        }

        this.maradtDBesNyeresEllenorzo();
    }

    tablaElrendezo(){
        // eltárolom a tábla méretét a gyerekeinek száma alapján
        let tablaElem = document.querySelector("#tabla");
        let tablaGyerekSzam = tablaElem.children.length;
        let meret = Math.ceil(Math.sqrt(tablaGyerekSzam));
    
        // beállítom a táblaelem CSS grid-jét a méretnek megfelelően
        tablaElem.style.gridTemplateColumns = `repeat(${meret}, 1fr)`;
        tablaElem.style.gridTemplateRows = `repeat(${meret}, 1fr)`;
        //tablaElem.style.gap = `${Math.floor((1/meret)*30)}px`;
    }
}