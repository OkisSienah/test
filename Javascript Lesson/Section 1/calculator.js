let num1 = 8
let num2 = 2

let resultEl
let result

function add() {
    resultEl = document.getElementById("result-el")
    result = num1 + num2
    resultEl.textContent = "Result: " + result
}

function subtract() {  
    resultEl = document.getElementById("result-el")
    result = num1 - num2
    resultEl.textContent = "Result: " + result
}

function divide() {
    resultEl = document.getElementById("result-el")
    result = num1 / num2
    resultEl.textContent = "Result: " + result
}

function multiply() {
    resultEl = document.getElementById("result-el")
    result = num1 * num2
    resultEl.textContent = "Result: " + result
}