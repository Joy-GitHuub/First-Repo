// (Sami Advanced) Bubble

console.log('"Sami Advanced Event Bubble"');

document.getElementById('second-item').addEventListener('click', function (event) {
    console.log(2, 'Item');
    event.stopPropagation();
});

// ul Container 
document.getElementById('ul-container').addEventListener('click', function (event) {
    console.log('Ul Click Section',);
    event.stopPropagation();
});

document.getElementById('section-container').addEventListener('click', function (event) {
    console.log('Section Click', 500);

});