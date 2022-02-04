// Basic JavaScript Problem

console.log('JavaScript a Year is a Leap year or not');

// declare function
function checkLeapYear(year) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        console.log(year + ' is a Leap Year');
    }
    else {
        console.log(year + ' is not a Leap Year');
    };
};

// call this function
checkLeapYear(2012);