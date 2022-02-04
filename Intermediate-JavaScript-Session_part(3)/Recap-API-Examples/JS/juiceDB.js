console.log('"Juice DB"');

document.getElementById('search-btn').addEventListener('click', () => {
    const input = document.getElementById('input');
    const inputText = input.value;
    if (inputText.length > 0) {
        document.getElementById('spinner').classList.remove('d-none');
        getData(inputText)
    }
    else {
        alert('No Input ');
    }
    console.log(inputText);
    input.value = '';
});

function getData(inputText) {
    if (inputText.value === 1) {

        /* fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`)
            .then(res => res.json())
            .then(data => console.log(data)) */
    } else {

        /*         fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`)
                    .then(res => res.json())
                    .then(data => console.log(data)) */
    }
};

const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function juiceCards() {

}