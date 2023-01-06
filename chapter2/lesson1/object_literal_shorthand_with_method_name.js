let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth() {
    return 10;
  }
};

console.log(gemstone.calculateWorth());