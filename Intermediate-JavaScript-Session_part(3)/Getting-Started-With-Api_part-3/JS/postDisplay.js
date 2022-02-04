console.log('"Post Display Use API"');

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
};

loadPosts();

function displayPosts(posts) {
    // console.log(posts);
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')

        /*         const h2 = document.createElement('h2');
                const p = document.createElement('p');
        
                h2.innerText = `${post.title}`;
                p.innerText = `${post.body} `;
                 */
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `


        postContainer.appendChild(div);
    };
};