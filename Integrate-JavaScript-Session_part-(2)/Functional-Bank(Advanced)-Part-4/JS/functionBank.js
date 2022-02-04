// Function Bank

console.log('"Function Bank"');

// get Input Values
function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear Input Field;
    inputField.value = '';

    return amountValue;
};

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
};

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

function updateTotalField(totalFieldID, amount) {
    const totalElement = document.getElementById(totalFieldID);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
};


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    console.log(depositAmount);

    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);

        updateBalance(depositAmount, true);
    }


});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    console.log(withdrawAmount);

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    };
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }

});