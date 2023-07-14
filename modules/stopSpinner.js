export const stopSpinner = () => {
  const nodes = document.querySelectorAll("p");
  nodes.forEach((x) => {
    x.classList.remove("spinner", "fasterspinner", "fastestspinner");
  });
};
