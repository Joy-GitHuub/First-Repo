console.log('"JavaScript Date Object"');

const date = new Date();
console.log(date);

// Year
const fullYear = date.getFullYear();
console.log(fullYear);

// Month
const month = date.getMonth();
console.log(month);

// date
const getDate = date.getDate();
console.log('Date', getDate);

// hours
const getHours = date.getHours();
console.log('Hour', getHours);

// Minutes
const minute = date.getMinutes();
console.log('Minute', minute);

// second
const second = date.getSeconds();
console.log('second', second);

// getTime
const getTime = date.getTime();
console.log(getTime);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months);
const myMonth = months[date.getMonth()]
console.log('Running Month->', myMonth);

var d1 = new Date();
var d2 = new Date(d1);
var same = d1.getTime() === d2.getTime();
var notSame = d1.getTime() !== d2.getTime();
console.log(same, notSame);