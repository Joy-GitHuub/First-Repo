//  JavaScript String Concept

console.log(' "JavaScript String" ');

// Declare String..
// String is Immutable
// String.push is not a function
const myString = 'I love my Bangladesh';

// string length Check
console.log(myString.length);

// Access myString Element
console.log(myString[0]);

// Access full String use in Array
const volwes = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
const array = [];
for (let i = 0; i < myString.length; i++) {
    console.log(myString[i]);

    if (volwes.includes(myString[i])) {
        array.push(myString[i]);
    };

};
console.log('Total Value an Array ' + array.length);