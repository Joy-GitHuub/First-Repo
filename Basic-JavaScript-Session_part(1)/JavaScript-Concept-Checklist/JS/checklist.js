// 

console.log('JavaScript Problem Checklist');

// 1
/* This is JavaScript Comment */

// 2=>  3 type variable declare
let number = 12;
let name = 'Joy Bose';
let isTrue = true;
console.log(typeof number, typeof name, typeof isTrue);


// 3=> simple Math opration {+,   -,  * ,  /,  % }
const num1 = 53;
const num2 = 32;
const sum = num1 + num2;
const difference = num1 - num2;
const multiple = num1 * num2;
const divide = num1 / num2;
const modules = num1 % num2;
console.log(sum, difference, multiple, divide, modules);


// 4=> Comparison Check  
if (num1 === num2) {
    console.log('num1 & num2 value is Equal');
}
else {
    console.log('num1 & num2 value not  Equal');
}

//  5=> Two conditions case-1: fullfill boot conditions case-2: fullfile at least one condition 

const number1 = 12;
const number2 = 234;
const number3 = 23;
const number4 = 12;

if ((number1 === 12) && (number2 > 231)) {
    console.log('First conditions SuccessFull Done');
}
else if ((number1 >= 10) && (number3 === 23) || (number4 <= 10)) {
    console.log('Second Conditions Successfull Done');
}
else {
    console.log('Any One Not Successfully')
}


// 6=> while loop to display 7 to 19 all numbers. only display odd numbers including 7- 19 and other while loop just show even number
let i = 7;
while (i <= 19) {
    // console.log(i);
    i = i + 2;
    // console.log(i);
};

let x = 8
while (x <= 19) {
    // console.log(x);

    console.log(x);

    x = x + 2;
}



// 7=>  declare an array. number of elements update or change 4th position element. add or remove elements. check wether specifice value exists in the array
const array = [23, 63, 14, 77, 52, 81, 13,
    34];
// update 4th no position element
array[4] = 100;
console.log(array);

// remove this array
array.pop();
array.pop();

// add this array
array.push(51, 61);
console.log(array);

// check value exists this array
console.log(array.indexOf(81));


// 8=> use any for loop to display every elements of an Array
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    console.log(arrayElement);
};


// 9=>  you have an array of numbers display only the number bigger than 60 
const biggerArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 60) {
        biggerArray.push(array[i]);
    };
};
console.log(biggerArray);


//  10=> write a function that takes three number and return multiplication of the three numbers
function multiplication(num1, num2, num3) {

    const result = num1 * num2 * num3;

    return result;
};
const giveNumber = multiplication(2, 3, 4);
console.log('function Answer', giveNumber);


//  11=> declare an object and change any property of that Object

const object = { id: 121, name: 'Joy', roll: 29, };
console.log(object);
// change object property
object.id = 234;
object.name = 'Joy Bose';
object.roll = 11;
console.log(object);