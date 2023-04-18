function showDetail() {
  document.querySelector('#desc').style.display = "block";
  document.querySelector('#open').style.display = "none";
}

function hideDetail() {
  document.querySelector('#desc').style.display = "none";
  document.querySelector('#open').style.display = "block";
}


let coverImage = document.querySelector('#cover');
coverImage.onclick = function() {
  alert('아이유 선행 박수 받다!')
}

coverImage.onmouseover = function() {
  coverImage.style.border = "5px blue solid";
}
coverImage.onmouseout = function() {
  coverImage.style.border = "";
}