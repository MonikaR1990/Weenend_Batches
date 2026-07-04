//Arithmetic Operator (+, -, *, /, %)
//Assignmnet Operator (=, +=, -=, *=, /=)
//Comparision Operator (==, ===, !=, !==, <, >, <=, >=)
//Logical Operator (&&, ||, !)
//String Operator (+)
//Unary Operator (+, -, ++, --)
//Ternary Operator
//Typeof Operator

let a = 10

a += 5; // a = a + 5

console.log(a)

a -= 5

console.log(a)


let b = 10
let c = "10"

console.log(b==c)
console.log(b===c) //Strict Equal

console.log(10!="10") //false
console.log(10!=="10") //true


console.log((5>=5)&&(5==5)||(5!="5"))

let age = 19
let hasVoterId = true

const result = ((age>=18)&&(hasVoterId)) ? "Eligible" : "Not Eligible"

console.log(result)



console.log((age>=18) && (!hasVoterId))

let x = 5
let y = "five"

console.log(x+y)

let p = +5
let q = -8

let s = 5

console.log(s++)

console.log(s)

console.log(s--)

console.log(s)

console.log(++s)

console.log(--s)

let m = 5
let n = 6


let newNumber = (m<=n) ? m+n : m-n

console.log(newNumber)

console.log(typeof(newNumber))
console.log(typeof(hasVoterId))