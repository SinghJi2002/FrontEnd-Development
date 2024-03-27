let a=document.createElement('div')
a.setAttribute("class","parent")
a.textContent="I am parent"
document.querySelector(".container").append(a)

let b=document.createElement('div')
b.setAttribute("class","child1")
b.textContent="I am child1"
document.querySelector(".parent").append(b)

let c=document.createElement('div')
c.setAttribute("class","child2")
c.textContent="I am child2"
document.querySelector(".parent").append(c)

let d=document.createElement('div')
d.setAttribute("class","child2")
d.textContent="I am child3"
document.querySelector(".parent").append(d)