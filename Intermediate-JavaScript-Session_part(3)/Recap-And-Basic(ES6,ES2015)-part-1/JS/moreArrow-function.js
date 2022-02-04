console.log('"More Arrow Function"')
const add = (num1, num2) => num1 + num2;

const sum1 = add(23, 7);
console.log(sum1);

const multiplyAdd = (num1, num2, num3) => num1 + num2 + num3;
const sum2 = multiplyAdd(22, 44, 55);
console.log(sum2);

const fiveTimes = (num) => num * 5;
const output = fiveTimes(5);
console.log(output);


const math = (num1, num2, num3) => {
    const sum = num1 + num2;
    console.log(sum);
    const multipl = num3 * sum;
    console.log(multipl);
    const divide = multipl / sum;
    console.log(divide);
    return divide;
};
console.log(math(35, 62, 62));