// github delete Button

console.log('"Delete Confirmation Button"');

document.getElementById('delete').addEventListener('click', function () {
    console.log('clicked')
    document.getElementById('secret-info').style.display = 'none';
});

// focus
document.getElementById('delete-type').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
});

// blur
document.getElementById('delete-type').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
});

/*
keydown
*/
/*
document.getElementById('delete-type').addEventListener('keydown', function () {
    const deleteField = document.getElementById('delete-type').value;
    console.log(deleteField);
}); */

/*
keypress
*/
/* document.getElementById('delete-type').addEventListener('keypress', function () {
    const deleteField = document.getElementById('delete-type').value;
    console.log(deleteField);
}); */


/*
keyup
*/
/* document.getElementById('delete-type').addEventListener('keyup', function () {
    const deleteField = document.getElementById('delete-type').value;
    console.log(deleteField);
}); */


/*
change
*/
/* document.getElementById('delete-type').addEventListener('change', function () {
    const deleteField = document.getElementById('delete-type').value;
    console.log(deleteField);
}); */


// Most Time Use
document.getElementById('delete-type').addEventListener('keyup', function (event) {
    console.log(event.target.value);

    if (event.target.value === 'delete') {
        document.getElementById('delete').removeAttribute('disabled');
        document.getElementById('delete-type').setAttribute('disabled', true);
    }
    else {
        document.getElementById('delete').setAttribute('disabled', true);
    }
});