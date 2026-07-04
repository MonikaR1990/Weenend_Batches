// // Poly = Many
// // Morphism = Forms

// //Compile Time Polymorphism  => Method Overloading (Not directly supported)
// //Run Time Polymorphism => Method Overriding

// class Animal
// {
//     sound()
//     {
//         console.log("Make Sound")
//     }
// }

// class Dog extends Animal
// {
//     sound()
//     {
//         console.log("Barking")
//     }
// }

// class Cat extends Animal
// {
//     sound()
//     {
//         console.log("Meow")
//     }
// }



// let d;

// d = new Dog()
// d.sound()

// d = new Cat()
// d.sound()


// class Payment 
// {
//     pay() 
//     {
//         console.log("Processing payment...");
//     }

// }

// class CreditCard extends Payment 
// {

//     pay() 
//     {
//         console.log("Paid using Credit Card");
//     }

// }

// class UPI extends Payment 
// {
//     pay() 
//     {
//         console.log("Paid using UPI");
//     }

// }

// class NetBanking extends Payment 
// {
//     pay() 
//     {
//         console.log("Paid using Net Banking");
//     }

// }

// const payment;

// payment = new CreditCard()
// payment.pay()

// payment = new UPI()
// payment.UPI()

// payment = new NetBanking()
// payment.NetBanking()


class Addition
{
    add(a, b)
    {
        console.log(a+b)
    }
    add(a, b, c)
    {
        console.log(a+b+c)
    }
    add(a, b, c, d)
    {
        console.log(a+b+c+d)
    }
}

let sum = new Addition()
sum.add(1, 2)
sum.add(1, 2, 3)
sum.add(1, 2, 3, 4)