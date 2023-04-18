
//사용자 정의 객체 만들기 1.리터럴표기법 : 변수 선언과 동시에, 변수안에 객체의 값을 지정하는 표기 방식  2.생성자 함수 활용 : 객체를 만들어내는 함수를 선언, 활용하여 객체를 생성 및 운영하는 방법

//2.생성자 함수 활용.

function book(title, author, volum, price) {
  this.title = title;
  this.author = author;
  this.volum = volum;
  this.price = price;
}

let html = new book('javascript', 'hyerin', '500', '28,000');
let css = new book('styleCoding', 'kim', '365', '18,000');
let python = new book('pythonCoding', 'lee', '480', '23,000');
//인스턴스 생성

let bookList = [html, css, python];

document.write("<h1>책 제목으로 살펴보기</h1>")
for(let i = 0; i < bookList.length; i++) {
  document.write("<p>" + bookList[i].title + "</p>");
}