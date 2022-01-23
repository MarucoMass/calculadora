let cuenta = document.getElementById('cuenta');
let resultado = document.getElementById('resultado');
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
            if (cuenta.innerText !== '' && cuenta.innerText.includes(e.target.innerText)) return
                cuenta.innerText += e.target.innerText;
            if(resultado.innerText){
                cuenta.innerText = resultado.innerText + e.target.innerText;
            }
            break; 
        case '/':
            if (cuenta.innerText !== '' && cuenta.innerText.includes(e.target.innerText)) return
            cuenta.innerText += e.target.innerText;
            if(resultado.innerText){
                cuenta.innerText = resultado.innerText + e.target.innerText;
            }
            break; 
        case '+':
            if (cuenta.innerText !== '' && cuenta.innerText.includes(e.target.innerText)) return
            cuenta.innerText += e.target.innerText; 
            if(resultado.innerText){
                cuenta.innerText = resultado.innerText + e.target.innerText;
            }
            break; 
        case '-':
            if (cuenta.innerText !== '' && cuenta.innerText.includes(e.target.innerText)) return
            cuenta.innerText += e.target.innerText; 
            if(resultado.innerText){
                cuenta.innerText = resultado.innerText + e.target.innerText;
            }
            break; 
         case '=':
            if (cuenta.innerText !== '') {
                resultado.innerText = eval(cuenta.innerText);
                // cuenta.innerText = ''; 
            }
            break;
            default:
                if (e.target.innerText === '.' && cuenta.innerText.includes('.')) return;
                cuenta.innerText += e.target.innerText;   
        }
    })
})

// let current = eval(cuenta.innerText);
// let result = parseFloat(current);
// var tolocaleString = result.toLocaleString('en');
// resultado.innerText = tolocaleString;
// cuenta.innerText = ''; 