//Control Statement
//Conditional
//Looping
//Jumbing

//Conditional
//Simple if
//if..else
//else if ladder (Multiple conditions)
//Nested if
//Switch Case
if(5==5)
{
    console.log("Hello")
}
else
{
    console.log("Hai")
}


let marks = 32

if(marks>=90 && marks<=100)
{
    console.log("A Grade")
}
else if(marks>=75 && marks<=89)
{
    console.log("B Grade")
}
else if(marks>=50 && marks<=74)
{
    console.log("C Grade")
}
else if(marks>=35 && marks<=49)
{
    console.log("D Grade")
}
else
{
    console.log("Fail")
}

let age = 15
let hasVoterId = false

if(age>=18)
{
    if(hasVoterId)
    {
        console.log("Able to Vote")
    }
    else
    {
        console.log("Not able to vote")
    }
}
else
{
    console.log("Not Eligible For Vote")
}

//switch Case

let day = 8

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Wrong Day")
          
}

let num1 = 10;
let num2 = 20;
let op = "/"; 

switch(op)
{
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Wrong Operator");
}


let color = "Red"

switch(color)
{
    case "Red":
        console.log("Stop")
        break
    case "Green":
        console.log("Go")
        break
    case "Yellow":
        console.log("Wait")
        break
    default:
        console.log("Wrong Signal")
}