const t0 = performance.now();

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    console.log(`i and j are ${i} ${j}`);
  }
}

const t1 = performance.now();

console.log(`This code took ${t1 - t0} milliseconds`);