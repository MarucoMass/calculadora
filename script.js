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
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            break; 
        case '/':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            break; 
        case '+':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
            }    
            break; 
        case '-':
            if (cuenta.innerText !== '' || resultado.innerText !== '') {
                cuenta.innerText += e.target.innerText;
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
             if (resultado.innerText !== ''){
                switch (resultado.innerText) {
                    case '*':
                       resultado.innerText = resultado.innerText * cuenta.innerText;
                        break;
                
                    default:
                        break;
                }
             }
             break;
             default:
                cuenta.innerText += e.target.innerText;
                // let current = parseFloat(cuenta.innerText);
                // if(isNaN(current)) return '.'
                // let toLocaleString = current.toLocaleString('en');
                // cuenta.innerText = toLocaleString;
        }
    })
})


// case '=':
//     if (cuenta.innerText !== '') {
//        let current = eval(cuenta.innerText);
//        let result = parseFloat(current);
//        let tolocaleString = result.toLocaleString('en');
//        resultado.innerText = tolocaleString;
//        cuenta.innerText = '';
//     }