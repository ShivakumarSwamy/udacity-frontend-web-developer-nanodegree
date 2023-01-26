document.addEventListener('click', function (event) {
   console.log('The document was clicked');
   console.log(event);
});

document.addEventListener('keypress', function (event) {
   console.log('You pressed a key in keyboard');
   console.log(event);
});