const validInput = document.querySelector("#validation-input");

// validInput.addEventListener("input", onInputTarget);
validInput.addEventListener("blur", onInputTarget);


function onInputTarget () {
const inputLength = validInput.value.trim().length;
const inputValidValue = parseInt(validInput.getAttribute("data-length"));

if(inputValidValue === inputLength){
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
} else if(inputLength === 0) {
    validInput.classList.remove("valid", "invalid");
}
else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
    }
}
