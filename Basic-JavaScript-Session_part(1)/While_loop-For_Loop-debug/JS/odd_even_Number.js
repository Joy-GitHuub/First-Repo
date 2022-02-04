// JavaScript While Loops

console.log('"JavaScript While Loop Example"');


// Declear Variable
let number = 0; // Loop variable

// increase 10 time
while (number <= 10) {
    console.log(number);
    number++;
};

let oddNumber = 1;
let evenNumber = 0;
// Just oddNumbers Allow This Loop
const oddArray = [];
while (oddNumber <= 20) {
    console.log('This is Odd Number', oddNumber);
    oddArray.push(oddNumber);
    oddNumber = oddNumber + 2;

};
console.log('This is Odd numbers Array', oddArray);



// // Just evenNumbers Allow This Loop
const evenArray = [];
while (evenNumber <= 20) {
    console.log('This is Even Number', evenNumber);
    evenArray.push(evenNumber);
    evenNumber = evenNumber + 2;
}
console.log('This is Even Numbers Array', evenArray);