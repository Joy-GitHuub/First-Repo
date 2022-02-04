// JavaScript Loop Break Continue

console.log('While Loop & For Loop Break and Continue');

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i === 5) {
//         console.log('Inside condition', i)
//         break;
//     };
//     i++;
// };

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 3) {
//         break;
//     }
// };


const numbers = [23, 63, 26, 44, 89, 92, 57, 12, 28];
const array = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 80) {
        // break;
        continue;

    }
    array.push(number);
    console.log(number);
};
console.log(array);
