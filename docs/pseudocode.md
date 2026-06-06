# Pseudocode for calculator.js

const prompt = require("prompt-sync")();
//tool used to introduce user inputs

## calculator logic

function add(num1, num2) {
   return sum of num1 & num2
}

function subtract(num1, num2) {
    subtract num1 by num2 and return sum
}

function multiply(num1, num2) {
    multiply num1 by num2 and return sum
}

function divide(num1, num2) {
    divide num1 by num2 and return sum
    unless num2 is 0 then print error message
}

## history logic

function saveCalculation(operation, result){
    store the calculation in the history array
}

function displayHistory() {
    print a message if the array has no elements stating user has no stored calculations

    otherwise print all stored calculation from history array
}

## main user interface

print (Brian's Terminal Calculator) as the title

while loop to allow multiple calculations in one execution { 
    print terminal options menu to allow user to choose to either begin a calculation, view calculation history, or exit program

    if (user chose to exit program) {
        bye bye message
        break loop
    }

    if (user chose to view history) {
        display history
        restart loop and prompt menu options again
    }

    if (user chose to begin new calculation) {
        const operation = prompt(choose operation (+, -, *, /));

        const num1 = prompt(enter first number: );
        const num2 = prompt(enter second number: );

        }
        let result;
        // introduces result as a variable

        if (operation = add) {
            result = add function
        }
        else if (operation = subtract) {
            result = subtract function
        }
        else if (operation = multiply) {
            result = multiply function
        }
        else it (operation = divide) {
            result = divide function
        }
        else {
            print error message
        }
        // using "result =" essentially calls in specified function


        if (result is not undefined) {
            print message with calculation result
            store calculation in history array
        }
        restart loop and prompt menu options again
    }
