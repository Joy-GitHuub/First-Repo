// 

console.log("event Comon");

// 1way
function handleJustFunctionClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set By Function Call first BUTTON';
    p.style.color = 'blue';
};

// 2 way
document.getElementById('handle-event').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set By direct add Event Listener';
    p.style.color = 'red';
});

// click Function
function handleClickFunction() {
    document.getElementById('p');
    p.innerText = 'This is Handle Click Function';
    p.style.color = 'green';
    p.style.fontSize = '20px';
};


// Update Input Box
const inputBox = document.getElementById('input-box');