
// Celsius To Fahrenheit
function celsiusFahrenheit(celsius) {
    return (1 * celsius * 9 / 5) + 32;
}
console.log(celsiusFahrenheit(5));

// Fahrenheit To Celsius
function fahrenheitToCelsius(fahrenheit) {

    return (fahrenheit - 32) / 1.8;
};
console.log(fahrenheitToCelsius(100));



// Student Grade Calculation
function studentMarks(marks) {
    if (marks >= 80) {
        console.log('A+ Grade');
    }
    else if (marks >= 70) {
        console.log(' A Grade ')
    }
    else if (marks >= 60) {
        console.log(' A- Grade ');
    }
    else if (marks >= 50) {
        console.log(' B Grade ');
    }
    else if (marks >= 40) {
        console.log(' C Grade ');
    }
    else if (marks >= 33) {
        console.log(' D Grade ');
    }
    else {
        console.log('Fall');
    }
};

studentMarks(50);


// Simple Interest 
function moneyInterest(prencipal, interestRate, time) {
    const myMoney = prencipal;
    const amount = myMoney * (1 + (interestRate / 100) * time);
    const myInterest = (amount - prencipal);
    return myInterest;
};
const money = moneyInterest(100, 10, 1);
console.log('my Interest ' + money);


// Simple For Loop Factorial 
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
};
console.log(factorial);

// Function while Loop Factorial
function factorialNumber(num) {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
};
const myNumber = factorialNumber(6);
console.log(myNumber);