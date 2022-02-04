// 1 Steps Get Post Button
document.getElementById('post-btn').addEventListener('click', function () {
    // check Button Get
    console.log('Clicked');

    // 2 Steps Get Post Area Box
    const textArea = document.getElementById('post-area');
    const textAearValue = textArea.value;
    // User Comment Get
    console.log(textAearValue);

    // 3 Steps Create New Comment Place
    const newComment = document.createElement('p');
    // InnerText Set newComment
    newComment.innerText = textAearValue;
    newComment.style.color = 'blue';

    // 4 Steps
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    document.getElementById('post-area').value = '';
});
