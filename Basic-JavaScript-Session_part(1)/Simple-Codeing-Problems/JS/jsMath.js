// JavaScript math 

console.log('"JavaScript Math Operations"');

// absolute value of a number {abs}
const myNumber = -5;
const output = Math.abs(myNumber);
console.log('Math.abs ' + output);

// Math.ceil
const floatNumber = 2.532;
const mathCeil = Math.ceil(floatNumber);
console.log('Math.ceil ' + mathCeil);

// Math.floor
const floorNumber = 3.8234;
const mathFloor = Math.floor(floorNumber);
console.log('Math.floor ' + mathFloor);

// Math.round
const roundNumber = 21.425;
const roundNumber2 = 21.525;
const mathRound = Math.round(roundNumber);
const mathRound2 = Math.round(roundNumber2);
console.log('Math.round ' + mathRound, mathRound2);

// Math.random
const randomNumber = 12;
const mathRandom = Math.round(Math.random(randomNumber) * 6);
console.log('Math.random ' + mathRandom);

// Math.random use a Function
function getRndInterger(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
};
const randomNum = getRndInterger(1, 6);
console.log(randomNum);