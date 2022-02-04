// Simple Problem Solving

console.log('"Simple Problem Solving"');


// conversion  feet To Inchs
function feetToInchs(feet) {
    const oneInch = 12;
    const result = feet * oneInch;
    return result;
};
const myFeet = feetToInchs(32);
console.log('Feet', myFeet);


// conversion centimeter to meter
function centimeterToMeter(centimeter) {
    const oneMeter = 0.01;
    const result = centimeter * oneMeter;
    return result;
};

const myCentimeter = centimeterToMeter(1000);
console.log('Meter', myCentimeter);


// calculation Page Requirements
/* 
book1 has 100 pages
book2 has 200 pages
book3 has 300 pages
function prameter book quantity
*/
function pageRequirements(book1, book2, book3) {

    const book1Quantity = book1;
    const book2Quantity = book2;
    const book3Quantity = book3;

    // per Book pare Requirements
    const perbook1Page = 100;
    const perbook2Page = 200;
    const perbook3page = 300;

    // per books Total  page Requirements
    const perBook1PageRequirements = book1Quantity * perbook1Page;
    const perBook2PageRequirements = book2Quantity * perbook2Page;
    const perBook3PageRequirements = book3Quantity * perbook3page;

    // Total All Books Page 
    const total = perBook1PageRequirements + perBook2PageRequirements + perBook3PageRequirements;

    return total;

};

const bookQuantity = pageRequirements(1, 1, 1);
console.log(bookQuantity);


// array friends bigger name friend Find
const bestFriend = ['Joy', 'Bose', 'papry', 'sapna', 'Majumder', 'Niloy', 'Chayan', 'Papry Bose', 'Uzzal Bose'];


let biggerName = bestFriend[0];

for (let i = 0; i < bestFriend.length; i++) {

    const name = bestFriend[i];
    console.log(name.length);

    if (name.length > biggerName.length) {
        biggerName = name;

        continue;
    }
};
console.log(biggerName);


// will stop the loop if the array has any negative number and returns all the positive number before the negative number  OnlyPositive 
const numberArray = [2, 5, 6, 11, 16, 44, 72, -15, 3, 0, 23, 25];

const newArray = [];

for (let i = 0; i < numberArray.length; i++) {
    const element = numberArray[i];

    if (element > 0) {
        console.log(element);
        newArray.push(element);
    }
    else {
        break;
    }

};
console.log(newArray);