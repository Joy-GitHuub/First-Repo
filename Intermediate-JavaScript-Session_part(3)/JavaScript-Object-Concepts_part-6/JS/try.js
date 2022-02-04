const bookStroe = {
    storeId: 101,
    storeName: 'XYZ',
    totalBook: 250,
    bookList: ['Bangla', 'English', 'Math', 'Accounting', 'Something'],

    sellBook: function (sellerName, bookTotal) {
        this.totalBook = this.totalBook - bookTotal;
        return [sellerName, this.totalBook]

    }
};
const joy = bookStroe.sellBook('Joy', 10);
const niloy = bookStroe.sellBook('Niloy', 22);
const tapu = bookStroe.sellBook('Tapu', 3);
console.log(joy);
console.log(niloy);
console.log(tapu);