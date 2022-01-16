let currentOperand = document.getElementById('currentOperand');

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map( button => {
    button.addEventListener('click',(e) =>{
       switch(e.target.innerText){
           case 'AC':
               currentOperand.innerText = "";
               break
            case 'DEL':
                if(currentOperand.innerText){
                    currentOperand.innerText = currentOperand.innerText.slice(0,-1)
                }
                break
            case '=':
                try {
                    currentOperand.innerText = eval(currentOperand.innerText)   
                } catch {
                    currentOperand.innerText = 'ERROR !'
                }
                break               
           default:
               currentOperand.innerText += e.target.innerText
       }
    });
});