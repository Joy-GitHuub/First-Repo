// Recursion but simple for Loop

console.log('"Recursion but simple for Loop"');

/* let sum = 0;

for (let i = 1; i <= 6; i++) {

    sum += i;
}; */



/* for (let i = 6; i >= 1; i--) {
    console.log(i);
    sum += i;
}; */



function sum(i) {
    if (i === 1) {
        return 1;
    }

    return sum(i - 1) + i
};
console.log(sum(6));