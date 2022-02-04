// Find friend 

function perfectFriend(friends) {

    let perfectFriends;

    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];

        if (element.length === 5) {
            perfectFriends = element;
            break;
        }

    }
    return perfectFriends;
};
const arrayFriends = perfectFriend(['Joy', 'babu', 'sujon', 'sojib', 'chayan', 'sourav']);
console.log(arrayFriends);
