// HTML elements in JS by Using tag name

console.log('"HTML Elements using js"');

/* 
Use Tag name Access HTML 
*/


/*
getElementsByTagName(); 

this tag give us like of Array (this is  not array).
*/
const blogTitle = document.getElementsByTagName('h3');
console.log(blogTitle);


// access parants tag in HTML {innerHTML, innerText}

const articles = document.getElementsByTagName('article');
console.log(articles);
for (const article of articles) {
    console.log(article);
}


