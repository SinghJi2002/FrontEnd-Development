//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

let btn=document.getElementById('btn')
undefined



btn.addEventListener("dblclick",()=>{
    alert("I was clicked. Yayy!!")
})
undefined




btn.addEventListener("click",()=>{
    document.querySelector(".container").insertAdjacentHTML("afterbegin","I was added after single click")
})
undefined




//ContextMenu triggers event on right click at element
btn.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please")
})
undefined





btn.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keycode)//Prints key number
})
undefined
//VM1913:2 ArrowRight undefined