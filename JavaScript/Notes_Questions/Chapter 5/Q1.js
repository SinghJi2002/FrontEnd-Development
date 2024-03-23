const a=[]

const num=prompt("Enter the number of elements you want")

for(let i=0;i<num;i++){
    a[i]=prompt("Enter number "+i)
}

for (const iterator of a) {
    alert(iterator)
}