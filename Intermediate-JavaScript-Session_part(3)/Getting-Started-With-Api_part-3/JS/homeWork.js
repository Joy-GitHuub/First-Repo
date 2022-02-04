console.log('"JavaScript JSON"');

/* function loadData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayData(data))
};

loadData();
function displayData(albums) {
    const albumsContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.innerText = `${album.title}`
        p.style.color = 'blue';
        p.style.fontSize = '18px'
        albumsContainer.appendChild(p);
    };
}; */

function loadImg() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImg(data))
};
loadImg();

function displayImg(images) {
    const imageContainer = document.getElementById('albums');
    for (const image of images) {
        const img = document.createElement('img');
        img.src = `${image.url}`;
        img.style.width = '100px'
        img.style.border = '2px solid black';
        img.style.margin = '5px';
        imageContainer.appendChild(img)
    }
}