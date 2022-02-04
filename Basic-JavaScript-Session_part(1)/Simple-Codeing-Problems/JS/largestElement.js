// Largest Element of an Array

console.log('Largest element of An Array');

function largestNumber(number) {

    // assign largest number
    let largest = number[0];

    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largest) {
            largest = element;
        }
    };
    return largest;
}

const myArray = largestNumber([31, 23, 62, 75, 17, 6]);
console.log(myArray)
const myArray2 = largestNumber([-4, -6, -5, -3, -13, -15]);
console.log(myArray2);