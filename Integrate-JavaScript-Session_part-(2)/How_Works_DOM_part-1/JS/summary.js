//  DOM Summary

console.log('"DOM Summary JS"');


// tagName
const blogs = document.getElementsByTagName('p');
console.log(blogs);
for (const blog of blogs) {
    console.log(blog)

    blog.style.border = '2px solid black';
    blog.style.padding = '5px 8px';
};


// id
const specialBlog = document.getElementById('special-blog');
console.log(specialBlog);
specialBlog.innerText = 'Special Blog Apply getElementById';

// createElement & appendChild
const li = document.createElement('li');
li.innerText = 'Friend-11';
const parentLi = document.getElementById('ul');
parentLi.appendChild(li);