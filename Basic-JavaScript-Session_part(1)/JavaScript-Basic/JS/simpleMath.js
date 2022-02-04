console.log('Simple Mathematical Operations in JavaScript');

const onionPrice = 55;
const eggPrice = 9;

console.log('OnionPrice', onionPrice, '  Egg Price', eggPrice);

// Math Operations------------ 

// Sam {+}
const totalPrice = onionPrice + eggPrice;
console.log('Total Price', totalPrice);

// Difference {-}
const differencePrice = onionPrice - eggPrice;
console.log('Difference Price', differencePrice);

// multiplication {*}
const eggQuantity = 12;
const totalEggPrice = eggPrice * eggQuantity;
console.log('Total Egg Price', totalEggPrice);

//  Divide { / }
const moneyAvailable = 120;
const orangPrice = 10;
const orangeQuantity = moneyAvailable / orangPrice;
console.log('Orange Quantity', orangeQuantity);


// Remainder Modulus
const mangoes = 7;
const hungryPerson = 2;
const remainder = mangoes % hungryPerson;
console.log("Last quantity", remainder);



/*   Some Short Hand  Mathematical Operation  */

// let use Becouse Const variable don't 2 time assign.

let price1 = 31;

// 1 Short Hand..
price1 = price1 + 2;
console.log(price1);
// 2 Short Hand...
price1 += 10;
console.log(price1);
// 3 Short Hand...
price1 -= 20;
console.log(price1);

// 4 Short Hand...
// Just increase or decrease Use This Method.
let age = 19;
age++;
console.log('Age increase +1 ', age);

age--;
console.log('Age Decrease -1', age)

