import Tabla from "./Tabla.js"

export let aTabla = new Tabla();


export function tablazatElrendezo(){
    let tablaElem = document.querySelector("#tabla");
    let tablaGyerekSzam = tablaElem.children.length;
    // eltárolom a tábla méretét a gyerekeinek száma alapján
    let meret = Math.ceil(Math.sqrt(tablaGyerekSzam));
  
    // beállítom a táblaelem CSS grid-jét a méretnek megfelelően
    tablaElem.style.gridTemplateColumns = `repeat(${meret}, 1fr)`;
    tablaElem.style.gridTemplateRows = `repeat(${meret}, 1fr)`; 

    // beállítom a táblaelem font-size-ját a méret reciprokát használva, és a tábla méretéhez relatívan
    tablaElem.style.fontSize = `${Math.ceil((1/meret) * tablaElem.offsetWidth)}px`;
    // mindik amikor az ablak mérete változik, ezt újra megcsinálom
    window.addEventListener('resize', () => {
        tablaElem.style.fontSize = `${Math.ceil((1/meret) * tablaElem.offsetWidth)}px`;
    });    
};
  