console.log('"Array Destructuring, nested object Optional chaining"')

// Object Destructuring
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 55, c: 44 };
const { x, b, c } = myObject;

console.log(x, b, c);

// Array Destructuring
const [p, q] = [11, 44, 22, 55];
console.log(p, q);

const [best, friend] = ['Joy', 'Bose'];
console.log(best, friend);



// Some Thing
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

console.log(company.web.tech.third);
console.log(company.web.tech.forth);
/*
Handle This Error
console.log(company.web.tech.forth.work);
 */
// use Optional chaining
console.log(company.web?.tech?.forth?.work);
console.log(company?.name);