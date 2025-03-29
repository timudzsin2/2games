export class Lampa{
    #felkapcsolva = false;
    constructor(){
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
            this.kapcsol();
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
        
        console.log(this);
    }
}