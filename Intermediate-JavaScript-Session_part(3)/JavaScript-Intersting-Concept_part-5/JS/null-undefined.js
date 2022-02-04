console.log('"JavaScript Null & Undefined"');

/* 
Undefined****
1. Variable value not assigned
2. function but didn't write return anything
3. Just wrote return but didn't return any Thing..
4. Parament that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array elements
8. explicitly set value to undefined
*/

/* 
Null*****
*/

let first;
console.log(first);

function second(x, y) {
    const sum = x + y;
};
const result = second(34, 63);
console.log(result);

function add(a, b) {
    const sum = a + b;
    return
    return sum;
};
const addSum = add(34, 44);
console.log(addSum);

function double(a, b) {
    const result = a * b;
    console.log(b);
    return result;
};
double(33);

const fifth = { name: 'Joy', age: 44, location: 'bandarbon' };
console.log(fifth.phone);

const six = [23, 55, 67, 12];
console.log(six[8]);

delete six[2];
console.log(six);

console.log(six[2]);

const seven = undefined;
console.log(seven);



// NuLL
const myObj = { name: 'samad', profession: null };
console.log(myObj.profession);