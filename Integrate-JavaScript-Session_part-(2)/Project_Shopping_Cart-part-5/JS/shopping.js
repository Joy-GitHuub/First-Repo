console.log('Shopping Cart');

function updateCaseNumber(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
};
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
    const total = tax + subTotal;
    // Update Total
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;
};


// handle Phone increase decrease Events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', false, 1219);
});
// handle case increase decrease Events
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', false, 59);
});