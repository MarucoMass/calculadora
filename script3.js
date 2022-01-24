const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const displayTemp = document.getElementById('display-temp');
const allClearBtn = document.getElementById('ac');
const deleteBtn = document.getElementById('borrar');
const equalBtn = document.getElementById('igual');
const NumBtn = document.querySelectorAll('.numero');
const OpBtn = document.querySelectorAll('.operacion');

let valorDis1 = '';
let valorDis2 = '';
let resultado = null;
let lastOperation = '';
let dot = false;

NumBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot){
            return;
        }
        valorDis2 += e.target.innerText;
        display2.innerText = valorDis2;
        // let valor = parseFloat(valorDis2);
        // display2.innerText = valor.toLocaleString('en');
    })
})
OpBtn.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!valorDis2) return;
        dot = false;
        const operationName = e.target.innerText;
        if(valorDis1 && valorDis2 && lastOperation){
            calcular();
        } else {
        resultado = parseFloat(valorDis2); 
        // let valor = parseFloat(valorDis2);   
        // resultado =  valor.toLocaleString('en');;    
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})
equalBtn.addEventListener('click', (e) => {
    if(!valorDis1 || !valorDis2) return;
    dot = false;
    calcular();
    clearVar();
    display2.innerText = resultado;
    valorDis2 = resultado;
    displayTemp.innerText = '';
    // display1.innerText = '';
    valorDis1 = '';
})
allClearBtn.addEventListener('click', (e) => {
    display1.innerText = '0';
    display2.innerText = '0';
    displayTemp.innerText = '0';
    valorDis1 = '';
    valorDis2 = '';
    resultado = '';
})
deleteBtn.addEventListener('click', (e) => {
        display2.innerText = '';
        valorDis2 = '';
})

function clearVar(name = ''){
    valorDis1 += valorDis2 + ' ' + name + ' ';
    display1.innerText = valorDis1;
    display2.innerText = '';
    valorDis2 = '';
    displayTemp.innerText = resultado;
}
function calcular(){
    if (lastOperation === '*') {
        resultado = parseFloat(resultado) * parseFloat(valorDis2);
    } else if (lastOperation === '+') {
        resultado = parseFloat(resultado) + parseFloat(valorDis2);
    } else if (lastOperation === '-') {
        resultado = parseFloat(resultado) - parseFloat(valorDis2);
    } else if (lastOperation === '/') {
        resultado = parseFloat(resultado) / parseFloat(valorDis2);
    } else if (lastOperation === '%') {
        resultado = parseFloat(resultado) % parseFloat(valorDis2);
    } 
}
