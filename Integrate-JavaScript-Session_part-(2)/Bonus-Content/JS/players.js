console.log('"Players JavaScript"');

document.getElementById('players').addEventListener('click', function (event) {
    console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() === 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'red';
    }
})

function addPlayer() {
    const playersContainer = document.getElementById('players');

    const player = document.createElement('div');
    player.classList.add('player');


    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Ipsam at libero veniam quos nemo, neque quasi culpa odit blanditiis quam voluptatibus? Blanditiis necessitatibus delectus saepe non, ut quisquam mollitia beatae accusamus quo reprehenderit, illum laudantium, odit a incidunt?</p>
    `;


    setPlayerStyle(player);
    playersContainer.appendChild(player);

}

function setPlayerStyle(player) {
    player.style.border = '2px solid black';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';
}

const players = document.
    getElementsByClassName('player');

for (const player of players) {


    setPlayerStyle(player);

    player.addEventListener('click', function () {
        player.style.backgroundColor = 'yellow';
    })

}



const query = document.querySelector('#first-child');
query.style.backgroundColor = 'blue';
query.style.color = 'white';
query.style.fontSize = '18px';



