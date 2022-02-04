const numbers = [4, 7, 3, 8, 0, 9, 1, 10];

numbers.sort(function sortNum(a, b) {
    return b - a;
});

console.log(numbers);

const sortedBigNumber = numbers.sort(function sortNum(a, b) {
    return a - b;
});
console.log(sortedBigNumber);


const names = ['Joy', 'Abdul', 'Kabul', 'Chayan', 'Yasin', 'Niloy', 'Sojib', 'Shakil'];
console.log(names);

const reverseName = names.reverse();
console.log(names);

const sortName = names.sort();
console.log(sortName);
// Change Full Array
console.log(names);

const reverseName2 = names.reverse();
console.log(names);