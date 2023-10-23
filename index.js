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
// learnBtn.addEventListener("click", () => {
//   dialog.showModal();
// });

// Cancel button closes the dialog box
// cancelButton.addEventListener("click", () => {
//   dialog.close("");
// });

const contentWrapper = document.querySelector(".content")
let contentWrapperPostion = contentWrapper.scrollTop;
const mainContentWrapper = document.querySelector(".mainContentWrapper")
const sidebarWrapper = document.querySelector(".sidebarWrapper")
const logo = document.querySelector(".horizontal-logo")
const socials = document.querySelector(".socials-list")
const viewportWidth = window.innerWidth;

console.log(mainContentWrapper.scrollTop)

if(viewportWidth <= 768) {
  contentWrapper.addEventListener("scroll", (event) => {
    let contentContainerScroll = contentWrapper.scrollTop;
    // console.log("contentContainerScroll :" + contentContainerScroll)
    // console.log("contentWrapperPostion :" + contentWrapperPostion)
    if(contentContainerScroll > contentWrapperPostion) {
      logo.classList.add("small-horizontal-logo");
      socials.classList.add("socials-list-hidden")
      sidebarWrapper.classList.add("shortSidebarWrapper")
      mainContentWrapper.classList.add("shortMainContentWrapper")
    } else {
      logo.classList.remove("small-horizontal-logo");
      socials.classList.remove("socials-list-hidden")
      sidebarWrapper.classList.remove("shortSidebarWrapper")
      mainContentWrapper.classList.remove("shortMainContentWrapper")
    }
  })
}

