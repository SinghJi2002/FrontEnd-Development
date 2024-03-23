var a=prompt("Enter Your Age")

do{
    if(a>18){
        console.log("You can drive")
    }
    else{
        console.error("You cannot drive")
    }
    var b=prompt("Do you want to continue(Y/n)?")
}while(b=='Y')