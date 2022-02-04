// Find Largest Number in an Array

function findLargestNum(number) {

    // hold largest number
    let largeNumber = number[0];

    for (let i = 0; i < number.length; i++) {
        console.log(number[i]);
        const element = number[i];
        if (element > largeNumber) {
            largeNumber = element;
        }
    }
    return largeNumber;
};

function findSmallNum(number) {

    // hold smallest Number 
    let smallNumber = number[0];

    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        console.log(element);
        if (element < smallNumber) {
            smallNumber = element;
        }
    };
    return smallNumber;
}


// Array Total Sum
function totalSumArray(number) {

    // hold Array Sum
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        console.log('total Sum   ' + number[i]);
        sum = number[i] + sum;
    }
    return sum;
};


const myArray = [12, 24, 61, 26, 8, 44, 71, 15, 20, 39]

// call findLargestNum Function
const largenumber = findLargestNum(myArray);
console.log('Largest Number ' + largenumber);

// call findSmallNum Function
const smallnumber = findSmallNum(myArray);
console.log('small Number this Array', smallnumber);

// call totalSumArray Function
const totalSum = totalSumArray(myArray);
console.log(totalSum);

