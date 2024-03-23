//We are simply developing a server call and recieve system. We are going to have multiple approarches to do. All Of them are listed below.

//Approach 1
function getData1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },10000)
    })
}
console.log("Do some other information")

console.log("Fetching Data")

let data=getData1()

console.log("Process Data")

console.log("Proces Done")

console.log(data)

//The issue in the code above, "let data=getData()" is async. Hence, the code will go on, even when data has not been fetched. So processing of data without data being available is not possible.

//To fix this we can do the following

function getData2(){
    return new Promise((resolve,reject)=>{
        resolve(455)
    },100000)
}
console.log("Doing Some thing")

console.log("Fetching Data")

getData2().then((v)=>{
    console.log(v)
    console.log("Data Processing")
    console.log("Processing Done")
})


//Another way to do the samething is to use async await

async function getData3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3000)
    })
}

async function main(){
    console.log("Doing Some Work")
    console.log("Fetching Data")
    let data=await getData3()
    console.log(data)
    console.log("Processing Data")
    console.log("Process Done")
}

main()


//Another variation to do this is usage of fetch api. Note that fetch api is used to fetch data from server. Note the the fetch command itself is a promise. But note when executing fetch, we need to await, to sync this command. Note, that one data is fetched via fetch, we need to convert it into readable format, whether it is text or json. Though these commands themselves are promise, hence will require await.Note in case we use fetch, use of resolve and reject is not needed.

async function getData4(){
    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
    method:'POST',
    body: JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,
    })
    })
    data=await data.json()
    return(data)
}

async function main(){
    console.log("Doing Some Work")
    console.log("Fetching Data")
    let data=await getData4()
    console.log(data)
    console.log("Processing Data")
    console.log("Process Done")
}

main()