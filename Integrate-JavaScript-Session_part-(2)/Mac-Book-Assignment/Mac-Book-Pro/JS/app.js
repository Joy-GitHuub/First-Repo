
function subTotalPrice() {

    const bestCostText = document.getElementById('best-price').innerText;
    const bestCost = parseInt(bestCostText);
    console.log(bestCost);

    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = parseInt(memoryCostText);
    console.log(memoryCost);

    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(storageCostText);
    console.log(storageCost);

    const delivaryCostText = document.getElementById('delivery-cost').innerText;
    const delivaryCost = parseInt(delivaryCostText);
    console.log(delivaryCost);

    const subTotalCost = bestCost + memoryCost + storageCost + delivaryCost;

    document.getElementById('sub-total-price').innerText = subTotalCost;

    document.getElementById('total-price').innerText = subTotalCost;

};


// Apply Promo
document.getElementById('apply').addEventListener('click', function () {
    console.log('click');
    const subTotalText = document.getElementById('sub-total-price').innerText;
    const subTotalNum = parseInt(subTotalText);

    const totalPriceSpan = document.getElementById('total-price');
    const totalPriceText = totalPriceSpan.innerText;


    const promoCodeInput = document.getElementById('promo-code');

    if (promoCodeInput.value === 'stevekaku') {
        const tweentyPercentTaka = 20 / 100 * subTotalNum;

        totalPriceSpan.innerText = subTotalNum - tweentyPercentTaka;


        // 
        document.getElementById('8gb-memory').disabled = true;
        document.getElementById('16gb-memory').disabled = true;

        // 
        document.getElementById('256gb-storage').disabled = true;
        document.getElementById('512gb-storage').disabled = true;
        document.getElementById('1tb-storage').disabled = true;

        // 
        document.getElementById("prime-charge").disabled = true;
        document.getElementById('free-charge').disabled = true;
    }

    promoCodeInput.value = '';
})


document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    subTotalPrice();
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    subTotalPrice();
});

document.getElementById('256gb-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    subTotalPrice();
});
document.getElementById('512gb-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    subTotalPrice();
});
document.getElementById('1tb-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    subTotalPrice();
});
document.getElementById('free-charge').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    subTotalPrice();
});
document.getElementById("prime-charge").addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    subTotalPrice();
});