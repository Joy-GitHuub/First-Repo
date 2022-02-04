console.log('"JavaScript Block-Scope, Global-Scope & Hoisting"');

// Global Scope
const favNum = 23;
console.log(favNum);

function add(a, b) {
    // Local Scope {a, b}
    const sum = a + b;
    console.log(favNum);
    return sum;
};
console.log(add(3, 3));

