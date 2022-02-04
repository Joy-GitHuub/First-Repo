console.log('JavaScript Conversion Types');

const firstName = 'Joy';
const lastName = 'Bose';

let fullName = firstName + lastName;
console.log(fullName);

// Use ' ' Empty....
let fullName2 = firstName + ' ' + lastName;
console.log(fullName2);


// Number & String Sum...

const num = 58;
const string = '30';
console.log(num + string);


/*
    Number Types

    1. Integer Type Number 100;
    2. Float Type Number 99.99;
*/

// A string to Convert A Number


// parseInt(use for integer Type Numbers);
// **parseInt() ignore float Numbers .4332 
const stringNum = parseInt(string);
console.log('Integer Type String Convert A Integer Number', num + stringNum);


// parseFloat(use of Float Type Numbers);
const stringFloat = '21.234';
const numFloat = parseFloat(stringFloat);
console.log('Float Type String Convert A Float Number ', num + numFloat);


const strNum = '134';
const floNum = '90.23';
const total = parseInt(strNum) + parseFloat(floNum);
console.log('Intger Num & Float Num Sum', total);



// Special Edition*****

const fNum = .1;
const sNum = .2;
const sum = fNum + sNum;
console.log('Special Edition', sum);

// How Can Fixed This.
// change toFixed( inside number need You  )
const toFixed = sum.toFixed(2);

// toFixed convert num to String
const toFixedType = typeof toFixed;

console.log('use toFixed Method ', toFixed);
console.log('"toFixed have a Problem this number convert to String"  ', toFixedType);

// use parseFloat or parseInt Help toFixed string convert Number
console.log('use parseFloat or parseInt For fixed this bugs ', parseFloat(toFixed));
