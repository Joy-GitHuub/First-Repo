console.log('"True & False"');

/* 
Falsy Value:
1. False
2. Empty String is False
3. Number 0 is a False Value
4. Empty variable is a False Value
5. Null is a False Value
6. NaN is a False Value
7. Undefined is a False Value
*/

/*
True Value:
1. True
2. any number is True.
3. Any string is True. & any string including       single whitespace
4. Empty Array & Empty Object is a True Value
*/

const x = false;
if (x) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
}

const a = 3;
if (a) {
    console.log('Variable is truthy');
} else {
    console.log('Vaiable is False');
}

const b = -23;
if (b) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
};

const y = 'Solaiman';
if (y) {
    console.log('Variable is True');
} else {
    console.log('Variable is Falese');
};

const z = '';
if (z) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
};

const c = ' ';
if (c) {
    console.log('Variable is True');
} else {
    console.log('Variable is False')
};

const zero = 0;
if (zero) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
};

let empty;
if (empty) {
    console.log('Variable is True');
} else {
    console.log(empty);
    console.log('Variable is False');
};

const s = null;
if (s) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
};

const d = NaN;
if (d) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
};

const un = undefined;
if (un) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
}

const array = [];
if (array) {
    console.log('Variable is True');
} else {
    console.log('Variable is False');
}

const object = {};
if (object) {
    console.log('Variable is True');
} else {
    console.log('variable is False');
};