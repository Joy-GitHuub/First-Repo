// JavaScript Swap 

console.log('"JavaScript Swap Variable, Swap, Without Temp , Destructing"');

// Swap JavaScript
let first = 5;
let second = 15;
// first time Declare
console.log(first, second);
let temp = first;
first = second;
second = temp;
// Swap 
console.log(first, second);


// Destructing 2nd Way
[first, second] = [second, first];
console.log(first, second);