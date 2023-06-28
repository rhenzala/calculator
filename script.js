let currentValue = '';
let previousValue = '';
let operator = '';

const numbers = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".ops");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const period = document.getElementById("period");

const previousDisplay = document.getElementById("prev");
const currentDisplay = document.getElementById("current");

clear.addEventListener('click', clearDisplay)
equals.addEventListener('click', () => {
    operate();
    previousDisplay.textContent = '';
    currentDisplay.textContent = previousValue;
})
numbers.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        getOperand(e.target.textContent);
        currentDisplay.textContent = currentValue;
        //updateDisplay();
    })
})
ops.forEach(btn => {
    btn.addEventListener('click', (e) => {
        selectOperator(e.target.textContent);
        previousDisplay.textContent = `${previousValue} ${operator}`;
        currentDisplay.textContent = currentValue;
    })
}) 

function updateDisplay(){
    let x = this.innerText
    currentDisplay.textContent += x
    
}

function selectOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function getOperand(num){
    if (currentValue.length <= 14){
        currentValue += num;
    } 
}

function clearDisplay(){
    currentValue = '';
    previousValue = '';
    operator = '';
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
}

function operate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

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
            previousValue = divide(previousValue, currentValue);
            break;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000)/1000;
}


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "SYNTAX ERROR";
    return a / b;
}
