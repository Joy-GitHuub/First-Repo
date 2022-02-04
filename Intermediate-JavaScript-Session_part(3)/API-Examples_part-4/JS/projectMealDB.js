console.log('"Project MealDB"');
const searchResult = document.getElementById('search-result');

const searchFood = () => {

    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;

    if (searchField.value === '') {
        alert('Please Some Thing Found')
        return;
    }

    searchField.value = '';

    /* 
    2 way Remove Previous Search Result 
    */
    searchResult.innerHTML = '';
    // searchResult.textContent = '';
    // console.log(searchFieldText);



    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))


};

const displaySearchResult = (data) => {
    // console.log(data.meals);
    const meals = data.meals
    console.log(meals);
    if (meals === null || meals.length === 0) {
        console.log('Nothing Found');
        return
    }

    // console.log(searchResult);
    meals.forEach(element => {


        const { strMealThumb, strMeal, strInstructions, idMeal } = element;

        const div = document.createElement('div');

        div.innerHTML = `
        <div onclick='loadMealDetail(${idMeal})' class="col" " data-bs-toggle="modal" data-bs-target="#exampleModal" class="card" style="cursor:pointer";>
        <div class="card h-100">
          <img height='50%' src="${strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">${strInstructions.slice(0, 220)}</p>
          </div>
        </div>
      </div>
        `

        searchResult.appendChild(div);

    });
};

const loadMealDetail = (mealID) => {
    // console.log(mealID);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
};

const displayMealDetail = data => {
    const modalHeader = document.getElementById('modalHeader');
    const modalBody = document.getElementById('modalBody');
    modalHeader.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `
    modalBody.innerHTML = `
        <img width="300px" src="${data.strMealThumb}" />
        <h2>${data.strMeal}</h2>
        <p>${data.strInstructions.slice(0, 300)}</p>
    `
};