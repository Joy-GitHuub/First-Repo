// JavaScript Multiple Parameter Function

console.log('"JavaScript Multiple Parameter Function"');


// Declare A Function
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    const total = number1 + number2;
    return total;
};

// Call Function & with parameters
const result = addTwoNumbers(23, 30);
console.log('Sum =', result);


// Function Declare
function multipleTwoNumber(num1, num2) {
    const result = num1 * num2;
    return result;
};

// call THis Function
const multipleNumber = multipleTwoNumber(10, 20);
console.log('Multiple =', multipleNumber);



// Function Declare 
function differenceTwoNumbers(num1, num2) {
    const result = num1 - num2;
    return result;
};

// call This function ;
const differenceNumber = differenceTwoNumbers(100, 57);
console.log('Difference =', differenceNumber);