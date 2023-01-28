const t0 = performance.now();
const myCustomDiv = document.createElement('div');

for (let i = 0; i < 100000; i++) {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is paragraph number ' + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
const t1 = performance.now();

console.log(`This code took ${t1 - t0} milliseconds`);