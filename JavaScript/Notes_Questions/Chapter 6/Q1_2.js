var a=prompt("Enter Your Age")

do{
    if(a>18){
        alert("You can drive")
    }
    else{
        alert("You cannot drive")
    }
    var b=prompt("Do you want to continue(Y/n)?")
}while(b=='Y')