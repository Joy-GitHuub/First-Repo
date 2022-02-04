// JavaScript String Reverse

console.log('Reverse String With Function');

const string = 'Hello How Are You'

function reverseString(text) {
    let reverse = '';
    for (let i = 0; i < text.length; i++) {
        console.log(text[i] + reverse);
        reverse = text[i] + reverse;
    }
    return reverse;
};

const reveresd = reverseString(string);

console.log(reveresd);