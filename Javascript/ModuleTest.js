import {add} from '../Javascript/Modules.js'
import { squareRoot } from '../Javascript/Modules.js'
import { pi } from '../Javascript/Modules.js'
import { fruits } from '../Javascript/Modules.js'
import { student } from '../Javascript/Modules.js'
import { Employee } from '../Javascript/Modules.js'
import greet from '../Javascript/Modules.js'


//import { add, squareRoot, pi, fruits, student, Employee } from '../Javascript/Modules.js'
import { subtract as sub } from '../Javascript/Modules.js'
//import sayHai from '../Javascript/Modules.js'

add(10, 20)

const result = squareRoot(5)
console.log(result)

function findRadius(r)
{
    console.log(pi*r*r)
}

findRadius(5)

console.log(fruits)

console.log(student)
console.log(student.city)

let emp1 = new Employee("Bala", 101)
emp1.display()

let emp2 = new Employee("Meena", 102)
emp2.display()

greet()

//sayHai()

sub(8, 5)