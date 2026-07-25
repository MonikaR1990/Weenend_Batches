"use strict";
//TypeScript = Javascript + Type Safety 
//TypeScript is converted (compiled) into Javascript (Because Typescript cannot understand the browser)
let name1 = "Bala";
//name1 = 1000 
//Variable Declaration
let newAge = 12;
newAge = 32;
let isActive = true;
let population = 8789789798798798798n;
//Same Opertors in Javascript
//Same Datatypes
let superHeros = ["Batman", "IronMan", "Hulk"];
//let superHeros: string[]   = ["Batman", "IronMan", "Hulk"] //Declaraion
//superHeros.push(100)
superHeros.push("Captain America");
console.log(superHeros);
//Tuple
let employee = [100, "Bala"];
let student = ["Bala", "Meena", 100, true, undefined]; //tuple
student.push(200);
let prices = [100, 200, 300];
//prices.unshift("Ten")
let user = {
    name: "Bala",
    age: "Mani"
};
//user.age = "Twenty Five"
let admin = {
    name: "Bala",
    age: 34
};
//function
function sum(a, b) {
    console.log(a + b);
}
sum(5, 6);
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
class Employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    display() {
        console.log(`Name ${this.name} & ID: ${this.id}`);
    }
}
let emp1 = new Employee("Bala", 1010);
emp1.display();
//Abstraction
//1. abstract class
//2. interface
class Animal {
    sleep() {
        console.log("Sleeping");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Barking");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}
let d = new Dog();
d.sound();
let stu1 = {
    sname: "Bala",
    sid: 1010
};
class Lions {
    makeSound() {
        console.log("Roaring");
    }
}
class Staff {
    eid;
    ename;
    constructor(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
    empDetailsDisplay() {
        console.log(`Emp ID: ${this.eid}`);
        console.log(`Emp Name: ${this.ename}`);
    }
}
let staff1 = new Staff(1010, "Mani");
staff1.empDetailsDisplay();
let items = [
    { pname: "pen", pprice: 20 },
    { pname: "pencil", pprice: 10 },
    { pname: "book", pprice: 30 },
    { pname: "eraser", pprice: 5 }
];
let item = {
    pname: "Notes",
    pprice: 150
};
class Child {
    fatherProperty() {
        console.log("House");
    }
    motherProperty() {
        console.log("Jweles");
    }
}
let c1 = new Child();
c1.fatherProperty();
c1.motherProperty();
let newStudents = {
    name: "Muthu",
    id: 19967
};
class Teacher {
    tname = "Priya";
    salary = 30000;
    shoolName = "ABC School";
    age = 35;
    getSalary() {
        console.log(this.salary);
    }
    getAge() {
        console.log(this.age);
    }
}
class TeacherDetails extends Teacher {
    diplayAge() {
        console.log(this.age);
    }
}
let td = new TeacherDetails();
let t1 = new Teacher();
console.log(t1.tname);
console.log(t1.shoolName);
t1.getSalary();
t1.getAge();
let rate = [1000, "Nine"];
let newRate; //Union Operator
newRate = 1000;
newRate = "Nine";
//enum //fixed set of name constants
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
