let a=prompt("Enter Number")
let factorial=1;
if(a==1){
    alert(1);
}
else if(a==0){
    alert(1);
}
else{
    for(let i=a;i>0;i--){
        factorial=factorial*i;
    }
    alert(factorial);
}