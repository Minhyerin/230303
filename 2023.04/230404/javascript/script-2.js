
//프로토 타입 연습
function TestScore(name, kor, eng) {
  this.userName = name,
  this.korNum = kor,
  this. engNum = eng

  TestScore.prototype.getTestInfo = function() {
    document.write("이름: " + this.userName, "<br />");
    document.write("국어: " + this.korNum + "점", "<br />");
    document.write("영어: " + this.engNum + "점", "<br />");
  }

  TestScore.prototype.getAvg = function() {
    return((this.korNum + this.engNum) / 2);
  }
}

let kim = new TestScore("김군", 80, 90);
let oh = new TestScore("오군", 100, 80);

kim.getTestInfo();
document.write(`평균 점수: ${kim.getAvg()}`, "<br/><br/>")
oh.getTestInfo();
document.write(`평균 점수: ${kim.getAvg()}`, "<br/><br/>")