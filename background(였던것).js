const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  

const color = document.body.style;
const button = document.body.querySelector("button");

function buttonClick() {
const color1 = colors[Math.floor(Math.random() * colors.length)];
let color2 = colors[Math.floor(Math.random() * colors.length)];
if (color1 === color2) {
    color2 = colors[Math.floor(Math.random() * colors.length)];
}
color.background = `linear-gradient(120deg, ${color1}, ${color2})`;
}

button.addEventListener("click", buttonClick);

// <button class="change">change!</button>