'use strict';
import { annoyingSpinner } from './modules/spinner/annoyingSpinner.js';

const spin = new annoyingSpinner();
console.log(spin);
spin.start();
spin.stopSpinner();

document.querySelector('#stopButton').addEventListener('click', () => {
  spin.stopSpinner();
});
document.querySelector('#startSpinner').addEventListener('click', () => {
  spin.stopSpinner();
  spin.start();
});
