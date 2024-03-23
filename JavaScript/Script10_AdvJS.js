//IIFE
//So what we have is, whenever we want to execute async await, we see that we need to create 2 function(async natured) and only then we are able to execute the code. A loop around this is IIFE.

async function getAddress(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },10)
    })
}

(function main(){
    let request=getAddress()
    console.log(request)
})()




//Destructuring     
//It can be used to assign multiple values at the same time. Generally it is executed via using, []
let [x,y]=[7,20]
//x is assigned 7 and y is assigned 20.
let [a,b,c]=[7,20,50]
//a and b are assigned 7 and 20. But, 50 remains unassigned.
let [p,q,...r]=[5,6,7,8,9,9,10,2,3,4,5]
console.log(p)
console.log(q)
console.log(r)
//p and q will be assigned to p and q. rest r will store all the other values in the form of array.
//We can also use this in case of dictionaries. Its just that inplace of [] we need to use {}.
const obj={
    n:1,
    m:2
}
const {l,g}=obj
console.log(l)
console.log(g)



//Spread
//It goes something like this, {...arr}. It is used to select all the elements of a collection object
let f=[1,7,8,2,6]
let ob={...f}//This maps thing to number. 1 is mapped to 1, 7 is mapped to 2 and so on.
//To print sum
console.log(sum(ob))



//Hoisting
//Read notes for this. var is allows hoisting. let and const dont allow so.