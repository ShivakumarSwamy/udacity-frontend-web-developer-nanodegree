const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function() {
  console.log('The heading was clicked!');
  mainHeading.style.backgroundColor = 'red';
});