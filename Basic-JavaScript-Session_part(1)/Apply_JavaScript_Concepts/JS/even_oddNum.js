// Basic JavaScript Problem

console.log('JavaScript Even And Odd Number Varify');

// main Function Declare
function giveNumber(number) {

    if (number % 2 === 0) {
        return true;
    }
    else if (number % 2 !== 0) {
        return false;
    }
};

const myNumber = giveNumber(9);
console.log(myNumber);

const herNumber = giveNumber(20);
console.log(herNumber);