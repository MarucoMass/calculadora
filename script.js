const btn = document.querySelectorAll('button');
const visor = document.getElementById('visor');
var arreglo = [];
let seleccion;

btn.forEach(seleccionBtn => seleccionBtn.addEventListener('click', (e) => {
    seleccion = e.target.innerText;
    arreglo.push(seleccion);
    visor.innerHTML = arreglo;
    console.log(arreglo);

}));