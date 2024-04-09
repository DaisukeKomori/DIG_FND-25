"use strict";

const button = document.getElementById("color-button");
const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "brown",
  "pink",
  "black",
];

button.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  button.style.color = colors[Math.floor(Math.random() * colors.length)];
});