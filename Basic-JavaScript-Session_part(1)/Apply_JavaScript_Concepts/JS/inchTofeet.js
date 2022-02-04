// JavaScript Basic Problem

console.log('"JavaScript Basic Problem inch to feet"');

const inches = 132;
const feet = inches / 12;
console.log('feet =', feet);

// 
const dadiInches = 144;
const dadiFeet = inchToFeet(dadiInches);
console.log('dadiFeet', dadiFeet);

/* 
This case use Function 
Ja kaj ta kisu kon por por korta hoy tar jono function use korbo.  
*/

function inchToFeet(inch) {
    const Onefeet = 12;
    const feet = inch / Onefeet;
    return feet;
};
const myInches = 111;
const myFeet = inchToFeet(myInches);
console.log('My Feet', myFeet);

const myMoMInches = 200;
const momFeet = inchToFeet(myMoMInches);
console.log('MoM Feet', momFeet); 