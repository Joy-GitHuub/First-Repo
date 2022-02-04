// Bank JS

console.log('"Bank Account"');

document.getElementById('deposit-btn').addEventListener('click', function () {
    console.log('Click');

    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;

    const depositInputValue = parseFloat(depositInputText);
    console.log(depositInputValue);


    // deposit Money
    const depositTotal = document.getElementById('deposit-total').innerText;

    const previousDepositTotalText = parseFloat(depositTotal);
    const previousDepositTotalValue = previousDepositTotalText;
    console.log(previousDepositTotalValue);

    const newDepositTotal = previousDepositTotalValue + depositInputValue;

    // set Total Deposit Money
    document.getElementById('deposit-total').innerText = newDepositTotal;


    const balanceTotalText = document.getElementById('balance-total').innerText;

    const balanceTotalValue = parseFloat(balanceTotalText);
    console.log(balanceTotalValue);

    const newBalanceTotal = balanceTotalValue + depositInputValue;

    document.getElementById('balance-total').innerText = newBalanceTotal;

    depositInput.value = '';

});




// Withdraw Button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    console.log('click');

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputText);
    console.log(withdrawInputValue);


    // 
    const withdrawTotalText = document.getElementById('withdraw-total').innerText;
    const withdrawTotalValue = parseFloat(withdrawTotalText);
    console.log(withdrawTotalValue);


    // 
    const newWithrawTotal = withdrawInputValue + withdrawTotalValue;

    document.getElementById('withdraw-total').innerText = newWithrawTotal;


    const balanceTotalText = document.getElementById('balance-total').innerText;

    const balanceTotalValue = parseFloat(balanceTotalText);

    const newBalanceTotal = balanceTotalValue - withdrawInputValue;

    document.getElementById('balance-total').innerText = newBalanceTotal;

    // 
    withdrawInput.value = '';
})