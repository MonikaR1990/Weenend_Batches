//Hierarchical Inheritance

class Animal        //Parent Class
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

class Cat extends Animal
{
    meow()
    {
        console.log("Meow")
    }
}

class Lion extends Animal
{
    roar()
    {
        console.log("Roaring")
    }
}

class Account
{
    constructor(accountNumber)
    {
        this.accountNumber = accountNumber
    }
    showAccount()
    {
        console.log("Account Number: " + this.accountNumber)
    }
}

class SavingsAccount extends Account
{
    calculateInterest()
    {
        console.log("Interest Calculated")
    }
}
class CurrentAccount extends Account
{
    overdraft()
    {
        console.log("Over Draft Facility is available")
    }
}

let sa = new SavingsAccount("ERU123")
sa.showAccount()
sa.calculateInterest()

let ca = new CurrentAccount("RTRY1979")
ca.showAccount()
ca.overdraft()
