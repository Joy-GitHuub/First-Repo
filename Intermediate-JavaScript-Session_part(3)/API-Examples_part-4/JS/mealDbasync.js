console.log('"JavaScript Async & Await"');

const loadMealDetail = async () => {
    const url = ``
    const res = await fetch(url)
    const data = await res.json();

    return data;
};