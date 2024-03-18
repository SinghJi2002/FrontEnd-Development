//to access a html element via class we use getElementByClassName.
let a=document.getElementsByClassName("box1");//Return html collection. Note styling cannot be applied on html collection directly. For that we need to use loops.
console.log(a);
//Lets say we want to background color of class box1. Note we need to use indexing operator, in any case, even if its the only element, like in the case of a.
a[0].style.backgroundColor="green";
//Another way to access element is using id. class is broad, whereas a id is specific
let b=document.getElementById("b")
//If we want to style b, we dont need to use indexing operator.
b.style.backgroundColor="red";
//We can use css selectors to perform selection too.
let a=document.querySelector(".box1");
//If there are 100 elements by class name box1, it will access the first box by class name box1.
a.style.backgroundColor="red";
//If you want to resolve the previous problem of first occurance selection, we can use queryselectorall.
let a=document.querySelectorAll(".box1");//Returns HTML collection
a.style.backgroundColor="orange"
//Using loop, editing the whole html collection.
for (const iterator of object) {
    iterator.style.backgroundColor="green";
}
//Another way to do it
a.forEach(e=>{
    e.style.backgroundColor="green";
});
//If you want to all the usages of a particular div in a html doc, we can use getElementByTagName
document.getElementsByTagName("div")//All the div tag elements used in html will displayed as html collection

//Matches. Generally compare the classes and ids and returns true and false.
let a=document.body.children;
let b=a[0].children;
let c=b[0].matches(".box1");

//closest
let a=document.body.children;
let b=a[0].children;
let d=b[0];
d.closest(".container")//returns html tag. If will always be ancestor, not sibling. For instance, this will return <div class="container"></div> 

//contains. check where a class,element or id is present in something or not. It returns true on self contain too.
let a=document.body.children
let b=a[0].children
a[0].contains(b[0])//This will return true.
