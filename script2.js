class Calculadora{
    sumar(num1, num2){
        return num1 + num2;
    }
    restar(num1, num2){
        return num1 - num2;
    }
    multiplicar(num1, num2){
        return num1 * num2;
    }
    dividir(num1, num2){
        return num1 / num2;
    }
}
class Display{
    constructor(anteriorDisplay, actualDisplay){
        this.anteriorDisplay = anteriorDisplay;
        this.actualDisplay = actualDisplay;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.anteriorDisplayValor = '';
        this.actualDisplayValor = '';
        this.signos = {
            sumar: ' + ',
            restar: ' - ',
            multiplicar: ' * ',
            dividir: ' / ',
        }
    }
    borrar(){
        this.anteriorDisplayValor = this.anteriorDisplayValor.toString().slice(0, -1);
        this.imprimirValores();
    }
    allClear(){
        this.anteriorDisplayValor = '';
        this.actualDisplayValor = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    agregarNum(numero){
        if(numero === '.' && this.anteriorDisplayValor.includes('.')) return
        this.anteriorDisplayValor = this.anteriorDisplayValor.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.anteriorDisplay.textContent = this.anteriorDisplayValor;
        this.actualDisplay.textContent = `${this.actualDisplayValor} ${this.signos[this.tipoOperacion] || ''}`;
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
    calcular(){
        const anteriorDisplayValor = parseFloat(this.anteriorDisplayValor);
        const actualDisplayValor = parseFloat(this.actualDisplayValor);
        if(isNaN(actualDisplayValor) || isNaN(anteriorDisplayValor)) return
        this.actualDisplayValor = this.calculador[this.tipoOperacion](anteriorDisplayValor, anteriorDisplayValor);
    }
}

const anteriorDisplay = document.getElementById('anterior');
const actualDisplay = document.getElementById('actual');
const btnNum = document.querySelectorAll('.numero');
const btnOperacion = document.querySelectorAll('.operacion');

const calculadora = new Calculadora();
const display = new Display(anteriorDisplay, actualDisplay);

btnNum.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNum(boton.innerHTML));
});
btnOperacion.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value));
});