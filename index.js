// This JavaScript file defines the behavior of the web page.


// This variable stores the div element with the class "meep".
const meep = document.querySelector('.meep');

// This event listener is called when the user clicks on the word "Meep".
meep.addEventListener('mousedown', () => {
  // This increases the font size of the word "Meep" to 2em.
  meep.style.fontSize = '2em';
});

// This event listener is called when the user releases the button after clicking on the word "Meep".
meep.addEventListener('mouseup', () => {
  // This resets the font size of the word "Meep" to 1em.
  meep.style.fontSize = '1em';
});