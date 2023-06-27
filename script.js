let num1;
let num2;
let operator = '';


const numKey = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".ops");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const period = document.getElementById("period");

const prevDisplay = document.getElementById("prev");
const currentDisplay = document.getElementById("current");

clear.addEventListener('click', () => {
    prevDisplay.textContent = '';
    currentDisplay.textContent = '';
    window.location.reload();
})

numKey.forEach(btn => btn.addEventListener('click', populateDisplay)) 
ops.forEach(btn => btn.addEventListener('click', populateDisplay)) 

function populateDisplay(){
    let x = this.value
    currentDisplay.textContent += x
}


function operate(a, b, op){
    switch (op){
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '×':
            multiply(a, b);
            break;
        case '÷':
            divide(a, b);
            break;
    }
}


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "SYNTAX ERROR";
    return a / b;
}