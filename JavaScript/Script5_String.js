let a="Hello";
//Index operator is allowed here.
console.log(a[0]);
//Template to print in easier way
let c="Ashutosh";
let b="Divyansh";
console.log(`${c} and ${b} are friends`);
//Escape sequences. Here are a few example.
console.log("We are focusing on \"Birmingham\"");
console.log("My name is Ashutosh.\nI am a student of KIIT University.")
//toUpperCase, toLowerCase, charAt, length, replace, startsWith, endsWith are some function present in JS.
let exam="Toti-Fruti"
console.log(exam.toUpperCase());
console.log(exam.charAt(3));
console.log(exam.length);
console.log(exam.replace('ti','to'));
console.log(exam.startsWith("To"));
console.log(exam.endsWith('uti'));
//slicing is also allowed in string.
console.log(exam.slice(1,3));
//Concatanation of string
console.log(a.concat(b));//We can also use + operator
//Note that after making so many changes in exam string, note that when we will print it, its value will not change. Stirgs are immutable.
console.log(exam);
//indexOf
console.log(exam.indexOf("Fru"));//If not found, return -1.