var arr=[]
var index=parseInt(prompt("Enter Length Of Array"))

for(let i=0;i<index;i++){
    arr[i]=prompt("Enter Number")**2
}


for (const iterator of arr) {
    alert(iterator)
}