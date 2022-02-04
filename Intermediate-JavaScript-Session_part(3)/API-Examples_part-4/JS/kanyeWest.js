console.log('"Kanye West Quote"');

function kanyeWest() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
};

function displayData(data) {
    const kanye = document.getElementById('quote');
    kanye.innerText = data.quote;
    kanye.style.color = 'blue';
    kanye.style.fontSize = '20px';
};