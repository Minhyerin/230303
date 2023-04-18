/*
function addNum() {
  let sum = 10 + 20;
  document.write(sum);
}

addNum();
*/
//재사용이 불가능한 함수


/*
let num1 = parseInt(prompt("값을 입력하세요", "a"));
let num2 = parseInt(prompt("값을 입력하세요", "b"));

function addNum(a,b) { //매개변수
  let sum = a + b;
  document.write(sum);
}

addNum(num1, num2);
*/ //인자값(인수)를 넣어야한다
//매개변수 사용 = 사용자로부터 값을 받을 수 있음


let text_1 = prompt("이름은?", "");
let text_2 = prompt("사는 곳은?", "");

function myFnc(name, area) {
  document.write(`안녕하세요. ${name} 입니다`, "<br/>");
  document.write(`사는 곳은 ${area} 입니다.`, "<br/><br/>");
}

myFnc(text_1, text_2);

/*
let rightId = "korea";
let rightPw = 1234;

function login(id, pw) {
  if(id == rightId) {
    if(pw == rightPw){
      document.write(`${id}님, 방문을 환영합니다.`)
    } else {
      alert("잘못된 비밀번호 입니다.")
    }
  } else {
    alert("존재하지 않는 아이디 입니다.")
  }
}

let userId = prompt("아이디를 입력하세요", "");
let userPw = prompt("비밀번호를 입력하세요", "");
login(userId, userPw);
*/