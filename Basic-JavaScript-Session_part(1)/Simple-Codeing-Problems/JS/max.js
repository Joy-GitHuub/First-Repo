// JavaScript Max 

console.log('Find Max of two values');

const business = 450;
const minister = 500;
const army = 520;
// Find max Large way

if (business > minister && business > army) {
    console.log('Business Person er pola is bigger');
}
else if (minister > business && minister > army) {
    console.log('Minister er pola is bigger');
}
else {
    console.log('Army is Bigger');
}


const max = Math.max(business, minister, army);
console.log(max);


// Math.max use a Function Find bigger number
function findLargest(first, second, third) {
    return Math.max(first, second, third);
};
const larger = findLargest(4, 6, 9);
console.log('This number is larger ' + larger);


// Math.min use a Function find smallest Number
function smallest(first, second, third) {
    return Math.min(first, second, third);
};
const min = smallest(23, 17, 21);
console.log('This Number is Smallest ' + min);