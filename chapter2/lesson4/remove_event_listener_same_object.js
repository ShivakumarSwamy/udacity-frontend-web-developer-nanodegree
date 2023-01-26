function myEventListeningFunction() {
    console.log('howdy');
}

function removeListenerOnClick(listener) {
  document.removeEventListener('click', listener)
  console.log('Removed event listener on \'click\'');
}

document.addEventListener('click', myEventListeningFunction);

setTimeout(removeListenerOnClick, 3000, myEventListeningFunction);
