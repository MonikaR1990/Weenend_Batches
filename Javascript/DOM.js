//Document Object Model

let heading = document.getElementById("title")
console.log(heading)


function changeText()
{
    heading.innerHTML = "Hello JavaScript"
}

console.log(heading.textContent)
console.log(heading.id)

let para = document.getElementsByClassName("ui_msg")
console.log(para[1])

console.log(heading.innerHTML)

document.getElementById("msg_2").textContent="Hello Globe"

document.getElementById("msg_2").innerHTML="<h4 id= 'newTitle'>Hello Javascript</h4>"

console.log(document.querySelector("#newTitle").textContent)

console.log(document.querySelector('.ui_msg').textContent)

heading.style.color = "blue"
heading.style.fontSize = "80px"

const inputText = document.getElementById("name")
inputText.style.borderColor = "Red"

inputText.setAttribute("placeHolder", "Enter Name")

let para3 = document.createElement("p")
para3.innerHTML = "Hello Praveen"

document.body.append(para3)

para3.remove()





