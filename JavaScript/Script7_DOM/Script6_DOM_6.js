document.querySelector(".container").addEventListener("click",()=>{
    alert("Container was clicked")
})
undefined
    document.querySelector(".childContainer").addEventListener("click",()=>{
    alert("Child Container was clicked")
})
undefined
    document.querySelector(".child").addEventListener("click",()=>{
    alert("Child was clicked")
})
undefined
//Above is an instance for event bubbling. Here we see clicking one element trigger multiple events of different elements.
undefined

//Even after editing the child element, and providing it defined dimensions, it is observed all the three events are being triggered upon clicking.

//Even after editing the child element,childContainer element, and container and providing them defined dimensions, it is observed all the three events are being triggered upon clicking child, two are triggered on clicking childContainer and only 1 is getting triggered on clicking container. What we want is, we dont want the bubling, and we want seperate events to occur for each element. This can be achieved via stopPropagation and declaring a variable for eventListener for each class.

document.querySelector(".container").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("container Was clicked")
})
undefined
document.querySelector(".childContainer").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child container Was clicked")
})
undefined
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child Was clicked")
})
undefined
//Event listner can be removed via the command, removeEventListener
document.querySelector(".child").removeEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child Was clicked")
})




//Set interval is a command that helps a do an action repeatedly at a fixed interval. For instance, lets say i want to change the color of '.container' class at every three seconds, then this could be done by,
function generateRandomColors(){
    let red=Math.floor(Math.random()*256)
    let green=Math.floor(Math.random()*256)
    let blue=Math.floor(Math.random()*256)
    var color='rgb('+red+','+green+','+blue+')'
    return(color)
}
//Above is function to generate random colors,
setInterval(()=>{
    document.querySelector('.container').style.backgroundColor=generateRandomColors()},3000)
1
//setinterval takes two thing, one is function that it need to execute at time intervals, and the other is thing at which it need to execute is, in milliseconds.
//Note that whenever a set interval command is executed it returns a number. this number is interval number for that task.
//Using this number and clearInterval, we can stop effects of step interval




//Another similar function is setTimeout. Only that it performs certain action after a given interval(millisec) and doesnot repeat it.
setTimeout(()=>{
    document.querySelector('.container').style.backgroundColor=generateRandomColors()},3000)
2
//To stop setTimeout we use, clearTimeout.
clearTimeout(2)