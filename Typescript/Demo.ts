//TypeScript = Javascript + Type Safety 
//TypeScript is converted (compiled) into Javascript (Because Typescript cannot understand the browser)

let name1 = "Bala"

//name1 = 1000 

//Variable Declaration

let newAge: number = 12

newAge = 32

let isActive: boolean = true

let population: BigInt = 8789789798798798798n 

//Same Opertors in Javascript
//Same Datatypes

let superHeros = ["Batman", "IronMan", "Hulk"]

//let superHeros: string[]   = ["Batman", "IronMan", "Hulk"] //Declaraion

//superHeros.push(100)

superHeros.push("Captain America")

console.log(superHeros)

//Tuple

let employee: [number, string] = [100, "Bala"]

let student = ["Bala", "Meena", 100, true, undefined] //tuple

student.push(200)

let prices = [100, 200, 300]

//prices.unshift("Ten")

let user = {
    name: "Bala",
    age: "Mani"
}



//user.age = "Twenty Five"

let admin: {
    name: string;
    age: number;
} = {
    name: "Bala",
    age: 34
}

//function

function sum(a: number, b: number)
{
    console.log(a+b)
}

sum(5, 6)


for(let i:number=1; i<=5; i++)
{
    console.log(i)
}

class Employee
{
    name: string
    id: number

    constructor(name: string, id: number)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log(`Name ${this.name} & ID: ${this.id}`)
    }
}

let emp1 = new Employee("Bala", 1010)
emp1.display()

//Abstraction
//1. abstract class
//2. interface

abstract class Animal  
{
    abstract sound(): void;

    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal
{
    sound(): void {
        console.log("Barking")
    }
}

class Cat extends Animal
{
    sound(): void {
        console.log("Meow")
    }
}

let d = new Dog()
d.sound()

interface StudentData
{
    sname: string;
    sid: number;   

}

let stu1: StudentData = {
    sname: "Bala",
    sid: 1010
}

interface Animals
{
    makeSound(): void;  //abstract method

    // sleep()  //Normal Method Not allowed
    // {

    // }
}

class Lions implements Animals
{
    makeSound(): void {
        console.log("Roaring")
    }
}

interface EmployeeData
{
    eid: number;
    ename: string;

    empDetailsDisplay(): void;
}

class Staff implements EmployeeData
{
    eid: number;
    ename: string;
    constructor(eid: number, ename: string)
    {
        this.eid = eid
        this.ename = ename
    }

    empDetailsDisplay(): void {
        console.log(`Emp ID: ${this.eid}`)
        console.log(`Emp Name: ${this.ename}`)
    }
}

let staff1 = new Staff(1010, "Mani")
staff1.empDetailsDisplay()

interface product
{
    pname: string;
    pprice: number;

    //show(): void
}

let items: product[] =
[
    {pname: "pen", pprice: 20},
    {pname: "pencil", pprice: 10},
    {pname: "book", pprice: 30},
    {pname:"eraser", pprice: 5}

]

let item: product =
{
    pname: "Notes",
    pprice: 150
}

interface Father
{
    fatherProperty(): void
}

interface Mother
{
    motherProperty(): void
}

class Child implements Father, Mother
{
    fatherProperty(): void {
        console.log("House")
    }
    motherProperty(): void {
        console.log("Jweles")
    }
}

let c1 = new Child()
c1.fatherProperty()
c1.motherProperty()

interface Person
{
    name: string;
}

interface SchoolStudent extends Person
{
    id: number
}

let newStudents: SchoolStudent =
{
    name: "Muthu",
    id: 19967
}

class Teacher
{
    tname: string = "Priya"
    private salary: number = 30000
    public shoolName: string = "ABC School"
    protected age: number = 35

    getSalary()
    {
        console.log(this.salary)
    }
    getAge()
    {
        console.log(this.age)
    }
}

class TeacherDetails extends Teacher
{
    diplayAge()
    {
        console.log(this.age)
    }
}

let td = new TeacherDetails()

 
let t1 = new Teacher()
console.log(t1.tname)
console.log(t1.shoolName)
t1.getSalary()
t1.getAge()

 let rate: [number, string] = [1000, "Nine"]

 let newRate: number | string //Union Operator

 newRate = 1000
 newRate = "Nine"

 //enum //fixed set of name constants

 enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Days.Monday)



