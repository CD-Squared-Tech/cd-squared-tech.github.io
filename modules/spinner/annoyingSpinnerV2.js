'use strict';
export class AnnoyingSpinner {
  constructor(nodes) {
    this.timers = [];
    this.state = false;
    this.nodes = [...nodes];
  }

  start = (delay = 0) => {
    if (this.state === true) {
      return;
    }
    this.state = true;

    const t0 = setTimeout(() => {
      this.nodes.forEach((x) => {
        x.classList.add('spinner');
      });
    }, 0 + delay);

    const t1 = setTimeout(() => {
      this.nodes.forEach((x) => {
        x.classList.remove('spinner');
        x.classList.add('fasterspinner');
      });
    }, 5000 + delay);

    const t2 = setTimeout(() => {
      this.nodes.forEach((x) => {
        x.classList.remove('fasterspinner');
        x.classList.add('fastestspinner');
      });
    }, 10000 + delay);

    this.timers.push(t0);
    this.timers.push(t1);
    this.timers.push(t2);
    console.log(this.timers);
  };

  stopSpinner = () => {
    this.state = false;
    this.timers.forEach((x) => {
      clearTimeout(x);
    });

    this.nodes.forEach((x) => {
      x.classList.remove('spinner', 'fasterspinner', 'fastestspinner');
    });
    this.timers = [];
  };

  addNodes = (nodes) => {
    this.nodes = [...this.nodes, ...nodes];
  };
}
