//  Multiple Cation Calculate JavaScript

console.log('add and multiplication to calculate ');


function woodCalculate(chairQuantity, tableQuantity, bedQuantity) {

    // always per items Woods
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // per item total wood quantity
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;


    // Total All items Quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;

}
const firstOption = woodCalculate(2, 1, 1);
console.log('total Wood Quantity ' + firstOption);