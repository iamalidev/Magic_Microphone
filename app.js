"use strict";

const textBox = document.querySelector(".text-box");
const body = document.querySelector("body");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const text = new SpeechSynthesisUtterance(textBox.value);
  text.lang = "en-GB";
  speechSynthesis.speak(text);
});
