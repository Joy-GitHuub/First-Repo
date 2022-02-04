document.getElementById('btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field').value;

    const div = document.createElement('div');
    const p = document.createElement('p');
    p.style.backgroundColor = 'blue';
    p.style.padding = '10px 15px';
    p.style.border = '2px solid black';
    p.style.color = 'white';

    p.innerText = inputField;
    div.appendChild(p);

    const section = document.getElementById('section-part');
    section.appendChild(div);

    document.getElementById('input-field').value = '';

})