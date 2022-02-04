console.log('"Filter & Find on an Array of Object"');

const numbers = [3, 6, 11, 53, 21, 25, 61, 41, 7, 9, 20];
console.log(numbers);

// Filter Method****
//  Filter Return in Array. Not Filter this item  Return empty Array
// Filter Just Bigger Then 20
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);


// Myself Create
const smallNumbers = numbers.filter
    (number => !bigNumbers.includes(number));
console.log(smallNumbers);


const products = [
    { name: 'water bottle', price: 50, color: 'Yellow' },
    { name: 'Mobile Phone', price: 10000, color: 'Black' },
    { name: 'Computer', price: 40000, color: 'Black' },
    { name: 'Smart Watch', price: 3000, color: 'Black' },
    { name: 'Sticky Note', price: 30, color: 'Pink' },
    { name: 'Water Glass', price: 75, color: 'White' },
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);

const blacks = products.filter(product => product.color.toLowerCase() === 'black'.toLowerCase());

console.log(blacks);


// Find Method***
//  Find Return Just element. Not Find this time Return undefined
const blackItem = products.find(product => product.color == 'Black');
console.log(blackItem);

const whiteItem = products.find(product => product.color === 'White');
console.log(whiteItem);