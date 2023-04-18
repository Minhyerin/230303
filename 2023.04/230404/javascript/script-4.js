//자바스크립트 문서객체 모델(DOM)
//상세설명 숨기기
//document.querySelector("#detail h3").style.visibility = "hidden";
//document.querySelector("#detail p").style.visibility = "hidden";

/*
document.getElementById("heading").onmouseover = function() {
  this.style.fontSize = "100px";
}
*/

/*
document.getElementsByClassName("accent")[0].style.textDecoration = "underline";
document.getElementsByClassName("accent")[1].style.textDecoration = "underline";
*/


//document.getElementsByTagName("h2")[0].style.backgroundColor = "#eee"


//document.querySelectorAll(".accent")[0].style.backgroundColor = "yellow";

//querySelector 와  getElementById 의 차이점 : Element, Elements 가 가운데 적용되어 있는 메서드 함수의 경우, 태그 노드까지만 스타일을 적용 가능. query는 속성노드 및 텍스트 노드까지 접근  가능하며, 스타일 및 기타 요소 편집이 가능합니다.

let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for(let i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}
//썸네일 서브네일 사진 클릭하여 보기

let isOpen = false;
let view = document.querySelector("#view");
view.addEventListener("click", pageOpen);

function pageOpen() {
  if(isOpen == false) {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명 보기"
    isOpen = false;
  }
}