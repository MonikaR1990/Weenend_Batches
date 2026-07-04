class Employee
{
    #salary;

    constructor(name, salary)
    {
        this.name = name
        this.#salary = salary
    }

    getSalary()
    {
        return this.#salary
    }
}

let e1 = new Employee("Meena", 25000)

console.log(e1.getSalary())

//Wrap data and methods together, and protect the data from unauthorized access 