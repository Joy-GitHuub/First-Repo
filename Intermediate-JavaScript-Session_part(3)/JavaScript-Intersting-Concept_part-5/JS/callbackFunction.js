console.log('"JavaScript CallBack Function"');

function welcomeMessage(name) {
    console.log(name);
    name()
};

// const name = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const object = { name: 'Tom Cruise', age: 58 };
function greatMorning() {
    console.log('Good Morning');
}
welcomeMessage(greatMorning);