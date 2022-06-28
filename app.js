let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenText = '';
function backSpace(b){
    return b.slice(0, b.length-1);
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == '×') {
            buttonText = '*';
            screenText += buttonText;
            screen.value = screenText;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenText += buttonText;
            screen.value = screenText;
        }
        else if (buttonText == 'DEL') {
            screenText=backSpace(screenText);
            screen.value = screenText;
           
        }
        else if (buttonText == '−') {
            buttonText = '-';
            screenText += buttonText;
            screen.value = screenText;
        }
        else if (buttonText == 'C') {
            screenText = "";
            screen.value = screenText

        }
        else if (buttonText == '=') {
            screen.value = eval(screenText);
            if (buttonText !== '=') {
                screen.value = '';
            }
        }
        else {
            screenText += buttonText;
            screen.value = screenText;
        }
    })
}