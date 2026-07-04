class Animal
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal           //Child Class
{   
    bark()
    {
        console.log("Barking")
    }
}

class Puppy extends Dog
{
    play()
    {
        console.log("Playing")
    }
}

let p = new Puppy()
p.play()
p.bark()
p.eat()
p.sleep()

class Person //Parent Class
{
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    displayPerson()
    {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
    }
}

class Employee extends Person
{
    constructor(name, age, empId, department)
    {
        super(name, age) //Super Keyword which used to call the parent class constructor
        this.empId = empId
        this.department = department
    }
    
    displayEmployee()
    {
        super.displayPerson()
        console.log("Employee Id: " + this.empId)
        console.log("Department: " + this.department)
    }
}

class Manager extends Employee
{
    constructor(name, age, empId, department, project, teamSize)
    {
        super(name, age, empId, department)
        this.project = project
        this.teamSize = teamSize
    }
    displayManager()
    {
        super.displayEmployee()
        console.log("Project Name: " + this.project)
        console.log("Team Size: " + this.teamSize)
    }
}



let m1 = new Manager("Bala", 22, 101, "IT", "CRM TechNG", 10)
//m1.displayPerson()
//m1.displayEmployee()
m1.displayManager()