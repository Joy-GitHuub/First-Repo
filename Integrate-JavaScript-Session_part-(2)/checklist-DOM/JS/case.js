console.log('"Find Book"');

const javaScriptBooks = [
    'A Smarter Way to Learn JavaScript',
    'Head First PHP & MySQL',
    'Programming PHP',
    'Eloquent JavaScript',
    'JavaScript & JQuery,',
    'javascript The Definitive Guid',
    'JavaScript 68',
    'Murach PHP and MySQL',
];

const newList = [];

for (const book of javaScriptBooks) {
    console.log(book);
    if (book.toLowerCase().indexOf('Javascript'.toLowerCase()) !== -1) {
        newList.push(book)
    }
}
console.log('Only JavaScript Book', newList);