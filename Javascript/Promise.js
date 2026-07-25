//Promise in Javascript

//Promise is an Object that represents the eventual results (success or failure) of an asynchronous operation

//syntax

// let myPromise = new Promise((resolve, reject)=>{

// })

// let loginPromise = new Promise((resolve, reject)=>{

//     let loginSuccess = false

//     if(loginSuccess)
//     {
//         resolve("Login Successful")
//     }
//     else
//     {
//         reject("Login Failed")
//     }

// })

// loginPromise
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))



// function login(username, password)
// {
//     return new Promise((resolve, reject)=>{

//         if(username === "admin" && password === "1234")
//         {
//             resolve("Login Successful")
//         }
//         else
//         {
//             reject("Invalid Login")
//         }
//     })
// }

// login("admin", 1234)
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

function withdraw(balance, amount)
{
    setTimeout(()=>{
        if(balance>=amount)
        {
        console.log("Withdraw Sucessful")
        }
        else
        {
        console.log("Insufficient Balance")
        }
    }, 3000)
    
}


//withdraw(5000, 2000)

//console.log("Transcation Proceesing...")

function withdrawn(balance, amount)
{
    return new Promise((resolve, reject)=>{
        if(balance>=amount)
        {
            resolve("Withdraw Successfully done")
        }
        else
        {
            reject("Insufficient Balance")
        }
    })
}

withdrawn(5000, 2000)
    .then(result=>
    {
        console.log(result)
        console.log("Print Receipt")
    })
    .catch(error=>console.log(error))


// //if..else (executes immediately)

//
// 
// asyn/await



