// Input Parameter Error

console.log('Handle Unexpected function input parameter error');

// add Function
function add(num1, num2) {


    if ((typeof num1 == 'number') && (typeof num2 == 'number')) {
        const sum = num1 + num2;
        return sum;
    }
    else {
        return false;
    }

};

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
};

// call add Function
const firstTotal = add(12,);
console.log('Input ' + firstTotal);

// call multiply Function
const firstMultiply = multiply(13, 2);
console.log(firstMultiply);