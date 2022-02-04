// JavaScript Array Push Pop
console.log('JavaScript Array Push PoP Method');

// Declear a Array
const lastBench = ['Kalam', 'Salam', 'Jalam'];
console.log('First Array', lastBench);


/* 
// pop Method****
JavaScript Array pop()
The pop() method removes the last element from an array:
The pop() method returns the value that was "popped out":
*/
const lastElement = lastBench.pop();

const friendsAge = [21, 20, 19, 22, 17, 18];
console.log('FriendsAge Array', friendsAge);
const lastElementPop = friendsAge.pop();

console.log('PoP Method Use', lastBench);


// pop() Method give me removed Elements.
console.log('"Remove This Element"', lastElement);
console.log("Remove Last Friend Age", lastElementPop);

/* 
// Push Method***
The push() method adds a new element to an array (at the end):
The push() method returns the new array length:
*/
lastBench.push('Palam');
lastBench.push('Balam');
console.log('Push Method,', lastBench);

