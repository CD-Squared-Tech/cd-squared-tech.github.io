export const annoyingSpinner = () => {
  const nodes = document.querySelectorAll('p');
  setTimeout(() => {
    nodes.forEach((x) => {
      x.classList.add('spinner');
    });
  }, 5000);

  setTimeout(() => {
    nodes.forEach((x) => {
      x.classList.remove('spinner');
      x.classList.add('fasterspinner');
    });
  }, 10000);

  setTimeout(() => {
    nodes.forEach((x) => {
      x.classList.remove('fasterspinner');
      x.classList.add('fastestspinner');
    });
  }, 15000);

// Help prevent dizziness by adding an event listener to stop the spinner when someone clicks on the screen

  document.addEventListener('click', () => {
    nodes.forEach((x) => {
      x.classList.remove('spinner', 'fasterspinner', 'fastestspinner');
    });
  });
}
