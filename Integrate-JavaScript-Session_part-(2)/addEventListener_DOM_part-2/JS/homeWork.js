// 

console.log('Event handler & Home Work');

document.getElementById('btn1').addEventListener('click', function () {
    const inputBox = document.getElementById('input-box1');
    const inputBoxValue = inputBox.value;
    console.log(inputBoxValue);
});
document.getElementById('btn2').addEventListener('click', function () {
    const inputBox = document.getElementById('input-box2');
    const inputBoxValue = inputBox.value;
    console.log(inputBoxValue);
});

document.getElementById('sum').addEventListener('click', function () {

    const inputBox = document.getElementById('input-box1');
    const inputBoxValue = inputBox.value;



    // 
    const inputBox2 = document.getElementById('input-box2');
    const inputBoxValue2 = inputBox2.value;
    const number1 = parseFloat(inputBoxValue)
    const number2 = parseFloat(inputBoxValue2);
    const total = number1 + number2;
    console.log(total);
})