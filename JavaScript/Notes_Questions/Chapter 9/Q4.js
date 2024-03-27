prom1=new Promise((resolve,reject)=>{
    resolve(45)
})

prom2=new Promise((resolve,reject)=>{
    resolve(56)
})


prom3=new Promise((resolve,reject)=>{
    resolve(61)
})


prom=Promise.all([prom1,prom2,prom3]).then((a)=>{
    alert(a)
}).catch((a)=>{
    alert(5)
})