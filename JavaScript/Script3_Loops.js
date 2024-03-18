//There are 5 types of loops in javascript. All of them have been demonstrated below.

//For loop
for(let i=0;i<10;i++){
    console.log(i);
}
console.log();

//while loop
let j=0;
while(j<10){
    console.log(j);
    j++;
}
console.log();

//do-while loop
let k=0;
do{
    console.log(k);
    k++;
}while(k<10);
console.log();


//For in loop
obj={
    "Name":"Divyansh",
    "Roll":22052980,
    "Branch":"CSE"
}
for(const key in obj){
    let a=obj[key];
    console.log(key);
    console.log(a);
}
console.log();



//for of loop
let b="I name is Ashutosh"
for(const key of b){
    console.log(key);
}
//The main difference between for of and for in is that for of is used in case of predefined objects, such as strings and arrays, whereas the for in is used for user defined objects such as obj we have created above.