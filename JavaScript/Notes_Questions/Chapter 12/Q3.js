function simpleInterest(p,r,t){
    return((p*r*t)/100)
}

let a=parseInt(prompt("Enter Principle"))
let b=parseInt(prompt("Enter Rate"))
let c=parseInt(prompt("Enter Time"))
console.log(simpleInterest(a,b,c))
