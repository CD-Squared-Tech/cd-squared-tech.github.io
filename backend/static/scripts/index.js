"use strict";
/*
import {
  annoyingSpinner,
  stopSpinner,
} from './modules/spinner/annoyingSpinner.js';

annoyingSpinner(5000);
document.getElementById('stopButton').addEventListener('click', stopSpinner);
document.querySelector('#startSpinner').addEventListener('click', () => {
  stopSpinner();
  annoyingSpinner();
});
*/

const learnBtn = document.getElementById("cdBtn");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("learnMore");

// LearnMore button opens a modal dialog
learnBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("");
});