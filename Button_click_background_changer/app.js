const btn = document.getElementById("bg-btn");
const box = document.getElementById("container");

const changeBg = () => {
    let letters = "0123456789ABCDEF";
    color = "#";
    for (let i=0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))];
    }
    console.log(color);
    box.style.backgroundColor = color;
    navigator.clipboard.writeText(color);
    hexCode.innerText = color;
}

const hexCode = document.createElement("h1");
box.appendChild(hexCode);

btn.addEventListener("click", () => {
    changeBg();
})