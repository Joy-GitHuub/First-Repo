// Dom GetElementsByClass 

console.log('"DOM GetElementsByClassName"');


// all article get useing classname
const articles = document.getElementsByClassName('article');
console.log(articles);

for (const article of articles) {
    console.log(article);
    article.style.border = '2px solid red';
    article.style.margin = '20px'
        ;
    article.style.padding = '10px';
    article.style.color = 'blue';
    article.style.backgroundColor = 'green';
    article.style.fontSize = '20px';
};

const blogs = document.getElementsByClassName('blog');

// console.log(blogs);
for (const blog of blogs) {
    console.log(blog);
    blog.style.color = 'black';
    blog.style.border = '2px solid black';
    blog.style.padding = '10px 5px';
    blog.style.backgroundColor = 'pink';
    blog.style.fontSize = '17px';
};

// id use 
const id = document.getElementById('domUse');
id.innerText = 'This is Not Dom This is BOM';
