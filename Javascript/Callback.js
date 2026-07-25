//Callback

// function greet(name, bye)
// {
//     console.log("Hello " + name)
//     callback();

// }

// function bye()
// {
//     console.log("Good Bye")
// }


// greet("Praveen")
// bye()

// greet("Praveen", bye)

//A callback is a function passed as a parameter to another function, which is executed later.

function orderFood(callback)
{
    console.log("Preparing Food")

    setTimeout(()=>{
        console.log("Food is Ready")
        callback()
    }, 3000)
}

function notifyCustomer()
{
    console.log("Customer has been notified")
}

orderFood(notifyCustomer)

/////////////////////////////////////

function login(callback) {
    console.log("1. Login Successful");

    setTimeout(() => {
        callback();
    }, 1000);
}

function getProfile(callback) {
    console.log("2. Profile Loaded");

    setTimeout(() => {
        callback();
    }, 1000);
}

function getOrders(callback) {
    console.log("3. Orders Retrieved");

    setTimeout(() => {
        callback();
    }, 1000);
}

function makePayment(callback) {
    console.log("4. Payment Successful");

    setTimeout(() => {
        callback();
    }, 1000);
}

// Callback Hell
login(() => {
    getProfile(() => {
        getOrders(() => {
            makePayment(() => {
                console.log("5. Process Completed");
            });
        });
    });
});






login(() => {
    getProfile(() => {
        getOrders(() => {
            makePayment(() => {
                console.log("Completed");
            });
        });
    });
});