const adjective = Math.floor(Math.random() * 3) + 1;
const shopName = Math.floor(Math.random() * 3) + 1;
const anotherName= Math.floor(Math.random() * 3) + 1;

adjec={
    1:'Crazy',
    2:'Amazing',
    3:'Fire'
}
sn={
    1:'Engine',
    2:'Foods',
    3:'Garments'
}
aw={
    1:'Bros',
    2:'Limited',
    3:'Hub'
}
console.log(adjec[adjective]+" "+sn[shopName]+" "+aw[anotherName]);
