console.log('"Display Load Data"');

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
};

function displayData(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `User Name: ${user.name}, User Email: ${user.email}`
        li.style.color = 'blue';
        li.style.fontSize = '17px';
        ul.appendChild(li);
    };
};