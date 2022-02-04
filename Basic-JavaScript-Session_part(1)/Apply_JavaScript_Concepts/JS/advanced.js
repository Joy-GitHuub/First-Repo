// 

console.log('JavaScript Advance Recursive Factorial');

function recursiveFactorial(n) {

    if (n === 1) {
        return 1
    };
    return n = n * recursiveFactorial(n - 1);
};

const myFactorial = recursiveFactorial(5);
console.log(myFactorial);