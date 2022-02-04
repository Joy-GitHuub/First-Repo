function getPin() {
    const pin = Math.round(Math.random() * 10000);

    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-id').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeField = document.getElementById('type-number');
    console.log(number);
    if (isNaN(number)) {
        console.log('Number')
        if (number === 'C') {
            typeField.value = '';
        }
    }
    else {
        const previousNumber = typeField.value;
        const newValue = previousNumber + number;
        typeField.value = newValue;
    }

});

document.getElementById('submit').addEventListener('click', function () {
    console.log('Going Varify Button');
    const pin = document.getElementById('display-id').value;
    const typeField = document.getElementById('type-number').value;

    const successNotifacation = document.getElementById('notify-success');
    const failNotifacation = document.getElementById('notify-fail');
    if (pin === typeField) {
        successNotifacation.style.display = 'block';
        failNotifacation.style.display = 'none';
        document.getElementById('display-id').value = '';
    }
    else {
        successNotifacation.style.display = 'none';
        failNotifacation.style.display = 'block'
    }
    document.getElementById('type-number').value = '';

})