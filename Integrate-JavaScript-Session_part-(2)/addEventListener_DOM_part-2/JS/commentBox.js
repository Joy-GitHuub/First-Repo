// Commont Box 

console.log('Commont Box');

// post BUTTON
document.getElementById('post-btn').addEventListener('click', function () {
    // console.log('clicked');
    // Post Area Box
    const postArea = document.getElementById('post-area');
    postAreaValue = postArea.value;

    // New Comment Create
    const newComment = document.createElement('p');
    newComment.innerText = postAreaValue;

    // AppendChild New Comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);
    newComment.style.color = 'red';

    // Clean the comment Box
    postArea.value = '';
});