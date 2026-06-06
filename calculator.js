const prompt = require("prompt-sync")(); // Input tool to allow user input for calculation functions

/*
/  1. CALCULATOR LOGIC
*/
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero"
    }
    return num1 / num2
}


/*
/   2. HISTORY LOGIC
*/
const calculationHistory = []

function saveCalculation(operation, num1, num2, result) {
    calculationHistory.push ({
        operation, num1, num2, result
    });
}

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("Calculation history is empty");
        return;
    }
    console.log("[History Log]");
    for (let i = 0; i < calculationHistory.length; i++) {
        console.log(calculationHistory[i]);
    }
}

