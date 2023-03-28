function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", newBackgroundColor);

function newBackgroundColor() {
  const currentBackgroundColor = window.getComputedStyle(body).backgroundColor;
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = currentBackgroundColor;
}
