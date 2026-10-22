class MathPresenter {
  constructor(examples) {
    this.examples = examples;
    this.exampleIdx = 0;
    this.stepIdx = 0;
    this.container = document.getElementById("math-container");

    this.render();
    this.initEvents();
  }

  next() {
    const currentSteps = this.examples[this.exampleIdx];

    if (this.stepIdx < currentSteps.length - 1) {
      this.stepIdx++;
    } else {
      // Loop to next example
      this.exampleIdx = (this.exampleIdx + 1) % this.examples.length;
      this.stepIdx = 0;
    }
    this.render();
  }

  render() {
    const stepsToShow = this.examples[this.exampleIdx].slice(0, this.stepIdx + 1);
    // Join intermediate steps with '='
    this.container.innerHTML = stepsToShow.join(" = ") + (this.stepIdx < this.examples[this.exampleIdx].length - 1 ? " =" : "");
  }

  initEvents() {
    // Left-click / Mobile tap
    window.addEventListener("pointerdown", (e) => {
      if (e.button === 0) this.next();
    });

    // Any key press
    window.addEventListener("keydown", () => this.next());
  }
}