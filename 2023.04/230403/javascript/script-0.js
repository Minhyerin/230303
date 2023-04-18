/*
let count = 0;

function myFnc() {
  count++;
  document.write("hello" + count, "<br/>");
}
myFnc();
*/

/*

let theFnc = function() {
  count++;
  document.write("bye" + count, "<br/>")
}

theFnc();
*/

//일반함수와 익명함수의 큰 차이점. 익명함수는 선언 전에 호출문이 오면 실행 되지 않는다.



let color = ["White", "yellow", "aqua", "purple", "black", "pink"];
let i = 0;
function changeColor() {
  i++;
  if(i >= color.length) {
    i = 0;
  }
  let bodyTag = document.getElementById("theBody");
  bodyTag.style.backgroundColor = color[i];
}