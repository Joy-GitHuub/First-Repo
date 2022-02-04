console.log('"JavaScript Object Notation"');

/* 
JavaScript Object Notation {JSON};
*/

const user = {
    id: 32,
    name: 'Joy Bose',
    job: 'Programmer'
};
console.log(user);

// JSON.stringify() Method.
const userString = JSON.stringify(user);
console.log(userString);

const shop = {
    name: 'XYZ',
    address: 'AC Rood',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        owner: 'Abdur',
        profession: 'Nothing',
    },
    isExpensive: false,
};
console.log(shop);
const shopString = JSON.stringify(shop);
console.log(shopString);

// JSON.parse() Method
const converted = JSON.parse(shopString);
console.log(converted);
const userConverted = JSON.parse(userString);
console.log(userConverted);