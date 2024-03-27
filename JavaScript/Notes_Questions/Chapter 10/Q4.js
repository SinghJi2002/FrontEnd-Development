class human{
    age
    name
    constructor(age,name){
        this.age=age
        this.name=name
    }

    display(){
        console.log("Name of human is "+this.name+" and his age is "+this.age)
    }
}

class student extends human{
    marks
    constructor(age,name,marks){
        super(age,name)
        this.marks=marks
    }

    display(){
        console.log("Name of human is "+this.name+" and thier age is "+this.age+" and thier is "+this.marks)
    }
}


let a=new human(21,"Ashutosh")

let b=new student(21,"Divyansh",100)

console.log(a instanceof human)
console.log(a instanceof student)
console.log(b instanceof human)
console.log(b instanceof student)

