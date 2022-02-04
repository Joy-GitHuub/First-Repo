// JavaScript Basic Problem

console.log('" JavaScript Basic Problem Miles To Kilometer "');

function milesToKilometer(miles) {
    const oneKilometer = 1.60934;
    const Kilometer = miles * oneKilometer;
    return Kilometer;
};

const myMiles = 11;
const result = milesToKilometer(myMiles);
console.log(result);
