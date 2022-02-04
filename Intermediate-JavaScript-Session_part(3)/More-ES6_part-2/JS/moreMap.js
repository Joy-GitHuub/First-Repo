const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom & Jarry'];

console.log(friends);

const friendLength = friends.map(friend => friend.length);
console.log(friendLength);

const products = [
    { name: 'water bottle', price: 50, color: 'Yellow' },
    { name: 'Mobile Phone', price: 10000, color: 'Black' },
    { name: 'Computer', price: 40000, color: 'Black' },
    { name: 'Smart Watch', price: 3000, color: 'Black' },
    { name: 'Sticky Note', price: 30, color: 'Pink' },
];

// const output = products.map(product => console.log(product.name));

// Product Name
const productName = products.map(product => product.name);
console.log(productName);
// product Price
const productPrice = products.map(product => product.price);
console.log(productPrice);


// ForEach Like of map
/* products.forEach(product => console.log(product)) */

const myFunction = (item, index, array) => {
    // console.log(item);
    // console.log(index);
    // console.log(array);
};

friends.forEach(myFunction);

products.map(myFunction);


