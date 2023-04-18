

function changeColor() {
  let color = ["red", "orange", "yellow", "green", "blue", "purple"]
  let arrNum = Math.floor(Math.random() * color.length);
  let bodyTag = document.getElementById("theBody");
  bodyTag.style.backgroundColor = color[arrNum];
}