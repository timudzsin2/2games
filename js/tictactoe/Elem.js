export default class Elem{
    #adat
    #index

    constructor(adat, index, szuloElem){
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;
        console.log(this.szuloElem)
        this.megjelenit()
        this.esemenyKezeles()
    }

    megjelenit(){
        let html=`<div class="elem">${this.#adat}</div>`
        this.szuloElem.innerAdjacentHZML("beforeend",html)
    }
    esemenyKezeles(){
        this.elem = document.querySelector(".elem:last-child")
        this.elem.addEventListener("click",()=>{
            console.log(this.#index)
            const e = new CustomEvent("Kivalaszt", {detail:this.#index})
            window.dispatchEvent(e)
        })
    }


}