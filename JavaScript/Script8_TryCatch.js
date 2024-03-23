let a=prompt("Enter First Number")
let b=prompt("Enter Second Number")

let sum=parseInt(a)+parseInt(b)
//Normal try catch block
try{
    console.log("Sum of numbers "+ sum*X)
}
catch(error){
    console.log("Error was found")
}

//User generated threads. We use throws to do so.
if(180>sum){
    console.log("Sucess")
}
else{
    throw new Error("Error")
}

//Implementing finally block
try{
    console.log("Sum is "+sum*x)
}catch(err){
    //Note throw new Error is async. Hence will be executed after finally is accepted.
    throw new Error("Failure")
}
finally{
    console.log("Executing Finally")
}

//error has three properties. They are name, message. There is another thing called stack, which is combination of message and name. Here is its implementation

try{
    console.log("Sum is "+sum*x)
}catch(err){
    console.log("Error")
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}

