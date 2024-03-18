//The general syntax of function in JS is as follows.
function get_name(obj){
    console.log(obj.Name);
}

let stud1={
    "Name":"Ashutosh",
    "Roll":22052974,
    "Class":"CSE 43"
}

let stud2={
    "Name":"Divyansh",
    "Roll":22052980,
    "Class":"CSE 46"
}

get_name(stud1);
get_name(stud2);

//Concepts like default parameter, return, function overloading are also applicable here.
//undefined + number= NaN

//Now there is something called arrow function in JS. These functions help us store the functions in variables. Lets see below.

let func1=(x)=>{
    console.log(x);
}

func1(34);


