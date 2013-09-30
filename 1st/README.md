Lectures
========
2013년 7월 29일 블로터 아카데미에서 진행된 타이타늄 강의 첫쨋날 노트입니다. 
미리 노트한 내용중 상황을 봐서 스킵한 내용도 좀 있습니다. 참고하셔요. 


## Ice Break
강의 소개, 강사 소개, 수강생 소개 

- 강좌 소개 
 2일짜리 강의로 첫날은 앱을 완성하기 위한 준비단계, 둘쨋날은 앱을 완성하는 단계로 진행 

- 오늘의 미션 
 - 타이타늄 사용을 위한 기본 자바스크립트 익히기.
 - 타이타늄 기본 사용법.
 - 그리고 끼리끼리 친해봅시다.

- 타이타늄 소개
 - 타이타늄으로 만든 앱 소개, CC10, 동구밭 
 - 타이타늄 컴파일은 네이티브 언어로 번역을 해주는 것이 아니라, 네이티브 프록시를 런타임때 자바스크립트로 실행하도록 환경을 만들어준다.

## 강의 준비사항 점검
타이타늄 설치 확인 및 필요한 SDK 다운받기

- [fastdev 및 android avd 설정][1]
[1]:https://github.com/yomybaby/TiStudy/wiki
       
- alloy 1.2 컴파일 설정
```
$> git clone https://github.com/appcelerator/alloy.git
$> cd alloy
$> npm install -g .
```

## Javascript Basic with HTML
크롬 개발자 도구를 이용해서 실습 진행

#### 변수
- var로 선언한다. 선언하지 않으면 모두 전역 변수!! 
- 기본 타입은 5가지, string, number, boolean, null, undefined
- 복합 타입은 object = {}, array = [], function = () 
 
#### 함수
- 함수 작성법 : function 키워드를 이용한다. 
- 함수 실행법 : 괄호를 열고 닫으면 함수는 실행된다. 일반적인 언어의 특징
- 익명 함수 : 함수 이름이 없어 정의후 레퍼렌싱을 할수 없다. 
- 콜백 함수 : 함수를 또다른 함수의 인자로 넘겨서 실행되는 함수.

#### 전역 VS 함수 스코프
- 파일 혹은 블록 스코프가 없으므로 함수 스코프를 이용한다. 
- var로 선언되지 않은 변수 혹은 함수는 모두 전역 스코프에 등록된다. 

```
   (function(){ 
   
 	   	 // 함수를 이용해 파일 스코프를 만든다. 
 	
   })();
```

> Tips) 전역 스코프를 쓰지 않는다.
> - 자동으로 가비지 콜렉션이 안된다. object = null 로 수동으로 해야한다. 
> - 프로그램 전역에서 쓰이기 때문에 덮어씌워질 위험이 있다. (장점이자 단점)
> - var 를 항상 쓰거나, CommomJS 모듈을 사용한다.
  

## Javascript MVC 
MVC의 배경 설명과 패턴 구현해보기

* MVC를 표현하는 UML 설명
* 다양한 MVC 구현 패턴중 일반적인 설계를 직접 구현해본다.  
* 앞서 구현한 모델을 Backbone Model로 변경한다. 
  
  
## Alloy MVC
Alloy로 첫번재 타이타늄 앱 빌드 해보기

## 뷰 레이아웃에 대한 이해
* 크로스 플랫폼의 이해 및 UI 
* 플랫폼마다 다른 UI, 과연 뷰는 어떻게 만들어야하는가?
* 플랫폼 분기 처리 

> Tips) 
> - Ti.Platform API를 자주 사용하면 느리다. 캐시해라!
> - [해상도 문제][2]

[2]:http://oniz.tistory.com/114
  

## 뷰 이벤트 처리 
뷰 컨트롤러가 이벤트도 받아서 처리구조


## 타이타늄 모듈 사용하기 
git 프로젝트 import 하기 ([모듈 링크][3])
[3]:https://github.com/billdawson/ti-android-animation
  
모듈 설치 방법 
> - 전역: /Users/realrap/Library/Application Support/Titanium/modules/[플랫폼]/[모듈이름]/[버전]
> - 로컬: [프로젝트루트]/modules/[플랫폼]/[모듈이름]/[버전]


## 모델과 뷰 연동 
- 모델과 콜렉션 이벤트 

## 기타 
### 타이타늄 내장 라이브러리 
#### Backbone.js 
가장 핵심 라이브러리 중에 하나다. 

- Alloy는 Backbone의 Model과 Collection을 그대로 가져왔다. 
- 모델은 DB 테이블 구조중에 하나의 셀과 같은 개념이다.
- 콜렉션은 모델의 집합으로 하나의 테이블과 같은 개념이다. 


#### undersocre.js 
모델이나 콜랙션 데이터를 필터릴 하거나 for루프를 돌릴때 많이 사용한다. 
- each: 모든 배열을 순회 할때 사용
- filter: 배열의 특정값을 필터링 할때 사용
- groupBy: 객체를 필터링할때 사용됨.

#### moment.js 
시간과 날짜와 관련된 라이브러리 

- 실습 예제1. 포맷팅하기 
- 실습 예제2. 최신버전으로 덮어쓰기 
- 실습 예제3. 한국어 버전 사용하기


### 자바스크립트의 일반적인 권고사항

* 1) 전역 스코프를 쓰지마라. 
* 2) 전역 이벤트 리스너에 지역변수를 할당하지 마라. 
* 전역 스코프에 이벤트를 걸경우엔 app.js 에서 코드를 넣어서 관리해라!
  Ti.App, Ti.Geolocation, Ti.Gesture 이것들 외에도 UI 요소에 이벤트 할당할때도 비슷한 문제가 있다.

```
    var table = Ti.UI.createTableView();
    Ti.App.addEventListener('bad:move', function(e) {
        table.setData(e.data);
    });
```
* 3) Defer script loading
  필요할때 요청해서 써라! 
 
### 타이타늄 권고사항
* 1) Ti 네임스페이스를 확장하지 말것!
* 2) Coding strategies for multiplatform apps
* 3) Don't store sensitive data in non-JavaScript files
   민감한 개인정보나 패스워드 정보는 js 파일이 아닌곳에 보관하지 말것!! 
* 4) Set local variables to avoid calling native methods
  플랫폼 API를 자주 사용하면 느리다. 가령, Ti.Platform.osname 만 쓰더라도 네이티브 호출을 통해 값을 가져오게 되므로 런타임시 값을 가져오는데 시간이 걸린다. 따라서 로컬 변수에 캐시해서 사용해라!
 
