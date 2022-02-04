// Shopping Cart

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productValue = productInput.value;
    if (isIncreasing) {
        productValue = parseInt(productValue) + 1;
    }
    else if (productValue > 0) {
        productValue = parseInt(productValue) - 1;
    };
    productInput.value = productValue;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productValue * price;
    calculateTotal();
};

/* function getInputValue(product) {
    const productInput = document.getElementById(product + '-number').value;
    const productNumber = parseInt(productInput);
    return productNumber;
}; */

function calculateTotal() {
    /*     const phoneTotal = getInputValue('phone') * 1219;
        const caseTotal = getInputValue('case') * 59; */

    const phoneInput = document.getElementById('phone-number').value;
    const caseInput = document.getElementById('case-number').value;
    const phoneTotal = phoneInput * 1219;
    const caseTotal = caseInput * 59;

    const subTotal = document.getElementById('sub-total').innerText = phoneTotal + caseTotal;
    const tax = document.getElementById('tax-amount').innerText = subTotal / 10;
    document.getElementById('total').innerText = subTotal + tax;

};

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

