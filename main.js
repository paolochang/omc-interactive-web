(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentActive = graphicElems[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, ovserver) => {
    ioIndex = +entries[0].target.dataset.index;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate() {
    currentActive.classList.add("visible");
  }

  function inactivate() {
    currentActive.classList.remove("visible");
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];

      if (!step) continue;

      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate();
        currentActive = graphicElems[step.dataset.index];
        activate();
      }
    }
  });

  activate();
})();
