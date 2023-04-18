/*
let num = 0;
function testFnc() {
  num++;
  document.write(num, "<br/>");
  if(num == 10) return;

  testFnc();  //반복할수 있는 함수 호출
}

testFnc(); //출력할 수 있는 함수 호출
*/

/*
let myVar = 100; //전역 변수
test();
document.write("my var is" + myVar); //100

function test() {
  let myVar = 50; //지역 변수 (let(키워드)을 사용하지 않으면 우선순위를 가지게됨)
}
*/

/*
add("abc", "123");
function add(a,b) {
  let local = a + b;
  if(b != null) {
    let block = b + a; //블록변수는 블록{}안에서만 유효.
    console.log(block);
  }
  console.log(local);
}
*/

(function() {
  let num = 100;
  function menu() {
    num += 100;
    alert(num);
  }
  menu(); //200
}()); //즉시실행함수


function menu() {
  alert(num);
} //100