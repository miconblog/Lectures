var oObj = {
  class : '3학년 1반',
  name : '최영규',
  in : '아무개초등학교',
  for : '훌륭한 사람이 되기 위해',
  do : '공부를 열심히 합니다'
};

var aStr = [];
for (var k in oObj) if (oObj.hasOwnProperty(k)) {
   aStr.push(k + ' -> ' + oObj[k]);
}

document.write(aStr.join('<br/>'));