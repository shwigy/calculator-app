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

/*
/   3. USER INTERFACE
*/
console.log("[Brian's Simple Calculator]")

while (true) {
    console.log("Choose an option");
    console.log("1. Begin calculation");
    console.log("2. View calculation history");
    console.log("3. Exit program");

    const menuChoice = prompt("Enter option (1, 2, or 3): ").trim();

    if (menuChoice === "3") {
        console.log("bye bye!");
        break;
    }

    if (menuChoice === "2") {
        displayHistory();
        continue;
    }

    if (menuChoice === "1") {
        console.log("[New Calculation]");
        const operation = prompt("Choose an operation (add, subtract, multiply, divide").trim().toLowerCase();

        
    }
}