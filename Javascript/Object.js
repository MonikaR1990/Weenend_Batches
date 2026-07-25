let person = {
    name: "Mani",
    age: 22,
    address:
    {
    city: "Chennai",
    state: "Tamilnadu"
    },
    skills:["Java", "JS", "Automation"],
    greet: function()
    {
        console.log("Hello " + this.name)
    }
}

console.log(person)

//Access Properties of Object (. dot notation)
console.log(person.name)
console.log(person.city)

//Access Properties of Object (.Bracket notation) //When the property name is dynamic
console.log(person["name"])
console.log(person["city"])

//Add Properties
person.salary = 50000;
person.company = "TCS"

console.log(person)

//Update Properties
person.company = "CTS"

console.log(person)

//Delete Properties

delete person.salary;

console.log(person)

console.log(person.address.state)

console.log(person.skills[2])

person.greet()

console.log(Object.keys(person)) //Return all Keys

console.log(Object.values(person)) //Returns all Values

console.log(Object.entries(person)) //Returns Key-Value pairs

console.log(person)

for(let key in person)
{
    console.log(key)
}

for(let key in person)
{
    console.log(person[key])
}


const employee = 
{
    id: 101,
    name: "John",
    salary: 40000
};

const {id, name, salary} = employee

console.log(id)
console.log(name)
console.log(salary)

const updatedEmployee =
{
    ...employee,
    city: "Chennai"
}

console.log(updatedEmployee)

let obj1 = { a: 1}
// const obj2 = { b: 2}

// const obj3 = Object.assign(obj1, obj2, {c: 3})

// console.log(obj3)

obj1 = {d: 1}

console.log(obj1)

console.log(person.address.pin)

console.log("pin" in person)

let user =
{
    name: "Mani",
}

// Object.freeze(user)

// user.name = "Muthu"

// user.id = 101

// console.log(user.name)

// console.log(user)

Object.seal(user)

user.name = "Muthu"

user.id = 101

console.log(user.name)

delete user.name;

//console.log(user)

let ob1 = 
{
    name: "Beena",
    id: 101
}

//Shallow Copy
let ob2 = ob1;

console.log(ob2)

ob2.name = "Mathi"

console.log(ob1.name)

