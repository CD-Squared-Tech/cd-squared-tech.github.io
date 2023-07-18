'use strict';
export class annoyingSpinner {
  constructor() {
    this.timers = [];
  }

  start = () => {
    this.start = (delay = 0) => {
      const nodes = document.querySelectorAll('p');

      const t0 = setTimeout(() => {
        nodes.forEach((x) => {
          x.classList.add('spinner');
        });
      }, 0 + delay);

      const t1 = setTimeout(() => {
        nodes.forEach((x) => {
          x.classList.remove('spinner');
          x.classList.add('fasterspinner');
        });
      }, 5000 + delay);

      const t2 = setTimeout(() => {
        nodes.forEach((x) => {
          x.classList.remove('fasterspinner');
          x.classList.add('fastestspinner');
        });
      }, 10000 + delay);

      this.timers.push(t0);
      this.timers.push(t1);
      this.timers.push(t2);
      console.log(this.timers);
    };
  };

  stopSpinner = () => {
    const nodes = document.querySelectorAll('p');
    this.timers.forEach((x) => {
      clearTimeout(x);
    });
    nodes.forEach((x) => {
      x.classList.remove('spinner', 'fasterspinner', 'fastestspinner');
    });
    this.timers = [];
  };
}

// export function annoyingSpinner() {
//   (this.timers = []),
//     (this.start = (delay = 0) => {
//       const nodes = document.querySelectorAll('p');
//       const t0 = setTimeout(() => {
//         nodes.forEach((x) => {
//           x.classList.add('spinner');
//         });
//       }, 0 + delay);

//       const t1 = setTimeout(() => {
//         nodes.forEach((x) => {
//           x.classList.remove('spinner');
//           x.classList.add('fasterspinner');
//         });
//       }, 5000 + delay);

//       const t2 = setTimeout(() => {
//         nodes.forEach((x) => {
//           x.classList.remove('fasterspinner');
//           x.classList.add('fastestspinner');
//         });
//       }, 10000 + delay);

//       this.timers.push(t0);
//       this.timers.push(t1);
//       this.timers.push(t2);
//       console.log(timers);
//     });
//   this.stopSpinner = () => {
//     const nodes = document.querySelectorAll('p');
//     this.timers.forEach((x) => {
//       clearTimeout(x);
//     });
//     nodes.forEach((x) => {
//       x.classList.remove('spinner', 'fasterspinner', 'fastestspinner');
//     });
//   };
// }
