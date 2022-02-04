console.log('JavaScript Recap JS');

// Variable Declear
var deposit = 400;
const name = 'Joy Bose';
let age = 14;

// Condition
if (deposit === 400) {

}
else if (deposit >= 400) {

}
else if (deposit <= 400) {

}
else if (deposit !== 500) {

}

// Array Declear
const numbers = [23, 63, 52, 33, 71, 67];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[4] = 666;
// Check whether 111 included in the array
if (numbers.indexOf(111) !== -1) {

}
if (numbers.includes(111)) {

}

// Loop, 
// forof, while loop, for loop,
for (const iterator of object) {

}


// Function
function fullName(first, second) {
    const name = first + ' ' + second;
    return name;
};
const person = fullName('Abdur', 'Rohim');


// Object
const bottle = {
    color: 'yellow',
    contain: 'water',
    price: 199,
    tax = 19
};