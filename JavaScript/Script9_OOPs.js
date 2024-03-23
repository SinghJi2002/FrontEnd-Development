//Demostration of object oriented programming in java.
class Animal{
    weight
    height
    name
    constructor(name,height,weight){
        this.name=name
        this.height=height
        this.weight=weight
    }
    eats(eats) {
        console.log(eats)
    }

    movement(movement){
        console.log(movement)
    }
}

class rabbit extends Animal{
    constructor(name,height,weight){
        super(name,height,weight)
    }
    eats(){
        super.eats()
    }
}

let a=new Animal("Lion",150,100)
let b=new rabbit("Rabbit",50,30)
console.log(a.name)

console.log(a instanceof Animal)
console.log(b instanceof Animal)
console.log(a instanceof rabbit)