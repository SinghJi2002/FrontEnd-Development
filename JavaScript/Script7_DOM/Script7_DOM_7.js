//In JS we have some actions that are synchronous and some actions that are asynchronous. 
//Whenever there is a synchronous element in contention, we see that, it is executed along with the flow of program. On the other asynchronous elements are executed after all synchronous operations have been executed. Below is an example.

console.log("I am a hacker")
console.log("I am a hecker")

setTimeout(()=>{
    console.log("I am inside timeout")
},0)

// console.log("I am after timeout")

//When we will execute the code above we will see that, even when the interval of timeout was set to 0, it is executed after "I am after timeout", since console.log is synchronous and setTimeout is asynchronous.


const callback=(name)=>{
    console.log(name)
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src
    //The code below execute a js function when everyother thing in the webpage has been loaded.
    sc.onload=callback("Harry")
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

//Calling a function from another function is called callback. There is something called callback hell which is very bad for our program, to counter this we use something called promises.

//Promise is the promise of code of execution of code. See code in the file Script7_DOM_Promise_7.js

