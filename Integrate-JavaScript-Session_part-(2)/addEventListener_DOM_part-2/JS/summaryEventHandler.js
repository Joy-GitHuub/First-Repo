// 

console.log('Summary Event Handler');

// p
const p = document.getElementById('p');


function handleClickFunction() {
    const clickMethod = document.getElementById('p');
    clickMethod.innerText = 'Set by Using Function onClick';
    clickMethod.style.color = 'blue';
    clickMethod.style.fontSize = '22px';
};

const id = document.getElementById('clickID').addEventListener('click', () => {
    const p = document.getElementById('p');
    p.innerText = 'Set by Using Function ID';
    p.style.color = 'red';
    p.style.fontSize = '22px';
});