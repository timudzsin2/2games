export default class jatekter {
    #lista
    constructor(szuloElem) {}

    esemenykezelo() {
        window.addEventListener("kivalaszt", (event) => {
            let index = event.detail;
            this.#lista[index]="*"
            this.szuloElem.innerHTML="";
            this.megjelenit()
        });
    }
}
