// JavaScript Recap 4 Topic

console.log(' "JavaScript React 4 Topic" ');


/* 
Array Topic*******
*/

// Declear Variable
const favoriteBook = '4 hour work week';

// Declear Array
const bookList = ['positioning', 'hooked', 'start with why', 'shoe dog', '4 hour work week'];
console.log(bookList);

// Array length
console.log('bookList array Length', bookList.length);

// How Can find shoe dog position in Array.
const shoeDogIndex = bookList.indexOf('shoe dog');
console.log('Shoe dog index position in Array', shoeDogIndex);

// Changing '4 hour work week' element this array
bookList[4] = 'Story Brand';
console.log('New Array', bookList);

// Add And Remove this array
bookList.pop();
bookList.push('Small Brand');
console.log(bookList);

// use Array index find elements
const thirdElement = bookList[3];
console.log('This is Third Element ', thirdElement);



/* 
Condition In JavaScript****
*/
if (bookList[1] === 'hooked') {
    console.log('I am Hooked');
}
else {
    console.log('I am Not Hooked');
}



/* 
 Loop Method***** 
*/

let i = 0; // loop variable;
// While loop Declear
while (i <= 10) {
    console.log(i);
    i++;
}

// for loop Declear
for (let i = 0; i <= 15; i++) {
    console.log(i);
};



/* 
for loop use in a Array****
*/
for (let i = 0; i < bookList.length; i++) {
    let element = bookList[i];
    console.log(i, element);
}





