//Here are few demonstrations of how to operate with arrays in JS.
let arr=[1,2,"Ashutosh",'a',34];
let ans=[9,10,21];
console.log(arr);
console.log(arr.length);
//Arrays in JS are mutable.
arr[1]="Divyansh";
console.log(arr);
//0 index system operates here.
//Indexing is allowed.
console.log(arr[3]);
//Methods such as toString, join, pop, shift, push, unshift, delete, concat, sort, splice, slice, reverse and many more.
console.log(arr.toString());
console.log(arr.join("and"));//replaces , with and
console.log(arr.pop());//Generally removes the last element.
console.log(arr.toString());
arr.shift();//Similar to pop but removes first element
console.log(arr.toString());
arr.push("Sahu");
console.log(arr.toString());
arr.unshift("Ashu");//Similar to push, but adds elements from the front
console.log(arr.toString()); 
delete arr[6]; //Similar to pop, but removes element from demanded index. Note, the array length does changes, as in case of pop or shift, rather a undefined is signed to that index.
console.log(arr.concat(arr,ans));//Joins the two arrays. Doesnt changes the joining arrays.
ans.sort();//Changes the orignal array.
console.log(ans.splice(1,2));//Removes element from 1 included to 2 excluded.
console.log(ans);
console.log(ans.splice(10,22,45));//If element not to splice, it gets added to orignal array
console.log(ans);
console.log(arr.slice(1,3));
console.log(arr.reverse());


//Lets now look into looping
let a=[1,5,3,6,9];
// let b;
// for(b=0;a.length;b++){
//     console.log(a[b]);
// }
for (const iterator of a) {
    console.log(iterator);
}

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        console.log(a[key]);
        
    }
}

//See the difference between the usage of forin and forof for the same purpose

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)});

//To create new array from existing array we use map
let newArr=a.map((e)=>{
    return(e**2);
})
console.log(newArr);   

//Filter function, its kind of a labeling function, that store values labeled true for certain condition

let greaterThanSeven=(x)=>{
    if(x>7){
        return(true);
    }
    else{
        return(false);
    }
}

let filterArray=a.filter(greaterThanSeven);
console.log(filterArray);

//Reduce is used to perform operation on elements of array..
function multi(x,y){
    return(x*y);
}
let reduceArray=a.reduce(multi);
console.log(reduceArray);

//Convert any object into array, we use array from

console.log(Array.from("Harry"));
