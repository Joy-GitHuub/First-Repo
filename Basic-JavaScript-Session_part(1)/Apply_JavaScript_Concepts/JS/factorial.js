// Basic JavaScript Problem

console.log('" JavaScript Factorial of a number useing for loop "');

/* 
What is Factorial math???
3! = 3* 2* 1
4!= 4* 3* 2* 1
6!= 6* 5* 4* 3* 2* 1
9!= 9* 8* 7* 6* 5* 4* 3* 2* 1
*/

// factorial variable declare
let factorial = 1;
for (let i = 1; i <= 7; i++) {

    console.log('out side variable' + factorial);

    factorial = factorial * i;
    console.log(factorial);
}