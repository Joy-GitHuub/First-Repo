console.log('"Function Arguments"')


// user give Any Number Never Use This Method..
function addNumbers() {
    console.log(arguments);
    let result = 0;
    for (const number of arguments) {
        // console.log(number);
        result = result + number;
    }
    return result;
};
const sum = addNumbers(33, 7, 20, 40, 50);
console.log(sum);


// user Give Array Numbers
const numbers = [12, 54, 77, 23, 44, 90];
function sumNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
};
console.log(sumNumbers(numbers));


function getFullName() {
    let fullName = ''
    for (const part of arguments) {
        fullName = fullName + ' ' + part;
    }
    return fullName;
};

const name = getFullName('Hanif', 'songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Jakono', 'Songket');
console.log(name);