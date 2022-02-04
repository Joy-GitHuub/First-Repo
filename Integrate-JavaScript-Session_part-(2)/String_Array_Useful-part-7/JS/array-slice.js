console.log('"Array Slice"');

const numbers = [3, 5, 6, 8, 12, 22, 35, 66];
console.log("first Array", numbers);

const newNumbers = numbers.slice(3, 6);
console.log('slice Array', newNumbers);
// not change Orginal Array
console.log('orginal Array not Change ', numbers);

const numberSpliced = numbers.splice(0, 4);
console.log('splice Array', numberSpliced);
console.log('New Array', numbers);