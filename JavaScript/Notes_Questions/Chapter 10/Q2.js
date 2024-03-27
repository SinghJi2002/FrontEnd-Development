class complexNumber{
    real
    imaginary
    constructor(real,imaginary){
        this.real=real
        this.imaginary=imaginary
    }

    display(){
        console.log(this.real+" + "+this.imaginary+"i")
    }

    sum(a,b){
        let r=a+this.real
        let c=b+this.imaginary
        console.log(r+" + "+c+"i")
    }
}

let a=new complexNumber(5,6)

a.display()

let p=parseInt(prompt("Enter Real Number"))
let q=parseInt(prompt("Enter imaginary Number"))

a.sum(p,q)