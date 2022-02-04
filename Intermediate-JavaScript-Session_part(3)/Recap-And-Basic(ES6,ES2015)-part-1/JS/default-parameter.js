console.log('"Default Parameter in Function"')

// Option 1
/* function add(num1, num2) {
    if (num2 === undefined) {
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}; */


// Option 2
/* function add(num1, num2) {
    num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}; */

// Last Version ES6 Option
function add(num1, num2 = 25) {
    const total = num1 + num2;
    return total;
};

const result = add(15);
console.log(result);