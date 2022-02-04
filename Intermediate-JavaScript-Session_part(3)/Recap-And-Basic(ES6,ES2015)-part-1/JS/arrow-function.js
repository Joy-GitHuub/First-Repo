console.log('"Arrow Function"');


// Normal Function Declare
function add(num1, num2) {
    return num1 + num2;
};
console.log(add(34, 6), 'Normal Function');

/* document.getElementById('my-button').onclick = function handleEvent() {
    console.log('Click');
} */

// Function Expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
};
console.log(add2(3, 5));

// Function Expression (Anonymous)..
const add3 = function (num1, num2) {
    return num1 + num2;
};
console.log(add3(24, 6));


// Arrow Function ES6 Version (most Use);

const add4 = (num1, num2) => {
    return num1 + num2;
};
console.log(add4(23, 37), 'Arrow Function');