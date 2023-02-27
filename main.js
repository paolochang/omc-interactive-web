(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentActive;

  for (let i = 0; i < stepElems.length; i++) {
    // stepElems[i].setAttribute("data-index", i);
    stepElems[i].dataset.index = i;
    // graphicElems[i].setAttribute("data-index", i);
    graphicElems[i].dataset.index = i;
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;
    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        if (currentActive) {
          currentActive.classList.remove("visible");
        }
        currentActive = graphicElems[step.dataset.index];
        currentActive.classList.add("visible");
      }
    }
  });
})();
