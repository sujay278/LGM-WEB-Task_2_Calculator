var num1 = 0, num2 = 0, ans = 0, singlenum = 0, operator = "";

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'Bksp') {
            let str = document.getElementById("screen").value;
            document.getElementById("screen").value = str.slice(0, str.length - 1);
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == 'e^x') {
            screenValue = Math.E ** screenValue;
            screen.value = screenValue;
        }
        else if (buttonText == 'x^2') {
            screenValue = screenValue ** 2;
            screen.value = screenValue;
        }
        else if (buttonText == 'x^3') {
            screenValue = screenValue ** 3;
            screen.value = screenValue;
        }
        else if (buttonText == 'x^y') {
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'sqrt') {
            screenValue = Math.sqrt(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == 'log') {
            screenValue = Math.log10(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == 'ln') {
            screenValue = Math.log(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == 'sin') {
            screenValue = Math.sin(toRadians(screenValue));
            screen.value = screenValue;
        }
        else if (buttonText == 'cos') {
            screenValue = Math.cos(toRadians(screenValue));
            screen.value = screenValue;
        }
        else if (buttonText == 'tan') {
            screenValue = Math.tan(toRadians(screenValue));
            screen.value = screenValue;
        }
        else if (buttonText == 'sin^-1') {
            screenValue = toDegrees(Math.asin(screenValue));
            screen.value = screenValue;
        }
        else if (buttonText == 'cos^-1') {
            screenValue = toDegrees(Math.acos(screenValue));
            screen.value = screenValue;
        }
        else if (buttonText == 'tan^-1') {
            screenValue = toDegrees(Math.atan(screenValue));
            screen.value = screenValue;
        }


        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}