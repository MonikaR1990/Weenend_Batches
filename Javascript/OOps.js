//OOPS

//1. Class
//2. Object //Constructor //this
//3. Inheritance
//4. Polymorphism
//5. Abstraction
//6. Encapsulation

class Hotel
{
    tea = 10
    coffee = 20
    constructor()
    {
        
    }

    displayRate()
    {
        console.log(this.tea)
        console.log(this.coffee)
    }
}

let server1 = new Hotel()
server1.displayRate()
server1.tea = 15
console.log(server1.tea)

let server2 = new Hotel()
server2.displayRate()

class Student
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    displayStudentDetails()
    {
        console.log("Name: " + this.name)
        console.log("Id: " + this.id)
    }
}

let s1 = new Student("Bala", 101)
s1.displayStudentDetails()


