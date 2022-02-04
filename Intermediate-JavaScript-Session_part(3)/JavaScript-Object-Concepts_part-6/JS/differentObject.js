console.log('"JavaScript Object Concept"');

// 1 Using Object literal
const student = { name: 'Joy Bose', job: 'Student' };
console.log(student);

// 2 Object Constructor
const person = new Object();
console.log(person);

// 3
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.name);

// 4
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age
    };
};

const peop = new People('Manus', 12);
console.log(peop);

// 5 Function
function Manus(name) {
    this.name = name;
};
const man = new Manus('Kader');
console.log(man);