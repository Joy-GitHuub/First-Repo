// 
console.log('"Pin Matcher JavaScript"');

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length == 4) {
        return pin;
    }
    else {
        return getPin();
    };
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-id').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-number');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
            console.log('d');
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
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
});