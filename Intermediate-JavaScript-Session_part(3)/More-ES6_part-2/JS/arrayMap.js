console.log('"Array Map Loop"');


const numbers = [23, 67, 81, 44, 25];

const tenTimes = number => {
    return number * 10;
};


const output = [];
for (const number of numbers) {
    const result = tenTimes(number);
    output.push(result);
};
console.log(output);

// same Work deffrent Way
const output2 = numbers.map(tenTimes);
const output3 = numbers.map(number => number * 10);
const output4 = numbers.map(x => x * 10);
const squares = numbers.map(x => x * x);

console.log(output2);
console.log(output3);
console.log(output4);
console.log(squares);