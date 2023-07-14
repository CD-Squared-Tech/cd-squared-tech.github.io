"use strict";
import { annoyingSpinner } from "./modules/annoyingSpinner.js";
import { stopSpinner } from "./modules/stopSpinner.js";

console.log("test");
annoyingSpinner();
document.getElementById("stopButton").addEventListener("click", stopSpinner);
