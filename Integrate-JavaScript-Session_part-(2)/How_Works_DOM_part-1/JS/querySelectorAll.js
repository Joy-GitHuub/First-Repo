// DOM QuerySelectorAll

console.log('"querySelectorAll DOM  index2"');

const querySelector = document.querySelectorAll('.blogs');
console.log(querySelector);

const para = document.querySelectorAll('p');
console.log(para);

const third = document.querySelectorAll('#third-blog  h3');
console.log(third);

for (const h of third) {
    console.log(h);
    h.style.color = 'blue';

}


// QuerySelector use korla just first ta pabo...
const first = document.querySelector('.blogs');
console.log(first);

first.style.color = 'green';

