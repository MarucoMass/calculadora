let cuenta = document.getElementById('cuenta');
let resultado = document.getElementById('resultado');
let visor = document.getElementById('visor');
let button = Array.from(document.getElementsByClassName('button'));

button.map(buttons => {
    buttons.addEventListener('click', (e) =>{
        switch (e.target.innerText) {
         case 'AC':
             cuenta.innerText = '';
             resultado.innerText = '';
             break;
         case 'DEL':
             if (cuenta.innerText) {
                 cuenta.innerText = cuenta.innerText.slice(0, -1);
             }
             break;
        case '*':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            if(resultado.innerText !== ''){
                cuenta.innerText = cuenta.innerText.slice(-1, 0);
                cuenta.innerText = resultado.innerText + e.target.innerText;
                console.log(cuenta.innerText);
            }
            break; 
        case '/':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            if(resultado.innerText !== ''){
                cuenta.innerText = cuenta.innerText.slice(-1, 0);
                cuenta.innerText = resultado.innerText + e.target.innerText;
                console.log(cuenta.innerText);
            }
            break; 
        case '+':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            if(resultado.innerText !== ''){
                cuenta.innerText = cuenta.innerText.slice(-1, 0);
                cuenta.innerText = resultado.innerText + e.target.innerText;
                console.log(cuenta.innerText);
            }
            break; 
        case '-':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            if(resultado.innerText !== ''){
                cuenta.innerText = cuenta.innerText.slice(-1, 0);
                cuenta.innerText = resultado.innerText + e.target.innerText;
                console.log(cuenta.innerText);
            }
            break; 
         case '=':
            if (cuenta.innerText !== '') {
                let current = eval(cuenta.innerText);
                let result = parseFloat(current);
                let tolocaleString = result.toLocaleString('en');
                resultado.innerText = tolocaleString;
                cuenta.innerText = ''; 
         }
             break;
             default:
                cuenta.innerText += e.target.innerText;
        }
    })
})

