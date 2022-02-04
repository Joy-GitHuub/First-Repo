const products = [
    'Dell hardcore i9 120GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow Laptop with black camera',
    '1x59 Lenovo commercial yogo laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with LAPTOP',
    'iphone  phone with 120GB',
];
const searching = 'iphone';

const outPut = [];
const outPut2 = [];

for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) !== -1) {

        outPut.push(product);
    }
}
console.log(outPut);

// 
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        outPut2.push(product)
    }
}
console.log(outPut2);

for (const prodcut of products) {
    if (prodcut.toLowerCase().startsWith(searching.toLowerCase())) {
        console.log(prodcut);
    }
}


/* 
1. Apply Search
2. Search includes,
3. Search indexOf
4. Search startswith,
5. Search endswith
6. Apply toLowerCase()
7. Apply toUperCase().
*/