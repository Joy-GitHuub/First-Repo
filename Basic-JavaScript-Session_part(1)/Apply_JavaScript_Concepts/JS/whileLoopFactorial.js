// Basci JavaScript 

console.log('" JavaScript While Loop Factorial "');


// declare Function
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    };
    return factorial;
};

const myFactorial = getFactorial(6);
console.log(myFactorial);


//  Factorial While loop reverse
function getFactorialDecease(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    };
    return factorial;
};
const deceaseFactorial = getFactorialDecease(5);
console.log(deceaseFactorial);


// Foctorial For loop reverse
function getForLoopFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    };
    return factorial;
};
const forLoopFactorial = getForLoopFactorial(6);
console.log(forLoopFactorial);