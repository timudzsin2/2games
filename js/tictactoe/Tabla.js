import Negyzet from "./Negyzet.js";
import { tablazatElrendezo } from "./main.js";

export default class Tabla{
    #meret;
    #lepes = 0;
    #negyzetTomb = [];
    constructor(){
        this.#meret = prompt("Adja meg a tábla méretét: ");
        this.#meret = parseInt(this.#meret);
        
        for (let i = 0; i < (this.#meret * this.#meret); i++) {
            this.#negyzetTomb.push(new Negyzet());
        }

        tablazatElrendezo();
    }

    lepesNovelo(){
        this.#lepes++;
        this.korFigyelo();
        this.nyeresEllenorzes();
    }
    nyeresEllenorzes(){
        /*
                #meret = 4

              a 0  1  2  3
            b
            0   0  1  2  3
            1   4  5  6  7       a 3. sor 2. elemét (9) úgy kapom meg, hogy b*#meret + a  (2*4 + 1)
            2   8  9  10 11
            3   12 13 14 15     

                #meret = 5
            0   1   2   3   4
            5   6   7   8   9           az egyik átló elemei: 0*(meret+1), 1*(meret+1), 2*(meret+1), 3*(meret+1), 4*(meret+1)
            10  11  12  13  14          a másik átló elemei:  1*(meret-1), 2*(meret-1), 3*(meret-1), 4*(meret-1), 5*(meret-1)
            15  16  17  18  19
            20  21  22  23  24
        */
        
        // sorok és oszlopok ellenőrzése
        for (let i = 0; i < this.#meret; i++) {
            // sorok ellenőrzése, itt az i sorként funkcionál
            var k = 0;
            // ha az i. sor 0. négyzete nem üres
            if(this.#negyzetTomb[i*this.#meret + 0].getTartalom() != ""){
                // megnézem hogy a sorban mindegyik négyzet tartalma azonos-e a sor 0. négyzet tartalmával
                while(k < this.#meret && this.#negyzetTomb[i*this.#meret + 0].getTartalom() == this.#negyzetTomb[i*this.#meret + k].getTartalom()){
                    k++;
                }
            }
            // ha k eléri a négyzetek számát, akkor azt jelenti hogy igen, vagyis ami a tartalma (X/O), az nyert
            if(k == this.#meret){
                alert(this.#negyzetTomb[i*this.#meret + 0].getTartalom() + " nyert!");
                location.reload();
            }

            // oszlopok ellenőrzése, itt az i oszlopként funkcionál
            k = 0;
            // ha az i. oszlop 0. négyzete nem üres
            if(this.#negyzetTomb[0*this.#meret + i].getTartalom() != ""){
                // megnézem hogy az oszlopban mindegyik négyzet tartalma azonos-e az oszlop 0. nyégyzet tartalmával
                while(k < this.#meret && this.#negyzetTomb[0*this.#meret + i].getTartalom() == this.#negyzetTomb[k*this.#meret + i].getTartalom()){
                    k++;
                }
            }
            // ha k eléri a négyzetek számát, akkor azt jelenti hogy igen, vagyis ami a tartalma (X/O), az nyert
            if(k == this.#meret){
                alert(this.#negyzetTomb[0*this.#meret + i].getTartalom() + " nyert!");
                location.reload();
            }
        }

        // átlók ellenőrzése
        // egyik átló
        var j = 0;
        if(this.#negyzetTomb[0*(this.#meret+1)].getTartalom() != ""){
            while(j < this.#meret && this.#negyzetTomb[0*(this.#meret+1)].getTartalom() == this.#negyzetTomb[j*(this.#meret+1)].getTartalom()){
                j++;
            }
        }
        if(j == this.#meret){
            alert(this.#negyzetTomb[0*(this.#meret+1)].getTartalom() + " nyert!");
            location.reload();  
        }
        // másik átló
        j = 1;
        if(this.#negyzetTomb[1*(this.#meret-1)].getTartalom() != ""){
            while(j < (this.#meret+1) && this.#negyzetTomb[1*(this.#meret-1)].getTartalom() == this.#negyzetTomb[j*(this.#meret-1)].getTartalom()){
                j++;
            }
        }
        if(j == (this.#meret+1)){
            alert(this.#negyzetTomb[1*(this.#meret-1)].getTartalom() + " nyert!");
            location.reload();  
        }

        // döntetlen ellenőrzése, vagyis van-e üres tartalmú négyzet
        // fontos, hogy ez az oszlopok, sorok és átlók ellenőrzése után van,  abban az esetben ha az utolsó lépéssel nyerne az egyik fél
        var a = 0;
        while(a < (this.#meret * this.#meret) && this.#negyzetTomb[a].getTartalom() != ""){
            a++;
        }
        if(a == (this.#meret * this.#meret)){
            alert("Döntetlen!");
            location.reload();  
        }
    }
    getLepes(){
        return this.#lepes;
    }
    // segít számon tartani többféle képpen, hogy kinek a köre van
    korFigyelo(){
        if(this.#lepes % 2 == 0){
            document.title = "X";
        }else{
            document.title = "O";
        }
    }
}