console.log('"(advanced) Inheritance, extends class, super, class method"');

class TeamMember {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    };

}


class Support extends TeamMember {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    session() {
        console.log('Start a Support Session');
    };
};

class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    };
    buildRoutine(student) {
        console.log(this.name, 'Build a Routine For', student);
    }
};
class NeptuneDev {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    };
    releaseApp(version) {
        console.log(this.name, 'Release App Version', version);
    }
};

const alia = new StudentCare('Alia', 'Mumbai');
console.log(alia);