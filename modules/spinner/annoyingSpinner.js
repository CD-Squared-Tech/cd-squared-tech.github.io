export const annoyingSpinner = (delay = 0) => {
  const nodes = document.querySelectorAll('p');
  setTimeout(() => {
    nodes.forEach((x) => {
      x.classList.add('spinner');
    });
  }, 0 + delay);

  setTimeout(() => {
    nodes.forEach((x) => {
      x.classList.remove('spinner');
      x.classList.add('fasterspinner');
    });
  }, 5000 + delay);

  setTimeout(() => {
    nodes.forEach((x) => {
      x.classList.remove('fasterspinner');
      x.classList.add('fastestspinner');
    });
  }, 10000 + delay);
};

export const stopSpinner = () => {
  const nodes = document.querySelectorAll('p');
  nodes.forEach((x) => {
    x.classList.remove('spinner', 'fasterspinner', 'fastestspinner');
  });
};
