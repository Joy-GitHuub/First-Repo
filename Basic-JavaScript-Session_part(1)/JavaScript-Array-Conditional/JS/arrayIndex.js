// JavaScript Array Index Check...

console.log('JavaScript Array index');

// JavaScript Array Index..


/*
Accessing Array Elements
You access an array element by referring to the index number

*/

// JavaScript Array index number Start 0***
// Note: Array indexes start with 0.
const bookPages = ['Hablu', 'bolod', 'Battery', 'gymansium', 'Bangla',];

// find Battery Index Number
const batteryIndex = bookPages.indexOf('Battery');
console.log(batteryIndex);


const numbers = [45, 98, 91, 88, 35, 72, 39, 63];
console.log(numbers.indexOf(39));

console.log('Not Found Returns ', numbers.indexOf(100));
/*
someThink find this array but not Found this array return index number -1.

Array.indexOf() returns -1 if the item is not found.
*/


// Accessing Array Elements useing Index Number
const secondIndex = numbers[2];
console.log(secondIndex);

const thirdIndexBooks = bookPages[4];
console.log(thirdIndexBooks);



// Changing an Array Element****

console.log(bookPages);
// gymansium out this array..
bookPages[3] = 'Joy Bose';
console.log(bookPages);