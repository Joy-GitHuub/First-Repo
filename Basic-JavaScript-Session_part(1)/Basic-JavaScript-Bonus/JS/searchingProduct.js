

console.log('"Searching Products"');

const products = [
    { name: 'samsung s3 phone', price: 15000 },
    { name: 'hp Laptop', price: 150000 },
    { name: 'apple smart Watch', price: 12000 },
    { name: 'lg Tv', price: 25000 },
    { name: 'lg Smart phone', price: 55000 },
    { name: 'old granny land phone', price: 10000 },
    { name: 'bosundhara binding paper', price: 80 },
];

function searchProcuts(products, searchText) {

    const matchArray = [];
    const searchTextAnyType = searchText.toLowerCase();

    for (let i = 0; i < products.length; i++) {
        // console.log(products[i]);
        const productName = products[i].name;
        // console.log(productName);

        if (productName.indexOf(searchTextAnyType) !== -1) {
            // console.log(productName);
            matchArray.push(products[i]);
        }
    }
    return matchArray
};

const mySearch = searchProcuts(products, 'OLD');
console.log(mySearch);
