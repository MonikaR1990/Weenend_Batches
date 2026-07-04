function greet(name)
{
    console.log("Welcome " + name)
}


greet("Praveen") //funcction call


function add(a, b)
{
    console.log(a+b)
}

const extra = add(5, 5) + 5
console.log(extra)

function sum(a, b)
{
    return a + b
}

//console.log(sum(5, 5))

const extra2 = sum(5, 5) + 5
console.log(extra2)

function salaryCalculation(basicSalary, hra, allowance)
{
    let netSalary = basicSalary + hra + allowance
    return netSalary
}

const empSalary = salaryCalculation(50000, 20000, 5000)
console.log(empSalary)


let otAmount = 10000

const updatedSalary = empSalary + otAmount
console.log(updatedSalary)


//Function stored in a variable

const sub = function(a,b)
{
    return a-b
}

console.log(sub(10,5))

