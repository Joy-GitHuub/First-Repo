// Recursive Function

console.log('" JavaScript Recursive Function "');

/* 
What is Factorial math???
1! = 1
2! = 2* 1
3! = 3* 2* 1
4! = 4* 3* 2* 1
5! = 5* 4* 3* 2* 1
6! = 6* 5* 4* 3* 2* 1
7! =  7* 6* 5* 4* 3* 2* 1
8! =  8* 7* 6* 5* 4* 3* 2* 1
9! = 9* 8* 7* 6* 5* 4* 3* 2* 1

n! = n* (n-1)!

*/

function factorialRecursive(n) {
    console.log(n)
    if (n === 1) {
        console.log('inside condition', n);
        return 1;;
    }
    console.log('condition over come', n)
    return n * factorialRecursive(n - 1);

};
const myFactorial = factorialRecursive(5);
console.log(myFactorial);