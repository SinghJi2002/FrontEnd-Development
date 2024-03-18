document.body.children;//Return children elements of body
document.body.children[1];//We are accessing one of the children of body
document.body.children[1].children;//Children of previous elements
document.body.childNodes;//Returns both element and non-element children of body(including text and comment tags)
document.body.childNodes[0];//Directly access one of body child nodes.
document.body.firstChild;//Return first element/non-element child of body
document.body.firstChild[0];//Access first element/non-element of first element/non-element of body
document.body.firstChild[1].nextElementSibling;//Excess next node(element/non-element) of the same parent
document.body.firstChild.parentElement;//Returns parent node of first child.
document.body.firstElementChild;//Accesses first child element.
document.body.lastElementChild;//Accesses last child element.


