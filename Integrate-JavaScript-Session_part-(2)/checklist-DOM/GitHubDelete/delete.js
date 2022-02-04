
document.getElementById('btn').disabled = true;

document.getElementById('input').addEventListener('focus', function () {
    document.body.style.backgroundColor = ' #ff4d4d';

});
document.getElementById('input').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
    document.getElementById('btn').disabled = false;
    if (this.value === 'delete') {

        deleteClick;
        document.getElementById('input').value = '';
    }
    else {
        document.getElementById('btn').disabled = true;
    }

    console.log(this.value);
});

function deleteClick() {
    document.getElementById('delete').remove();
}
