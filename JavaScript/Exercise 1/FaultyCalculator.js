let num=Math.random();
let a=prompt("Enter first number");
let b=prompt("Enter second number");
let c=prompt("Enter the operator");
obj={
    '+':'-',
    "*":"+",
    "-":"/",
    "/":"*"
}
if(num<0.1){
    let operator=obj[c];
    alert(eval(`${a} ${operator} ${b}`));
}
else{
    let operator=c;
    alert(eval(`${a} ${operator} ${b}`));
}