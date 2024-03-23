//Here we are going to implement promises in java script
console.log('This is promises')

let prom1=new Promise((resolve,reject)=>{
    let count=Math.random()
    if(count>0.1){
        resolve("Sucess1")
    }
    else{
        reject("Failure1")
    }
})
//Above we have implemented promise. Promise in js has its own callbacks, resolve and reject. In case of success, resolve is called and in case of failure, reject is called.

//There are two properties associated to promise object, result and state. Both are intially undefined/pending. state changes to fulfilled in case of resolve or rejected in case of reject. result changes to value in case of resolved or error when rejected .

//resolve and reject are recieved via then and catch repectively. Though then can recieve resolve with passage of one argument and if no arguments are passed then 'then' recieves reject.

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

//Below we are going to see the example of promise chaining.

let prom=new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve(1)
    },2000)
}).then((result)=>{
    alert(result)
    return 2
}).then((result)=>{
    alert(result)
    return 3
}).then((result)=>{
    alert(result)
    return 4
})


//Promise APIs
//1)all
let prom2=new Promise((resolve,reject)=>{
    let count=Math.random()
    if(count>0.1){
        resolve("Sucess2")
    }
    else{
        reject("Failure2")
    }
})

let prom3=Promise.all([prom1,prom2])//Creating collection of promises
prom3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})

//Prints array of output. All will be showing status only when both the promises above are resolved. If not, only catch will activate and error of the failing promise will be printed.

//If in case you want that all promises are executed no matter whether they are resolved or rejected, the we use allSettled. Though it returns the state and reason/value of promise.

prom3=Promise.allSettled([prom1,prom2])
prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

//There is another API, race. Waits for the first request to settle, and prints its result.

prom3=Promise.race([prom1,prom2])
prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

//There is another api called any. Its similar to race. But race throws output in both error and success. But it will throw aggregate error if all are failure. all throws output in case of success.
prom3=Promise.any([prom1,prom2])
prom3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

//There is another api called resolve. Here is how its implemented.
let promise = Promise.resolve(17468);
promise.then(function (val) {
	console.log(val);
});

//The api above make resolved promise with given value.

//There is another api called reject. Here is how its implemented.
let promise2 = Promise.reject(17468);

promise2.catch(function (val) {
	console.log(val);
});

//The api above make rejected promise with given value.

