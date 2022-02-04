console.log('javaScript Advance Array And Loop');





// Array Number give us User

// Empty Array
const userNumbers = new Array();
console.log(userNumbers);

for (let i = 0; i < 5; i++) {
    userNumbers[i] = parseInt(prompt('Enter a Number :  '))
}

let userSum = 0;

for (let i = 0; i < userNumbers.length; i++) {
    console.log(userNumbers[i]);
    userSum = userSum + userNumbers[i];
};
console.log('Sum =' + userSum);