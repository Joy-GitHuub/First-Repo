document.getElementById('input').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
});
document.getElementById('input').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
});

document.getElementById('input').addEventListener('keyup', function () {
    const deleteField = document.getElementById('input').value;
    console.log(deleteField);
});