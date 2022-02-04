console.log('JavaScript Method Object');

const student = {
    id: 132,
    balance: 5000,
    name: 'Rj Kibria',
    major: 'Mathematics',
    subject: ['English', 'Economics', 'Math', 'Calculus'],
    bestFriend: {
        name: 'Kalam',
        major: 'Mathematics',
    },
    isRich: false,
    takeExam: function () {
        console.log(this.name, 'Taking Exam');
    },
    treatDey: function (expense, boksis) {
        this.balance = this.balance - expense - boksis
        return this.balance;
    },
};

console.log(student.takeExam());
const remaining = student.treatDey(500, 100);
const remaining2 = student.treatDey(300, 100);
console.log(remaining);
console.log(remaining2);