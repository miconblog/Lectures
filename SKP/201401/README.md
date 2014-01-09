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

 - CSS Positioning
  - static (default)
  - relative
  - absolute
  - fixed

 - CSS Selector
  - 특정 마크업을 선택해 스타일을 바꿔본다.
  - [우선순위][1]: inline > #id(100) > .class(10) > tag(1)

 - JS Basic
  1. ```<script>``` 태그를 이용해 alert 실행
    - Tip) 스크립트는 HTML 하단에 추가한다.
  1. 함수 만들기
  1. 내장 객체 사용
    - Math,

[1]:http://nomadwebdev.blogspot.kr/2012/10/css-2-css.html
