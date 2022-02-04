console.log('"Rest Countries API"');

const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCounties(data))
};
loadCountries();

const displayCounties = (counties) => {
    // console.log(counties);
    const countiesContainer = document.getElementById('countries');
    counties.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country')
        /*const h3 = document.createElement('h3');
        h3.innerText = country.name
        const p = document.createElement('p');
        p.innerText = country.capital
        countiesContainer.appendChild(h3);
        countiesContainer.appendChild(p);
         */

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryDetailByName('${country.name}')">Details</button>
        `
        countiesContainer.appendChild(div);
    });
};

const loadCountryDetailByName = (name) => {
    // console.log(name);

    const url = `https://restcountries.com/v3.1/name/${name}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
};

const displayCountryDetail = country => {
    console.log(country.flags.png);
    const countryDiv = document.getElementById('country-detail');

    countryDiv.innerHTML = `
    <h4>Country Name: ${country.name.common}</>
    <h5>Population: ${country.population}</h5>
    <h5>Official: ${country.name.official}</h5>
    <img width=''200px'' src='${country.flags.png}'>
    `
}