function megaFriend(friends) {

    if (Array.isArray(friends) === false) {
        return 'Please Provide an Array';
    }

    let mega = friends[0];

    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }

    }
    return mega;
};
const friends = ['Katub', 'Lion', 'joy', 'Shamol', 'Sabbir', 'Ciku'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

// indexOf
if (friends.indexOf('Lion') !== -1) {
    console.log('Lion exits in Array');
};

// includes
if (friends.includes('Lion')) {
    console.log('Lion Exits');
};

// Concat
const frist = [2, 62, 67, 1, 4, 63, 77];
const second = [1, 2, 1, 2, 12, 1, 2, 1];
const combined = frist.concat(second);
console.log(combined);
