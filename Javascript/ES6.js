//ES6 features

//let
//const

//Arrow Function (Short way of function)

// function greet(name)
// {
//     console.log("Hello " + name)
// }

import { squareRoot } from "../Javascript/Modules.js"


let greet= name=>console.log("Hello " + name)

greet("Bala")

//Template Literal

let name = "Praveen"
let id = 101

console.log("Name: " + name + " " + "ID: " + id)
console.log(`Name: ${name} ID: ${id}`)

console.log(`Hello ${name}`)

let firstName = "Bala"
let lastName = "G"
let age = 25

console.log("Name: " + firstName + " " + lastName + ","  + " Age: " + age)
console.log(`Name: ${firstName} ${lastName}, Age: ${age}`)


console.log(`Square Root of: ${squareRoot(5)}`)

let message = "Hello\nWelcome\nEveryOne"
console.log(message)

let msg = `Hello
Welcome
EveryOne`

console.log(msg)

//Spread Operator

let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5, 6]

console.log(arr2)

//Rest Operator

function add(a, b)
{
    console.log(a+b)
}

add(10, 20) //30
add(10, 20, 30) //Ignore the value

function arr(...num)
{
    console.log(num)
}

arr(10)
arr(10, 20)
arr(10, 20, 30) //multiple values into single array

//Destructing

const fruits = ["Mango", "Orange", "Apple", "Guva", "Banana"]

//const[first, second] = fruits //Destructing

const[first, second, ...remaining] = fruits //Destructing

console.log(first)
console.log(second)
console.log(remaining)

const person =
{
    pname: "Monika",
    page: 35,
    pcity: "Trichy"
}

const { pname, page, pcity } = person

console.log(pname)
console.log(page)
console.log(pcity)

//Modules (export , import)

// classes 

//Promises

//for...loop


for(let f of fruits)
{
    console.log(f)
}

//for....in

for(let key in person)
{
    console.log(person[key])
}

//Map
//Set

//Symbol

//Async-Await


let eName = "Muthu"

let employee =
{
   eName
}

console.log(employee)
