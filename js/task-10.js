const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxesDiv);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount){
    const baseSize = 30;
    const boxes = [];

    for(let i = 0; i < amount; i += 1){
        const createNewBox = baseSize + i * 10;
        const createDiv = document.createElement("div");

        createDiv.style.width = `${createNewBox}px`;
        createDiv.style.height = `${createNewBox}px`;
        createDiv.style.backgroundColor = getRandomHexColor();
        boxes.push(createDiv);
    }
    divBoxes.append(...boxes);
}

function destroyBoxes() {
    divBoxes.innerHTML = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxesDiv(){
    const amount = input.valueAsNumber;
    createBoxes(amount);
  }