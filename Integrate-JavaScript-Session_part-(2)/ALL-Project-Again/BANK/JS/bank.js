console.log('"Bank Function"');

function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    console.log(inputValue);
    // clean InputField
    inputField.value = '';
    return inputValue;
};

function updateTotal(total, amount) {
    const totalElement = document.getElementById(total);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newTotal = previousTotal + amount;
    totalElement.innerText = newTotal;
    console.log(totalText);
};

function getCurrenctBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalanceTotal(amount, isAdd) {
    const updateBalance = document.getElementById('balance-total');
    const previousBalance = getCurrenctBalance();

    if (isAdd === true) {
        const newBalance = previousBalance + amount;
        updateBalance.innerText = newBalance;
    }
    else {
        const newBalance = previousBalance - amount;
        updateBalance.innerText = newBalance;
    }
}

// Event Listener Deposit & Withdraw Button
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (!isNaN(amount)) {
        updateTotal('deposit-total', amount);
        updateBalanceTotal(amount, true);
    }
    else {
        alert('You can not Deposit Money Becouse Your Input Value is Not Money');
    }
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const currentBalance = getCurrenctBalance();
    if (amount <= currentBalance) {
        updateTotal('withdraw-total', amount);
        updateBalanceTotal(amount, false);
    }
    else {
        alert('You can not withdraw more than what you have in your account')
    }
});