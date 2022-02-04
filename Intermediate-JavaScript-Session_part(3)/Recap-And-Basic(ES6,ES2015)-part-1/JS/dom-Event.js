console.log('"Dom And Event Recap"');

document.getElementById('add-border').addEventListener('click', function () {
    console.log('Add Border');
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
};

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New friend</h3>
            <p>Obcaecati, suscipit veritatis.</p>
    `;
    container.appendChild(friendDiv);
});