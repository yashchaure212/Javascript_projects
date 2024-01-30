const textArea = document.getElementById("bottom-text");
const input = document.getElementById("text-input");
const submit = document.getElementById("submitBtn");
const copy = document.getElementById("copyBtn");
const hover = document.getElementById("hover-text");


function SubmitText () {
    textArea.innerText = input.value;
    input.value = "";
}

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(textArea.innerText);
})


const showText = () => {
    hover.style.display = "block"
}
const hideText = () => {
    hover.style.display = "none"
}

