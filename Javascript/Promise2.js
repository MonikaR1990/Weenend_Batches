function login()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login Successful")
            resolve("Praveen")
        }, 1000)
    })
}


function getProfile(user, id)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Profile Loaded")
            resolve({
                name: user,
                id: id
            })
        },1000)
    })
}

function getOrder(profile)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Order Retrived")
            resolve({
                orderId: 5001,
                amount: 2000
            })
            
        },1000)
    }) 
}

function makePayment(order)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Payment Successful")
            resolve("Order Completed Successful")
        }, 1000)
    })
}

// login()
//     .then(user => {
//         return getProfile(user);
//     })
//     .then(profile => {
//         return getOrder(profile);
//     })
//     .then(order => {
//         return makePayment(order);
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });


async function processOrder() 
{
    let user = await login()
    let profile = await getProfile()
    let order = await getOrder()
    let result = await makePayment()

    console.log(result)
}

processOrder()