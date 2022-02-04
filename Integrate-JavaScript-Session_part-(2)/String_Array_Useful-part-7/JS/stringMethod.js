console.log('"String Method"');

const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

// split
const words = anthem.split(' ');
const withOutA = anthem.split('a');


// slice
const smallSlice = anthem.slice(5, 13);

// substr
const anotherPart = anthem.substr(5, 10);

// substring
const anotherAnotherPart = anthem.substring(11, 15);

// concat
const first = 'Joy';
const last = 'Bose';
const concatString = first.concat(last).concat('ABC');

// join
const word = ['a', 'b', 'c', 'd', 'e', 'f'];
/* const allJoin = word.join('');
const allJoin = word.join(' '); */
const allJoin = word.join(', ');

console.log(words);
console.log(withOutA);
console.log(smallSlice);
console.log(anotherPart);
console.log(anotherAnotherPart);
console.log(concatString);
console.log(allJoin);

/* 
1. split
2. Slice
3. substr
4. substring
5. concat
6. join
*/

// array Slice
const array = [32, 62, 673, 723, 2, 737,];
console.log(array.slice(0, 3));
