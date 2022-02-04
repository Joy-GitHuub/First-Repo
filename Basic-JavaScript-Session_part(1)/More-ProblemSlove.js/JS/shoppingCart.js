// Shopping Cart

console.log('Shopping Cart Total');

const products = [
    { name: 'laptop', price: 45000, quantity: 1, },
    { name: 'shirt', price: 1100, quantity: 4 },
    { name: 'watch', price: 3650, quantity: 1 },
    { name: 'phone', price: 55000, quantity: 1 }
];

// use For loop

let cartTotal = 0;

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);

    const product = products[i];
    const productTotal = product.price * product.quantity;

    cartTotal = productTotal + cartTotal;

};

console.log('cart Total', cartTotal);