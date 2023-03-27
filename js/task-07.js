const inputFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text")

inputFontSize.addEventListener("input", sliderFontSize);

function sliderFontSize () {
text.style.fontSize = `${inputFontSize.value}px`;
}