console.log('"BANK in JAVASCRIPT"');



document.getElementById('deposit-button').addEventListener('click', function () {
    console.log('Clicked');

    // deposit Input
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    console.log(depositAmount);

    // get Current Deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    // New Deposit Total
    const newDepositTotal = previousDepositTotal + depositAmount;

    // set Total Deposit
    depositTotal.innerText = newDepositTotal;


    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previouseBalanceTotal + depositAmount;

    // set Balance Amount
    balanceTotal.innerText = newBalanceTotal;

    // clear Input Field
    depositInput.value = '';
    console.log(depositTotalText);
});


// Handle Withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {

    // Withdraw Input Value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawIAmountText = withdrawInput.value;
    const withdrawIAmount = parseFloat(withdrawIAmountText);


    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);

    const newWithdrawTotal = previouswithdrawTotal + withdrawIAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // Update Balance After Withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previouseBalanceTotal - withdrawIAmount;

    // clear Withdraw Input Field
    withdrawInput.value = '';

});