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
}

let a=new complexNumber(5,6)
a.display()
