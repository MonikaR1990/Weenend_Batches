//Abstraction

//Hiding the internal implementation details and showing only the necessary functionality to the user

// function drive()
// {
//     console.log("Checking Battery")
//     console.log("Checking Fuel")
//     console.log("Engine Started")
//     console.log("Car Moving")
// }


// drive()

class Car
{
   start()
   {
     this.#startEngine()
   }

    #startEngine()
    {
    console.log("Checking Battery")
    console.log("Checking Fuel")
    console.log("Engine Started")
    console.log("Car Moving")
    }
}

let c = new Car()
c.start()


class Mobile
{
    call(number)
    {
        this.number = number
        this.#connectNetwork()
        console.log("Calling " + number)
    }

    checkNumber()
    {
        console.log(this.number);
    }
    

    #connectNetwork()
    {
        console.log("Connecting Network")
    }
}

let m = new Mobile()
m.call(687678687)
m.checkNumber()