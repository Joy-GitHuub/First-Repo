console.log('"Destructuring Object"')
const fish = {
    id: 54,
    name: 'King Hilsha',
    price: 6000,
    phone: '0152365243',
    address: 'Chandpu',
    dress: 'silver',
};



const fishId = fish.id;
const fishPhone = fish.phone;
const fishPrice = fish.price;
const fishDress = fish.dress;

/*
 console.log(fishId);
console.log(fishPhone);
console.log(fishPrice);
console.log(fishDress); 
*/

const { id, price, name, phone, address, dress } = fish;

console.log(id);
console.log(price);
console.log(name);
console.log(phone);
console.log(address);
console.log(dress);


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Jhon', food: 'chiken' },
    web: {
        work: 'website-development', employe: 33, framwork: 'React',
        tech: {
            first: 'HTML',
            second: 'CSS',
            third: 'JavaScript',
        }
    }
};
/* 
const work = company.web.work;
console.log(work);
*/

const { work, employe, framwork } = company.web;
console.log(work, employe, framwork);
const { food } = company.ceo;
console.log(food);

const { first, second, third } = company.web.tech;
console.log(first, second, third);