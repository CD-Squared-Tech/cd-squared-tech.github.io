'use strict';
// import { AnnoyingSpinner } from './modules/spinner/annoyingSpinner.js';

// const spin = new AnnoyingSpinner();
// console.log(spin);
// spin.start();
// spin.test2();

// document.querySelector('#stopButton').addEventListener('click', () => {
//   spin.stopSpinner();
// });
// document.querySelector('#startSpinner').addEventListener('click', () => {
//   spin.start();
// });
//----------------V2----------------
import { AnnoyingSpinner } from './modules/spinner/annoyingSpinnerV2.js';

const nodes = document.querySelectorAll('img');
const nodes2 = document.querySelectorAll('p');
const spin = new AnnoyingSpinner([...nodes, ...nodes2]);
spin.start();

document.querySelector('#stopButton').addEventListener('click', () => {
  spin.stopSpinner();
});
document.querySelector('#startSpinner').addEventListener('click', () => {
  spin.start();
});
