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
    if (num2 === 0) { // Dividing by 0 is just not possible
        return "Error: Cannot divide by zero"
    }
    return num1 / num2
}


/*
/   2. HISTORY LOGIC
*/
const calculationHistory = [] // Calculation history array 

function saveCalculation(operation, num1, num2, result) { // Variables that will be saved as individual calculation
    calculationHistory.push ({
        operation, num1, num2, result
    });
}

function displayHistory() {
    if (calculationHistory.length === 0) { // No history? print out empty history
        console.log("Calculation history is empty");
        return;
    }
    console.log("[[[History Log]]]"); 
    for (let i = 0; i < calculationHistory.length; i++) { // For loop to list out every calculation in the array
        console.log(calculationHistory[i]);
    }
}

/*
/   3. USER INTERFACE
*/
console.log("-----Brian's Simple Calculator-----")

while (true) { // While loop to enable the opportunity to do multiple calculations in one session and provide a user interface menu for options
    console.log("[[[Choose an option]]]");
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
        console.log("[[[New Calculation]]]");
        const operation = prompt("Choose an operation (add, subtract, multiply, divide): ").trim().toLowerCase();

        // checking if user input is NOT one of the options provided and will print error message and restart loop
        if (!["add", "subtract", "multiply", "divide"].includes(operation)) {
            console.log("Error: Invalid operation! Returning to menu.");
            continue;
        }
 
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));

        // using isNaN to validate that the user input numbers only, otherwise restart loop
        if (isNaN(num1) || isNaN(num2)) { 
            console.log("Error: Invalid input! Returning to menu.")
            continue;
        }


        let result;

        if (operation === "add") {
            result = add(num1, num2);
        } 
        else if (operation === "subtract") {
            result = subtract(num1, num2);
        } 
        else if (operation === "multiply") {
            result = multiply(num1, num2);
        } 
        else if (operation === "divide") {
            result = divide(num1, num2);
        }

        if (result !== undefined) {
            console.log(`Answer is: ${result}`);
            saveCalculation(operation, num1, num2, result);
        }

        continue;
    }
    console.log("Invalid input!!!");
}