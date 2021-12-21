let fnumberInput = document.getElementById('fnumber');
let snumberInput = document.getElementById('snumber');
let operatorSelect = document.getElementById('operatorSelect');
let resultField = document.getElementById('result');
let submitBtn = document.getElementById('submitBtn');

function calc(fnumber, snumber, operator) {
    let result;

    if (operator === '+') {
        result = fnumber + snumber;
    }
    else if (operator === '-') {
        result = fnumber - snumber;
    }
    else if (operator === '*') {
        result = fnumber * snumber;
    }
    else {
        result = fnumber / snumber;
    }

    return result;
}

submitBtn.addEventListener('click', () => {
    const result = calc(fnumberInput.value, snumberInput.value, operatorSelect.value)
    resultField.innerText = Math.round(result);
})

    