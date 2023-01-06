const digits = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
};

console.log();

for (const index in digits) {
  console.log(digits[index]);
}

Array.prototype.decimalfy = function() {
  return 10;
};

console.log();

for (const index in digits) {
  console.log(digits[index]);
}

console.log();

console.log(digits.forEach(console.log))