// JavaScript Basic Problem

console.log('JavaScript Array Even And Odd');

// Declare isEven Function
function isEven(number) {

    // hold All even number
    const even = [];

    // full array Access for loop Use 
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        // condition
        if (element % 2 === 0) {
            // add just even number
            even.push(element);
        }

    };
    return even;
};

// 
const myArray = [2, 41, 33, 26, 19, 28, 82, 90, 99];
const evenFind = isEven(myArray);
console.log(evenFind);