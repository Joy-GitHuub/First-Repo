// 

console.log('Cheapest Phone Finding Object');

const phones = [
    {
        name: 'samsung s5', price: 45000, camera: 10, storage: 32
    },
    {
        name: 'walton m32', price: 15000, camera: 8, storage: 8
    },
    {
        name: 'Shaomi m3', price: 12000, camera: 8, storage: 4
    },
    {
        name: 'oppo a2', price: 16000, camera: 8, storage: 16
    },
    {
        name: 'htc h81 ', price: 10000, camera: 8, storage: 4
    },
    {
        name: 'vivo a6', price: 18000, camera: 8, storage: 16
    },
    {
        name: 'nokia ', price: 30000, camera: 8, storage: 32
    },

];

// Find out cheapest Phone this Array..

// hold first index item
let cheapest = phones[0];

for (let i = 0; i < phones.length; i++) {

    const element = phones[i];

    if (element.price <= cheapest.price) {
        // set cheapest price
        cheapest = element;

    }

};
console.log('Lowest Mobile Price ', cheapest);


// Find Out lowest Storage Phone An Array

// hold first index item
let cheapestStorageItem = phones[0];
console.log(cheapestStorageItem.price, cheapestStorageItem.storage);

for (let i = 0; i < phones.length; i++) {
    // console.log('storage', phones[i]);

    const element = phones[i];


    if ((element.price <= cheapestStorageItem.price) && (element.storage <= cheapestStorageItem.storage)) {
        cheapestStorageItem = element;

    }
};
console.log('cheapest Phone Price && Storage ', cheapestStorageItem)
