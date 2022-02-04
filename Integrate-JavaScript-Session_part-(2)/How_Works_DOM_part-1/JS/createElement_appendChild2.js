//createElement & appendChild

console.log('"CreateELement & AppendChilds"');

const blogs = document.getElementsByClassName('blog');




// create new blog
const article = document.createElement('article');

const h3 = document.createElement('h3');
const p = document.createElement('p');


// innerText
h3.innerText = 'My Awesome Blog-5';
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae esse laborum provident repellendus sapiente saepe vel asperiores animi recusandae.';

// appendChild
article.appendChild(h3);
article.appendChild(p);

// get Parent Child 
const section = document.getElementById('section');
section.appendChild(article);

// add class name New Blog
article.classList.add('blog');

// Heading Name Blog add Class
h3.classList.add('blog-heading');


for (const blog of blogs) {
    blog.style.border = '2px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.margin = '5px';
    blog.style.padding = '5px';
};

// all Blog Heading name
const blogsHeadings = document.getElementsByClassName('blog-heading');
console.log(blogsHeadings);
for (const blogsHeading of blogsHeadings) {
    blogsHeading.style.color = 'blue';
    blogsHeading.style.border = '2px solid black';
    blogsHeading.style.padding = '5px 8px';
    blogsHeading.style.borderRadius = '10px';
};