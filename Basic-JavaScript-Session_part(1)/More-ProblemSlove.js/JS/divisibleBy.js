// JavaScript Divisible By;

console.log('"JavaScript Divisible by foo bar foobar"');

// foo || bar  ||  foobar

function fooBar(number) {

    for (let i = 0; i <= number; i++) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('fooBar');
            continue;
        }

        else if (i % 3 === 0) {
            console.log('foo');
            continue;
        }
        else if (i % 5 === 0) {
            console.log('bar');
            continue;
        }

        console.log(i);
    };

};


const myNumber = fooBar(50);
console.log(myNumber);