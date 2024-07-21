// Define arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to get input values and perform calculation
function performCalculation(operation) {
    // Get input values and convert them to numbers
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    // Perform the chosen operation
    let result;
    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
    }

    // Display the result
    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners to buttons
document.getElementById('add').addEventListener('click', function() {
    performCalculation('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    performCalculation('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    performCalculation('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    performCalculation('divide');
});
