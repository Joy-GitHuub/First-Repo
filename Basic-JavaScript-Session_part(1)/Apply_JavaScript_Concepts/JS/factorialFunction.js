//

console.log('JavaScript factorial Multiple');



//  factorial value declare
let factorial = 1;
//  for loop declear
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
};
console.log(factorial);


// Factorial  Function  Declare
function getFactorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    };
    return fact;
};

// call this function
console.log(getFactorial(7));