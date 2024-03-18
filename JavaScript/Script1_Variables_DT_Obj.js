var a=8;
var b=10;
console.log(a+b);
//var is a general datatype. We can store any value in it and it will automatically identify which type of data is being stored in it. typeof is the keyword we use find the datatype of thing stored in var.
var c="Hello";
console.log(typeof(a),typeof(b),typeof(c));
//The general rules of writing the name of variables in JS are same as any other. Note that JS identifiers are case sensitive.
//Note there is another way of declaring variables in JS. That is using let.
let d=203;
console.log(d);
//There is a difference between let and var. The scope of var is global. The scope of let is block(local).
//There is another way of declaring variables in JS. We can you const. But once declared, it value cannot be altered.
const e=10;
//You have to give a const variable a value at time declaration. Else error is seen.
//const e; Uncomment and see error
//e=e+1; Uncomment and run the code. You will see an error.
//Javascript entertains 7 type of primitives. Rest are objects. Number, String, Null, Symbol, Boolean, Undefined, BigInt. Though these cannot be used at the time of variable creation, we can see them.
var p=10;
var q="Hello";
var r=10000000000000000000000000000000000000000000000000000000000000000;
var x=null;
var y=true;
var z;
console.log(typeof(p),typeof(q),typeof(r),typeof(x),typeof(y),typeof(z));
//Note that though null is primitive, the JS interprets it as object. We can see this when type of x is printed.
//Lets now see how do we create objects in JS.
var obj={
    "Name":"Ashutosh",
    "Roll":22052974,
    "Class":"CSE 43"
}
//Like that we have created an object.
console.log(obj);
//We can edit the properties of objects as follows.
obj.CPPA=9.0;
console.log(obj)