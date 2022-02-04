console.log('"Class, constructor, method, create object from class"');

class Support {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    session() {
        console.log('Start a Support Session');
    };
};

const joy = new Support('joy', 'BD');
const salman = new Support('Salman', 'INDIA');
const amir = new Support('Amir', 'DUBAI');
const kobutor = new Support('Kobutor', 'KB');

console.log(joy);
console.log(salman);
console.log(amir);
console.log(kobutor);

class Products {
    name;
    price;
    quantity;
    color;
    constructor(name, price, quantity, color) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.color = color;
    };

    buyProduct() {
        console.log('Buy This Product-', this.name, 'Price:-', this.price)
    }
};
const tv = new Products('TV', 25000, 1, 'Black');
const phone = new Products('Phone', 15000, 2, 'Black');
const laptop = new Products('Laptop', 50000, 1, 'Black');
const soundBox = new Products('Sound Box', 5000, 1, 'White');


console.log(tv);
console.log(phone);
console.log(laptop);
console.log(soundBox);

phone.buyProduct();
laptop.buyProduct();
