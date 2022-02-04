console.log('"Array Case-Convert"');

const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const search = 'tomai';
const userInput = 'BLACKPINK';
const savedUserName = 'blackpink';

// convert Case 
console.log(savedUserName.toLocaleLowerCase(), userInput.toUpperCase());

// const anthemStringArray = new String(anthem);
const anthemStringArray = anthem.split(' ');
let findWord = '';

for (let i = 0; i < anthemStringArray.length; i++) {
    const element = anthemStringArray[i];
    if (element.toLocaleLowerCase() === search) {
        findWord = (anthemStringArray[i])
    }
    // console.log(element);
};

if (userInput.toUpperCase() === savedUserName.toUpperCase()) {
    console.log('user Exists Matcher');
};

// find Word
console.log('find Seach Matching = ' + findWord);