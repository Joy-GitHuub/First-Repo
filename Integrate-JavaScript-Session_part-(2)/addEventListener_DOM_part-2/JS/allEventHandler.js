// All EventHandler

console.log('"All EventHandler"');


// 2nd Way*******
function makeRed() {
    document.body.style.backgroundColor = 'red';
};

// 3rd Way *********

// first get button
const thirdBtn = document.getElementById('thirdBtn');
// just set the name of the function
thirdBtn.onclick = makeBlue;
// declare a function
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
};


// 4 Way **********

// first get buttn
const foruBtn = document.getElementById('fourBtn');
// declare anonymous function
foruBtn.onclick = function () {
    document.body.style.backgroundColor = 'green';
}



// Most Use way Event Handler
// 1
const mostUse = document.getElementById('mostUse');
mostUse.addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});

// 2
const hotPInk = document.getElementById('hotPInk');
hotPInk.addEventListener('click', hotPink)
function hotPink() {
    document.body.style.backgroundColor = 'hotpink';
};

// easy way most use
document.getElementById('lightBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});