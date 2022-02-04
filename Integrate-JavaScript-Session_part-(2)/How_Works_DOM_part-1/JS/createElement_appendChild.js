// CreateElements and AppendChild

console.log('"CreateElements and AppendChild"');

// create & Add Elements JavaScript


// 1 steps Create the Element
const li = document.createElement('li');

// 2 steps  inside text
li.innerText = 'Blog-5';

// 3 steps where to add get this element
const ul = document.getElementById('ul');

// 4 steps appendChild
ul.appendChild(li);


// add Article
const article = document.createElement('article');
const h3 = document.createElement('h3');
h3.innerText = 'My Awesome Blog-5';
const p = document.createElement('p');
p.innerText = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
article.appendChild(h3);
article.appendChild(p);



// parent of Article
const blogSection = document.getElementById('blogs');
li.appendChild(article);