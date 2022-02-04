console.log('"JavaScript If Else Comparison"');

const isFoodReady = true;

// Conditional Decision
if (isFoodReady === true) {
    console.log('I will eat Now');
}
else {
    console.log('I am Waiting for Food');
};


const myBudget = 15000;
const iPhonePrice = 120000;

if (iPhonePrice < myBudget) {
    console.log('IPhone Diya pic tula Futani Marbo!');
}
else {
    console.log('My Mi is the Best !');
};


const chickenPrice = 180;
const myMoney = 50;

if (chickenPrice < myMoney) {
    console.log('Yes !');
}
else {
    console.log('Smashed patato with Lentil Soup');
}

/* 
    Handle Multiple Conditions*** 
    if, else if, else


    Logical Operators**
    and{ && } ,  or{ || } , 
*/

const gotJob = true;
const moneySaved = 150000;
const hasFlat = true;

// && comparison Oparator....
if ((gotJob === true) && (moneySaved >= 200000) && (hasFlat === true)) {
    console.log('Cholo biya kora fali!!!')
}
else {
    console.log('Tor kopala biya nai!!!');
}


// || comparison Oparator...
if ((gotJob === true) && (moneySaved >= 200000) || (hasFlat === true)) {
    console.log('Cholo biya kora fali!!!')
}
else {
    console.log('Tor kopala biya nai!!!');
};