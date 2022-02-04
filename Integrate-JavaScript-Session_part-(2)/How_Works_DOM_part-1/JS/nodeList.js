// NODELIST DOM 

console.log('"NodeList, HTMLCollection, setAttribute, parentNode, Childnodes"');


/* 

1. Element_Node   {Value= 1}
2. Attribute_Node   {Value= 2}
3. Text_Node   {Value= 3}
4. Cdata_Section_Node  {Value= 4}
5. Processing_Instruction_Node {Value= 7}  
6. Comment_Node   {Value= 8}
7. Document_Node   {Value= 9}
8. Document_Type_Node  {Value= 10}
9.  Document_Fragment_Node {Value= 11}

*/


// NodeList
const thirdBlog = document.querySelectorAll('#third-blog');
console.log(thirdBlog);



// HTMLCollection
const blogs = document.getElementsByClassName('blogs');
console.log(blogs);
console.log(blogs.length);


// HTMLCollection
const tagsNames = document.getElementsByTagName('p');
console.log(tagsNames);
for (const tagName of tagsNames) {
    console.log(tagName);
    tagName.style.border = '3px solid black';
    tagName.style.padding = '5px 8px';
    console.log(tagName.getAttribute('style'));
};

// setAttribute
const heading = document.getElementById('domHeading');
console.log(heading);
heading.setAttribute('title', 'This is DOM Exploring');

// parentNode
console.log(heading.parentNode);


// parentElement
const firstNode = document.getElementById('first-blog');
console.log(firstNode.parentElement);

// childnodes
console.log(firstNode.childNodes[0].nodeValue);