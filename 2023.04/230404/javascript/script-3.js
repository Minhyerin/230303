// 1.데이터가 어딘가에는 저장. 2.저장된 데이터가 시각적으로 표현 => html에 들어간다. 3.삭제시 데이터가 사라진다. 4.새로고침을 하더라도 데이터는 저장되어야 한다.

let itemList = []; //입력한 데이터가 들어가야할 베열객체.

let addBtn = document.querySelector("#add"); //버튼의 그릇
addBtn.addEventListener("click", addList); //변수에 클릭 기능을 부여, 클릭하면 addLIst 함수실행

function addList(event) {
  event.preventDefault();
  let item = document.querySelector("#item").value; //item이라는 그릇에 input박스에 들어가는 값을 넣는다.
  if(item != null) { //item이 비어져있지 않다면 - item에 값이 있다면.
    itemList.push(item); //배열객체 안에 아이템값을 넣고
    document.querySelector("#item").value = ""; //기존에 있던 영역은 값을 비워준다.
    document.querySelector("#item").focus(); //비우고 포커스
  }
  showList(); //쇼리스트 함수 실행
}

function showList() {
  let list = "<ul>"; //지역변수 리스트에 유엘태그 
  for(let i = 0; i < itemList.length; i++) { //
    list += "<li>" + itemList[i] + "<span class='close' id= "+ i +"> X </span></li>"
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  let remove = document.querySelectorAll(".close");
  for(let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}