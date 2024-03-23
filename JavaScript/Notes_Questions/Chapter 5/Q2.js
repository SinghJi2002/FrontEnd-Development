var a=[]
var index=0

do{
    var number=prompt("Enter Number")
    a[index]=number
    index++
}while(number!=0)

for (const iterator of a) {
    alert(iterator)
}