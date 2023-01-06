function sum() {
  let total = 0;
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

console.log(sum(1, 2));
console.log(sum(10, 36, 7, 84, 90, 110));
console.log(sum(-23, 3000, 575000));