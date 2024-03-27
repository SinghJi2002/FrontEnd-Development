async function timeout(n){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve(n)
        },n)
    })
}

(function loader(n){
    timeout(n).then((n)=>{
        console.log(n)
    })
})(10)

