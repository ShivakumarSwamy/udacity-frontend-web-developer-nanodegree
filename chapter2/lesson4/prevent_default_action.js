document.querySelector('a').addEventListener('click', function(event) {
   event.preventDefault();
   console.log("Look, ma! We didn't navigate to a new page!");
});