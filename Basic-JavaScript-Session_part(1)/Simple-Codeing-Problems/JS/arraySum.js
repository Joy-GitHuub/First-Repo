// 

console.log('Array Sum');

const numbers = [23, 62, 98, 12, 18, 42];

// for loop declare 
//  for loop veriable
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    // access Array element
    const element = numbers[i];
    sum = element + sum
    console.log(numbers[i], sum);
};
console.log(sum);


// array number total sum Use a Function

//Declare Function
function arrayTotal(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        // Access Array element
        const element = number[i];
        sum = element + sum;
    }
    return sum;
};

const myArray = arrayTotal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(myArray);