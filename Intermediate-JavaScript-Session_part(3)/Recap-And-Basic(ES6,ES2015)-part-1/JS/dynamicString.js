console.log('"Template String, Dynamic String"');

const count = 5;
const number = [23, 62, 77, 82, 46,];

const old = '<h3>Friend-5</h3>'
const old1 = '<h3>Friend-' + count + '</h3>'
const new1 = `<h3>Friend-${number.length}</h3>`
const total = `<h3>Friend-${number.length * 10}</h3>`

console.log(old);
console.log(old1);
console.log(new1);
console.log(total);