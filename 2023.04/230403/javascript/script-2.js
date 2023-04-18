/*
function sum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  document.write(sum);
}

sum(10, 20, 30); //arguments = 인자값.
*/


/*
let num1 = parseInt(prompt("첫번째 숫자", ""));
let num2 = parseInt(prompt("두번째 숫자", ""));
let result = addNum(num1, num2);
alert("두 수를 더한 값은" + result + "입니다.");

function addNum(a, b) {
  //let sum = a + b;
  //return sum; //외부에서 함수를 호출한 곳에 값을 반환해라.
  return a + b;
}
//return : 함수문 안에서 리턴이 실행된다면, 반복문 브레이크문과 동일하게 코드를 강제로 종료. 정의문에서 리턴이 실행된다면, 함수를 호출했을 때의 결과값을 반환.
*/


/*
function testAvg(e) {
  let sum = 0;
  for(let i = 0; i < e.length; i++) {
    sum += parseInt(prompt(e[i] + "점수는?", "0"));
  }
  let avg = sum / e.length;
  return avg;
}

let arrSubject = ["국어", "수학"];
let result = testAvg(arrSubject);

document.write(`평균 점수는 ${result}점 입니다.`)
*/

let num = 1;
function gallery(event) {
  if(event) {
    if(num == 9) return;
    num++;
  } else {
    if(num == 1) return;
    num--;
  }
  let imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "/img/pic_" + num + ".jpg") //속성값을 변경시켜라
}