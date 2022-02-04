

console.log('"Break Continue"');

const products = [
    { name: 'samsung s3 phone', price: 15000 },
    { name: 'apple smart Watch', price: 12000 },
    { name: 'lg Tv', price: 25000 },
    { name: 'lg Smart phone', price: 55000 },
    { name: 'old granny land phone', price: 10000 },
    { name: 'hp Laptop', price: 150000 },
    { name: 'bosundhara binding paper', price: 80 },
    { name: 'dell laptop', price: 41000 },
    { name: 'lenovo laptop', price: 35000 },
];

/* 
Need You Just array element this time use for of  
*/

// Use Break condition
for (const product of products) {
    // console.log(product);
    if (product.price <= 10000) {
        // console.log(product)
        break;
    }
    // console.log(product);
};


for (const product of products) {

    if (product.price <= 10000) {

        continue;

    } console.log(product);
}



