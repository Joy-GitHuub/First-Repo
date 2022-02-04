// JavaScript Object Property

console.log('" JavaScript Object Property "');

/* 


How Can Access Object ?
How Can Read Value ?
Change Object Property value
*/

// Declare Object
const computer = {
    price: 35000,
    storage: '120GB',
    color: 'Black',
    processor: 'intel i5',
};

// How Can Access Object ?
console.log(computer);

// How Can Read Value ?
console.log(computer.processor);
console.log(computer.price);

// Change Object Property value ?

// 1 way change Property Value.
computer.storage = '156GB';
console.log('1 way change storage', computer);

// 2 way change Property Value
computer['storage'] = "256GB"
console.log('2 way change storage', computer);

// 3 way change Property value.
const priceProperty = 'price';
computer[priceProperty] = 25000
console.log('3 way change price', computer);