console.log('I am in a separate file');

function getInputVelue(product, price, isAdd) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isAdd) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    const newTotal = productNumber * price;
    productTotal.innerText = newTotal;

    totalCost();

};

function totalCost() {

    const phoneInput = document.getElementById('phone-number').value
    const caseInput = document.getElementById('case-number').value;

    const totalPhone = phoneInput * 1219;
    const totalCase = caseInput * 59;
    document.getElementById('sub-total').innerText = parseInt(totalPhone) + parseInt(totalCase);
    document.getElementById('tax').innerText = (parseInt(totalPhone) + parseInt(totalCase)) / 10;

    document.getElementById('total').innerText = (parseInt(totalPhone) + parseInt(totalCase)) + ((parseInt(totalPhone) + parseInt(totalCase)) / 10);
}



document.getElementById('phone-plus').addEventListener('click', function () {
    getInputVelue('phone', 1219, true,)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    getInputVelue('phone', 1219, false,)
});
document.getElementById('case-plus').addEventListener('click', function () {
    getInputVelue('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    console.log('case-minus');
    getInputVelue('case', 59, false);
});