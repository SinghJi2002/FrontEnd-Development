//Example of usage of java conditionals
let a=21;
if(a>18){
    console.log("You can drive");
}
else if(a==18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
// ** exponentiation operator works in JS   
// == and === operators work in different ways. == only compares the value. === compares both the value and datatype.
console.log(18=="18"); //True
console.log(18==="18"); //False
//Lets see a few instances of ternary operator.
//above if-else into ternary
console.log((a>=18?"You can drive":"You cannot drive"));