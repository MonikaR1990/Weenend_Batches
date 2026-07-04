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

let d = new Dog()
d.bark()
d.eat()
d.sleep()