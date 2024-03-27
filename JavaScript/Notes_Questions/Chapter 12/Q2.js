const numbers = [1, 2, 3, 4, 5];
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(...numbers));