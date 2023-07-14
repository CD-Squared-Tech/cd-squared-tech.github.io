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
};
