const add = document.getElementById("increment");
const reset = document.getElementById("reset");
const minus = document.getElementById("decrement");
const text = document.getElementById("text");

add.addEventListener("click", () => {
    text.innerText = Number(text.innerText) + 1;
})
minus.addEventListener("click", () => {
    text.innerText = Number(text.innerText) - 1;
})
reset.addEventListener("click", () => {
    text.innerText = "00";
})