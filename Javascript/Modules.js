//Modules

//App.js

//Login Code login.js
//Registration Code Registration.js
//Payment Code payment.js
//Cart Code cart.js
//Search Code search.js
//Orders Code orders.js
//WishList Code wishlist.js

export function add(a, b)
{
    console.log(a+b)
}

//add(10, 20)

export function squareRoot(a)
{
    return a*a
}

export let pi = 3.14

export let fruits = ["Mango", "Orange", "Apple"]

export let student = 
{
    name: "Praveen",
    id: 101,
    city: "Chennai"
}

export class Employee
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log("Name: " + this.name)
        console.log("ID: " + this.id)
    }
}

export default function greet()
{
    console.log("Good Morning")
}

// export default function sayHi()   //Only one default file is allowed
// {
//     console.log("Hi...Everyone")
// }

export function subtract(a, b)
{
    console.log(a-b)
}