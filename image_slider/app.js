const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const container = document.querySelector(".container");

const cardWidth = document.querySelector(".card").offsetWidth 
console.log(cardWidth);

next.addEventListener('click',() => {
    container.scrollBy(cardWidth + 25, 0);
})
prev.addEventListener('click',() => {
    container.scrollBy((-cardWidth) + 25, 0);
})