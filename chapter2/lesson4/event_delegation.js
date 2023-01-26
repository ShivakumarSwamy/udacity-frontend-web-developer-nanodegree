const myCustomDiv = document.createElement('div');

function respondToTheClick(event) {
    if (event.target.nodeName === 'SPAN') {
      console.log(`A span was clicked: ${event.target.textContent}`);
    } else if (event.target.nodeName === 'P') {
      console.log(`A paragraph was clicked: ${event.target.textContent}`);
    }
};

for (let i = 0; i < 200; i++) {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is paragraph number ' + i;
  myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);

const myCustomSpan = document.createElement('span');
myCustomSpan.textContent = "SPAN";
myCustomSpan.style.color = "blue";

myCustomDiv.appendChild(myCustomSpan);

myCustomDiv.addEventListener('click', respondToTheClick);