function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputValue;
};
function updateTotalField(totalFieldID, amount) {
    const totalElement = document.getElementById(totalFieldID);
    const totalElementText = totalElement.innerText;
    const previousTotal = parseFloat(totalElementText);
    const newTotalValue = previousTotal + amount
    totalElement.innerText = newTotalValue;
};
function updateBalance(balance, isAdd, amount) {
    const balanceTotal = document.getElementById(balance);
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd === true) {
        const newBalance = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalance;
    } else {
        const newBalance = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalance;
    }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotalField('deposit-total', amount);
    updateBalance('balance-total', true, amount);
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', amount);
    updateBalance('balance-total', false, amount)
});