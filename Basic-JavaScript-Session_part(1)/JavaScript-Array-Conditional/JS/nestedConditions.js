// JavaScript Nested Conditions

console.log('"JavaScript Nested Conditions"');

// variable declears
const danishPrice = 50;
const butterBreadPrice = 25;
const toastBiscuitPrice = 10;
const packedWell = false;
const myBudget = 15;

// Conditions 
if (danishPrice < myBudget) {
    console.log('Danis kyeye danis Jabo');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon diya cha khamu');
}
else if (toastBiscuitPrice < myBudget) {
    console.log('toast Biscuit Khamu');
}
else {
    console.log('Batas dia cha khamu')
}

/* 
if use Just 1 time
else if use again and again
else use just 1 time
*/


/* 
Nested Conditions
*/

if (danishPrice > myBudget) {
    if (packedWell === true) {
        console.log('Danish Khabo');
    }
    else {
        console.log('Danish khamu na ! Karon ami khawar age machi kheye felse ordek ');
    }
}
else {
    console.log('Tak Danish Khabo na');
}