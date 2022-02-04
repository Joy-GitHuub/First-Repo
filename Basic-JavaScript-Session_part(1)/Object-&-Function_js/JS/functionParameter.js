// JavaScript Function Parameter

console.log(' "JavaScript Function Parameter" ');

function bringSingara(taka) {

    console.log('Singara er jonno disa', taka);
    console.log('Mama Singara den');

    // Function Return Something;
    const singaraPrice = 10;
    const singaraQuantity = taka / singaraPrice;
    return singaraQuantity
};

const giveMoney = 120;
const singra = bringSingara(giveMoney);
console.log('singra Quantity', singra);


// Function Declare...
function giveNumber(num) {

    if (num >= 100) {
        return console.log('This Number Getter then 100');
    }
    else if (num >= 90) {
        return console.log(' This Number Getter then 90');
    }
    else if (num >= 80) {
        return console.log('This number Getter Then 80');
    }
    else {
        return console.log('This Number less then 80');
    }

}
const number = 90;
const callFunction = giveNumber(number);

