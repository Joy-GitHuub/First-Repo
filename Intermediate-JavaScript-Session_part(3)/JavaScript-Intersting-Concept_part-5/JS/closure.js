function watch() {
    let counter = 0;

    return function () {
        counter++;
        return counter
    };
};

let clock = watch();
let clock2 = watch();
console.log(clock());
console.log(clock());
console.log(clock2());
console.log(clock2());
console.log(clock());
console.log(clock());
console.log(clock());

/* 
Closure , Encapsulation , Private Variable
*/

/* 
1 ta function taka ar 1ta function return kora tar nijar so akta closure tore kora / private variaable tore kora .
*/