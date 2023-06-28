let currentValue = '';
let previousValue = '';
let operator = null;

const numbers = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".ops");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const period = document.getElementById("period");

const previousDisplay = document.getElementById("prev");
const currentDisplay = document.getElementById("current");

clear.addEventListener('click', clearDisplay)
del.addEventListener('click', deleteValue)
equals.addEventListener('click', () => {
    if (currentValue != '' && previousValue != ''){
        operate();
    }
})
numbers.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        appendNumber(e.target.textContent);
    })
})
ops.forEach(btn => {
    btn.addEventListener('click', (e) => {
        selectOperator(e.target.textContent);        
    })
}) 
period.addEventListener('click', appendPeriod);


function appendNumber(num){
    if (currentValue.length <= 9){
        currentDisplay.textContent += num;
        currentValue = currentDisplay.textContent;
    } 
}

function appendPeriod(){
    if (currentDisplay.textContent.includes('.')) return;
    currentDisplay.textContent += '.';
}

function clearDisplay(){
    currentValue = '';
    previousValue = '';
    operator = null;
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
}

function deleteValue(){
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1)
}

function displayResult(){
    previousDisplay.textContent = '';
    operator = null;
    if (previousValue.length <= 9){
        currentDisplay.textContent = previousValue;
    }
    else{
        currentDisplay.textContent = `${previousValue.slice(0, 11)}...`
    }
}

function roundNumber(num){
    return Math.round(num * 1000)/1000;
}

function selectOperator(op){
    previousValue = currentDisplay.textContent;
    operator = op;
    previousDisplay.textContent = `${previousValue} ${operator}`;
    currentValue = '';
    currentDisplay.textContent = currentValue;
}

function operate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '÷' && currentValue === 0) {
        currentDisplay.textContent = "RETARD";
        previousDisplay.textContent = '';
    }

    switch (operator){
        case '+':
            previousValue = add(previousValue, currentValue);
            break;
        case '-':
            previousValue = subtract(previousValue, currentValue);
            break;
        case '×':
            previousValue = multiply(previousValue, currentValue);
            break;
        case '÷':
            if (currentValue === 0) return null;
            else previousValue = divide(previousValue, currentValue);
            break;
        default:
            return null
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    displayResult();
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

