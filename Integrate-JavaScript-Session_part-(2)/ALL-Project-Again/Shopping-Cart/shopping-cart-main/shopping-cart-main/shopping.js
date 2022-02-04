console.log('"Shopping Cart JavaScript File"');

function getInputPhoneNumber(isAdd) {
    const inputField = document.getElementById('phone-number');
    const inputText = inputField.value;
    const inputValue = parseInt(inputText);
    if (isAdd === true) {
        const previousValue = inputValue + 1;
        const newValue = previousValue;
        inputField.value = newValue;
    }
    else if (inputValue > 0) {
        const previousValue = inputValue - 1;
        const newValue = previousValue;
        inputField.value = newValue;
    }
    calculateTotal();
    return inputField.value;
}
function getInputCaseNumber(isAdd) {
    const inputField = document.getElementById('case-number');
    const inputText = inputField.value;
    const inputValue = parseInt(inputText);
    if (isAdd === true) {
        const previousValue = inputValue + 1;
        const newValue = previousValue;
        inputField.value = newValue;
    }
    else if (inputValue > 0) {
        const previousValue = inputValue - 1;
        const newValue = previousValue;
        inputField.value = newValue;
    }
    calculateTotal();
    return inputField.value;
};

function productTotal(count, product) {
    const productTotalAmount = document.getElementById(product + '-total');
    if (product === 'phone') {
        productTotalAmount.innerText = count * 1219;
    }
    else {
        productTotalAmount.innerText = count * 59;
    }
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    const count = getInputPhoneNumber(true);
    productTotal(count, 'phone');

});
document.getElementById('phone-minus').addEventListener('click', function () {
    const count = getInputPhoneNumber(false);
    productTotal(count, 'phone');

});

document.getElementById('case-plus').addEventListener('click', function () {
    const count = getInputCaseNumber(true);
    productTotal(count, 'case');

});
document.getElementById('case-minus').addEventListener('click', function () {
    const count = getInputCaseNumber(false);
    productTotal(count, 'case',);

});