document.querySelector('div').addEventListener('click', function() {
  console.log('I log last, due to bubbling phase âšī¸');
});

document.querySelector('p').addEventListener('click', function() {
  console.log('I log first, due to capturing phase when button is clicked đ');
}, true);

document.querySelector('button').addEventListener('click', function() {
  console.log('I log in middle, due to bubbling phase đ');
});