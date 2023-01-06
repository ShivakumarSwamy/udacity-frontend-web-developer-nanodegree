const digits = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

console.log();

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

console.log();

Array.prototype.decimalfy = function() {
  return 10;
};

for (const digit of digits) {
  console.log(digit);
}
