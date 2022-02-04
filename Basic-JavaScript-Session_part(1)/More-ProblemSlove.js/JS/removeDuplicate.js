// Remove Duplicate 

console.log('Remove Duplicate Items an Array');

// declare Names




function removeDuplicate(names) {
    const unique = [];
    console.log(names);
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        }

    }
    return unique;
};

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);



function allDuplicate(number) {

    let duplicate = [];

    for (let i = 0; i < number.length; i++) {
        console.log(number[i]);
        const element = number[i];

        if (duplicate.indexOf(element) === - 1) {
            duplicate.push(element);
        }
    }
    return duplicate;

};

const number = [2, 4, 2, 2, 5, 1, 12, 12, 45,];
const duplicateNumber = allDuplicate(number);
console.log(duplicateNumber);