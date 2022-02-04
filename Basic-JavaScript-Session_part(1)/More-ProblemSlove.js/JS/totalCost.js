//  Total Price 

console.log('Total Cost Products');

// Declare A Array 
const products = [
    { name: 'laptop', price: 45000 },
    { name: 'shirt', price: 1100 },
    { name: 'watch', price: 3650 },
    { name: 'phone', price: 55000 }
];

let productsTotalPrice = 0;

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product);
    productsTotalPrice = productsTotalPrice + product.price;
};
console.log('All Product Total Price ', productsTotalPrice);