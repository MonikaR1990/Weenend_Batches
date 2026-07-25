let fruits = ["Mango","Apple", "Orange"] //Literal Way

let vegies = new Array("Beetroot", "Carrot", "Onion") //Using Array Constructor

let arr = [] //Empty Array

let data = ["Bala", 24, 101, true, undefined, null, "ECE"] //Different Data types

console.log(data)

//Access Array Elements

console.log(data[0])
console.log(fruits[2])
console.log(vegies[4])

//Modify the Elements

data[2] = 102

console.log(data)

//Length of Array (Property) find the count

console.log(fruits.length)

//Add Elements

fruits.push("Banana") //Add the element at the end

fruits.unshift("Guva") //Add the element at the beginning

console.log(fruits)

//Remove Elements

fruits.pop() //Removes last Element

fruits.shift() //Removves first element

console.log(fruits)

//splice() //It modifies the original array by adding, removing and replacing elements

fruits.splice(1, 0, "Banana", "Guva")

console.log(fruits)

//1 - Start Index
//0 - How Many Elements need to Delete

let removed = fruits.splice(1, 2)

console.log(removed)

console.log(fruits)

fruits.splice(1, 2, "Kiwi", "Peach")

console.log(fruits)

fruits.splice(1) //Remove all elements from start Index 

console.log(fruits)

//slice() //It is used to exatract the portion of array without modifying the original array

let names = ["Muthu", "Meena", "Mani", "Malar"]

let newNames = names.slice(1, 3)

console.log(names)

console.log(newNames)

//1 - Start Index (Include)
//3 - End Index (Exclude)

let numbers = [1, 2, 3, 4, 5, 6]

let newNumbers = numbers.slice(2) //Returns everything to the end

console.log(numbers)
console.log(newNumbers)

let arr1 = [1, 2, 3]

let arr2 = arr1.slice() //Shallow Copy

console.log(arr1)
console.log(arr2)

console.log(numbers.slice(-2)) //start from the second last element

//concat

// let a = [1, 2]
// let b = [3, 4]

// console.log(a.concat(b))

//includes()

let arr3 = ["Axe", "Ball", "Cards", "Cards"]

console.log(arr3.includes("Axe"))

//indexOf

console.log(arr3.indexOf("Ball"))
console.log(arr3.lastIndexOf("Cards"))

//find() //Returns the first matching Element

let nums1 = [10, 20, 30, 40, 50]

let nums2 = nums1.find(x=>x>30)

console.log(nums1)
console.log(nums2)

//filter() //Returns Matching all Elements
let nums3 = nums1.filter(x=>x>30)
console.log(nums3)

//Transform Each Elements
let num4 = nums1.map(x=>x*2)
console.log(num4)

//Iteration
for(let i = 0; i<5; i++)
{
    console.log(nums1[i])
}

for(let num of nums1)
{
    console.log(num)
}

//every()

console.log(nums1.every(x=>x>20))
console.log(nums1.some(x=>x>20))

//Array Destructuring

// let colors = ["Red", "Blue", "Green"]

// console.log(colors[0]);

// let [a, b, c] = colors;

// console.log(a)
// console.log(b)
// console.log(c)

// a = "Orange"

// console.log(a)

//Spread Operator (...)

let a = [1, 2]

let b = [...a, 3, 4]

console.log(b)
