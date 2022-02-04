//  

console.log('Try Again ');

function sum(i) {
    if (i === 1) {
        return 1;
    }
    return sum(i - 1) + i;
};
console.log(sum(6));


function recursion(n) {
    if (n === 1) {
        return 1;
    }
    return recursion(n - 1) * n
};
console.log(recursion(5));