const myCustomDiv = document.createElement('div');

function respondToTheClick(event) {
    console.log('A paragraph was clicked');
};

for (let i = 0; i < 200; i++) {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is paragraph number ' + i;

  newElement.addEventListener('click', respondToTheClick);

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);