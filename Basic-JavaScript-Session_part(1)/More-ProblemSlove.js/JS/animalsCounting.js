// 

console.log('"Animals Counting JavaScript Advanced"');

// Animals Counting
/* 

1-10 per miles animals show - 10;
11-20 per miles animals show - 50;
20+ per miles animals show - 100 

*/

function animalCount(miles) {

    const first10Miles = 10;

    if (miles <= 10) {
        const firstCount = miles * first10Miles;
        return firstCount;
    }

    else if (miles <= 20) {


    }
};

const animals = animalCount(1);
console.log('total Animal ', animals);