console.log('"Spread Operator"')

const numbers = [23, 6, 62, 99, 73, 71];
console.log(numbers);

// ...numbers output is Just Array Element
console.log(...numbers);

// max number
const max = Math.max(...numbers);
console.log(max);

// min Number
const min = Math.min(...numbers);
console.log(min);

const newNumbers = [...numbers, 111];
newNumbers.push(11);
newNumbers.push(55);
newNumbers.push(66);
newNumbers.push(88);

console.log(numbers);
console.log(newNumbers);


// Spreadd Operator Use to Function Parameter
const num = [34, 6, 50];

const sum = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
const output = sum(...num);
console.log(output);
