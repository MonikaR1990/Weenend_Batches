function getData()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(false)
            {
                resolve("Data Loaded")
            }
            else
            {
                reject("Data Loading Failed")
            }
            
        }, 2000)
    })
}

// getData()
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))


async function displayData()
{
    try
    {
        let result = await getData()
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

displayData()