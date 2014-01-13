# Day 1. 강의 노트

## UI 개발 기본 다지기

 - 웹 서버와 클라이언트(브라우저)의 관계
  - 특정 URL 요청시 HTML로 응답 해준다.
  - UI 개발은 응답된 HTML을 전제로 진행된다.
  - 간단한 웹서버 만들기 실습
    - nodejs
    - apache
    - tomcat + spring

 - HTML/CSS 기본 다지기
  1. 기본 마크업 만들기
  1. 기본 마크업 + 인라인 스타일 적용
  1. 인라인 스타일을 CSS로 바꾸기
    - Tip) 스타일은 HTML 상단에 추가한다.

 - CSS Styling
  - 모든 Tag는 기본 Style을 가지고 있다.
  - 나중에 선언한 스타일이 앞의 스타일을 덮는다.
  - cascading: 폭포같은, 계속되는, 연속적인

 - CSS Selector
  - 특정 마크업을 선택해 스타일을 바꿔본다.
  - [우선순위][1]: inline > #id(100) > .class(10) > tag(1)

 - CSS Positioning
  - static (default)
  - relative
  - **absolute**: it is absolutely not absoulte!
  - fixed


 - JS Basic
  1. ```<script>``` 태그를 이용해 alert 실행
    - Tip) 스크립트는 HTML 하단에 추가한다.
  1. 함수 만들기
    - 함수 실행은 괄호로 열고 닫고 그리고 익명함수 패턴
  1. 기본 문법
    - 모든 선언은 var로 시작한다.
    - 기본 타입과 복합 타입
    - 함수 정의와 표현식(Declaration, Expression)
  1. 스코프(Scope)
    - 전역 스코프와 함수 스코프
    - 지역변수와 전역변수

# Day2. 강의 노트
## Step on Javascript
 - Review
  - Syntax
  - 기본 타입과 복합 타입
  - Scope
  - Function Object

 - 문법 [ref][2]
  - 기본타입
  	 - null과 undefined를 제외하고, 기본타입도 객체처럼 동작한다.
     - 자동 타입 캐스팅

  - Object
    - key-value 쌍으로 Property 이름을 key로 갖는 객체
    - hashMap과 유사함.
    - 모든 객체는 Object.prototye 을 상속받는다.

  - Function
    - 메소드를 실행할 수 있는 객체
    - 내장 메소드: call, apply
    - 함수의 인자로 함수(객체)도 받을 수 있다.

  - Array
    - property가 숫자인 index를 갖는 객체, 숫서가 보장된 객체
    - 내장 메소드: map, splice, forEach..
    - length property가 있다.



 - 함수
  1. 내장 객체 사용
    - JSON, Math, Cookie  
  1. 함수 만들기 실습
  1. 함수 객체 만들기
    - static 객체 VS instance 객체
  1. new 키워드

- DOM 다루기
  1. 라이브러리 없이 DOM 다루기
  2. jQuery 사용법 및 라이브러리로 DOM 다루기
  3. 이벤트

[1]:http://nomadwebdev.blogspot.kr/2012/10/css-2-css.html
[2]:http://bonsaiden.github.io/JavaScript-Garden/ko