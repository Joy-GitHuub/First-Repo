//  TotalSales

function totalSales(shirt, pant, shoe) {

    const shirtQuantity = shirt;
    const pantQuantity = pant;
    const shoeQuantity = shoe;

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShewPrice = 500;

    if ((shirtQuantity <= -1) || (pantQuantity <= -1) || (shoeQuantity <= -1)) {
        return "Please Give me a Positive value";
    }

    else {
        const shirtPrice = shirtQuantity * perShirtPrice;

        const pantPrice = pantQuantity * perPantPrice;

        const shoePrice = shoeQuantity * perShewPrice;

        const total = shirtPrice + pantPrice + shoePrice;

        return total;
    }

}

const mySales = totalSales(3, 2, 1);
console.log('Total Cost ', mySales);