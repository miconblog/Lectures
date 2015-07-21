// 객체를 선언 할 때 키 값에 변수명을 넣어서 생기는 문제
var sName = 'my';
var oData = {
  sName + 'Name' : '최영규',
  sName + 'Age' : 30
};

var elOutput = document.getElementById('output');
for (var k in oData) if (oData.hasOwnProperty(k)) {
  elOutput.innerHTML += oData[k] + '\n';
}