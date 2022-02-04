// This Module Summary

console.log(' "This File Summary" ');

function getFactorial(number) {
    let fact = 1;

    for (let i = 1; i <= number; i++) {
        // console.log(i);
        console.log(fact, i)
        fact = fact * i;
    };
    return fact;
};

const getMyFactorial = getFactorial(5);
console.log(getMyFactorial);


function getFact(num) {

    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
};

const getFactNum = getFact(6);
console.log(getFactNum);


let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact = fact * i;
    console.log(i);
};
console.log(fact);
