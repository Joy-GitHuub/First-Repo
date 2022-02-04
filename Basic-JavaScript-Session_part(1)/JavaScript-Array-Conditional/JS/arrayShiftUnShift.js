// 
console.log('JavaScript Shift & UnShift Method');

// Array Declear
const numbers = [23, 14, 67, 53, 98, 89, 27, 37];
console.log('numbers Array', numbers);


// JavaScript Remove First Index from an Array*****
const firstIndex = numbers.shift();
console.log('New Array', numbers);
console.log('This index Remove', firstIndex);


// JavaScript array add element in the Beginning
const add1 = numbers.unshift(44);
const add2 = numbers.unshift(33);

// unshift method give me index numbers
console.log('new index numbers', add1, add2)

console.log('Add New Element This Array', numbers);