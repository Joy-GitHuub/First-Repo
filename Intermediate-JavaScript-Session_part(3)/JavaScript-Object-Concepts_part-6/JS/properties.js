console.log('"JavaScript Propraty"');


/* 
color: Yellow,
keys: values,
*/

const bottle = {
    color: 'Yellow',
    hold: 'Water',
    price: 80,
    isCleaned: true,
};
const keys = Object.keys(bottle);
console.log(keys);

const property = Object.values(bottle);
console.log(property);