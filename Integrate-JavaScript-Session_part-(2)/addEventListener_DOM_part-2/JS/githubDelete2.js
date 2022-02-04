// Simple github like delete confirmation button

console.log('"Simple github like delete confirmation button"');

document.getElementById('delete-type').addEventListener('keyup', function (event) {

    const inputFiledValue = event.target.value;
    const deleteButton = document.getElementById('delete');

    if (inputFiledValue === 'delete') {
        deleteButton.removeAttribute('disabled');
        document.body.style.backgroundColor = 'white';
    }
    else {
        deleteButton.setAttribute('disabled', true);
    };
});

document.getElementById('delete').addEventListener('click', function () {
    console.log('clicked');
    document.getElementById('secret-info').style.display = 'none';
});

document.getElementById('delete-type').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
})
// blur
document.getElementById('delete-type').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
});
