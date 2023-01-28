const t0 = performance.now();

for (let i = 0; i < 100000; i++) {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is paragraph number ' + i;

  document.body.appendChild(newElement);
}

const t1 = performance.now();

console.log(`This code took ${t1 - t0} milliseconds`);