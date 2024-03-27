document.querySelector(".box").innerHTML
'Hey I am a box'



document.querySelector(".box").innerText
'Hey I am a box'



document.querySelector(".container").innerHTML
'\n      <div class="box">Hey I am a box</div>\n    '



document.querySelector(".container").innerText
'Hey I am a box'

//Outerhtml command returns the inner html of a block and its own html
document.querySelector(".box").outerHTML
'<div class="box">Hey I am a box</div>'

document.querySelector(".container").outerHTML
'<div class="container">\n      <div class="box">Hey I am a box</div>\n    </div>'




document.querySelector(".container").tagName
'DIV'



document.querySelector(".container").nodeName
'DIV'
//The difference between nodeName and tagName is that node name is aplicable for all elements and non element thing but tag name for elements only




document.querySelector(".container").textContent
'\n      Hey I am a box\n    '
//Used to get inner text with all the spaces and escape sequences in the selected element.





document.querySelector(".box").hidden
false
//Above is one application of hidden, to check whether something is hidden or not



document.querySelector(".box").hidden=true
true
//Another application is to change the status of that tag. As it can be seen above




//Now we can change the content of a div via the js console itself. Here is how
document.querySelector(".box").textContent="My name is Khan"
'My name is Khan'




//To check wheather there is a attribute in a html tag or not, we use hasAttribute. For instance,
document.querySelector(".container").hasAttribute("class")
true
document.querySelector(".container").hasAttribute("style")
false




//If want to see the value of the attribute, we can use getAttribute
document.querySelector(".container").getAttribute("class")
'container'




//We can change the value of the attribute by,
document.querySelector(".container").setAttribute("class","mainbox")
undefined



//We can check the attributes available in class like this.
document.querySelector(".mainbox").attributes
//NamedNodeMap {0: class, class: class, length: 1}




//We can remove attributes using the following code.
document.querySelector('.box').removeAttribute('class');
undefined




//We can turn on design mode from console. If we do that we can edit the webpage displayed to us, by hover in the webpage itself.
document.designMode="On"
'On'





//Now there a data attribute, in each tag that can be used to store data about that tag. Nothing important, just letting you know.
//We can access the contents of data attributes by
document.querySelector('.mainbox').dataset
//DOMStringMap {}






//Now we are going to demonstrate how using JS console we can insert elements into already existing HTML code
let a=document.createElement("div")//A div was created.
a.setAttribute("class","created from JS")
a.innerHTML="I have been inserted via JS"
//Now that our element is created, we will insert it into preexisting element. Lets say, .mainbox.
document.querySelector(".mainbox").append(a)
//Whenever we use .append, the element that we get is seen in the last of where it has been inserted.





//There are many more methods, they are as follows
undefined
let a=document.createElement("div")//A div was created.
a.setAttribute("class","created from JS")
a.innerHTML="I have been inserted via JS added via prepend"
document.querySelector(".mainbox").prepend(a)

let a=document.createElement("div")//A div was created.
a.setAttribute("class","created from JS")
a.innerHTML="I have been inserted via JS added via before"
document.querySelector(".mainbox").before(a)
//The code above inserted a before the class ".mainbox"

let a=document.createElement("div")//A div was created.
a.setAttribute("class","created from JS")
a.innerHTML="I have been inserted via JS added via after"
document.querySelector(".mainbox").after(a)

let a=document.createElement("div")//A div was created.
a.setAttribute("class","created from JS")
a.innerHTML="I have been inserted via JS added via replaceWith"
let bc=document.querySelector(".box")
bc.replaceWith(a)





//Next code to examine is insertAdjacent HTML/Text/Element. It comes with three modes, "boforebegin","afterbegin","beforeend","afterend". See the instances of its implementation below.
let a=document.createElement("div")
a.innerText="I have been insert via insertAdjacent element, beforebegin option"
a.setAttribute("class","adjacentElement")
let bcc=document.querySelector(".mainbox")
b.insertAdjacentElement("beforebegin",a)
//<div class=​"adjacentElement">​I have been insert via insertAdjacent element, beforebegin option​</div>​

let a="I have been insert via insertAdjacent element, beforebegin option"
let bccc=document.querySelector(".mainbox")
b.insertAdjacentText("afterbegin",a)

let a="<B>HI There</B>"
let b=document.querySelector(".mainbox")
b.insertAdjacentHTML("beforeend",a)





//remove can be used to remove elements.
document.querySelector(".adjacentElement").remove()
undefined





//If want a list of all the classes a html element has, we use classlist
document.querySelector(".mainbox").classList
//DOMTokenList['mainbox', value: 'mainbox']




//If we only want names.
document.querySelector(".mainbox").className
'mainbox'




//We can add classes to HTML elements.
document.querySelector(".mainbox").classList.add("container")
undefined
//See yourself.
document.querySelector(".mainbox").className
'mainbox container'





//It can also be removed
document.querySelector(".mainbox").classList.remove("mainbox")
undefined





//Toggling
    document.querySelector(".container").classList.toggle('.container')
true
    document.querySelector(".container").classList.toggle('.container')
false
    document.querySelector(".container").classList.toggle('.container')
true
    document.querySelector(".container").classList.toggle('.container')
false
    document.querySelector(".container").classList.toggle('.container')
true
//See how it turns is true and false on toggling
