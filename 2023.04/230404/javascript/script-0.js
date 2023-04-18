
//사용자 정의 객체 만들기 1.리터럴표기법 : 변수 선언과 동시에, 변수안에 객체의 값을 지정하는 표기 방식  2.생성자 함수 활용 : 객체를 만들어내는 함수를 선언, 활용하여 객체를 생성 및 운영하는 방법

/*
1.리터럴 표기법.
let book = {
  title : "Javascript",
  author : "Minhyerin",
  pages : 500,
  price : 15000,
  info : function() {
    alert(this.title + "책의 분량은" + this.pages + "쪽 입니다.");
  }
}
*/
//book.info(); 
//사용자 정의 객체에 속성을 추가하거나, 수정하는 방법
//book.field = "IT"; 

let toyRobot = {
  productId : "2023-04-04",
  name : "Robot_1",
  price : "25,000",
  madeIn : "korea",
  quantity : 10,
  showStock : function() {
    document.querySelector('#display').innerHTML = this.name + " 제품은 " + this.quantity + "개 남았습니다.";
  }
}

toyRobot.showStock();