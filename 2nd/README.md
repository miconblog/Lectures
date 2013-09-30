2013.10.01 Titanium 강좌 at BloterAcademy
========
## Ice Break
- 강사 소개
- 수강생 소개
- 강좌 소개 
- 설문 결과 소개 
  - 설문 결과를 바탕으로 강의에서 해결해 줄 수 있는 것들과 없는 것들    
      
  **설문 결과** 
      1. 맥 VS Windows --> 5 : 2
      2. iOS VS Android --> 6 : 6
      3. JavaScript -- jQuery정도는 뭐... 
      4. What you want... 
        - 사용자 정의 컴포넌트 (모듈 or 위젯) 사용과 설정법 
        - 타이타늄의 장점 뿐 아니라.. 단점도 알수 있으면 좋겠다. 
        - 단기간에 앱을 만들고 싶다. 또는 회사에서 진행할 프로젝트를 위한 기술 습득 
        - alloy, MVC 패턴 개발

## 강의 목차 
### 1. 빠른 개발 환경 구축하기
  - [구글 공유 문서][5] - 실습 진행을 위한 확인
  - [개발 환경 설정][4] - 따라하기
  - CLI로 컴파일 해보기
   ```
    > titanium create --name MyFirstProject
    > cd MyFirstProject
    > titanium build
   ```
  - Alloy 프로젝트 CLI로 생성 해보기
  ```
   > titanium create --name=appname --id=com.domain.appname --platforms=android,ipad,iphone,mobileweb
   > cd appname
   
   // Alloy 프로젝트 생성
   > alloy new
   
   // 컴파일
   > alloy compile --config platform=android
   
   // fastdev 실행, 에뮬레이터 설정이 먼저 필요함
   > titanum.py fastdev start
  ```
  - 안드로이드 fastdev 설정하기
    - ~/.android/avd 폴더에서 에뮬레이터 확인하기
  - **Tips**
        - 맥에서 숨은 폴더 보이기(YES)/숨기기(NO)
        - defaults write com.apple.Finder AppleShowAllFiles YES
 
[4]: https://github.com/yomybaby/TiStudy/wiki/Titanium-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85

[5]: https://docs.google.com/spreadsheet/ccc?key=0At3rrffHc2WIdGFwRlpSWDlVSWhGeGVpcWVZelBLd3c&usp=sharing

### 2. 기본 자바스크립트 익히기
    - 기본 타입과 Reference 타입
    - 전역과 함수 스코프
    - this 참조의 변화와 유지방법
      - 전역 변수 활용
      - 지역 변수 활용
      - bind 함수 활용

### 3. 자바스크립트 MVC 이해하기
#### 3-1. MVC 패턴의 역사적인 관점
      - OS 발전에 따라, View와 Controller의 역할론이 대두되다.
      - Model은 늘 중요했다. 모델의 옵저버의 역할이 중요함.
      - 모델에서 가장 중요한 것은 데이터의 변경 사항을 모니터링 하는 것이다.

#### 3-2. MVC 구현 without libary
      - 콜백을 이용한 간단한 옵저버 구현

#### 3-3. 옵저버 객체 구현 with underscore.js
      - Model이 상속 받을 Event 객체 구현

#### 3-4. MVC 구현 with backbone.js
      - 백본 모델을 이용해 구현하기
      - 기존 모델을 백본 모델로 교체

### 4. Alloy MVC 이해하기
- Alloy 프로젝트 빌드해보기
- 생성된 프로젝트 구조 설명
- 예약 폴더와 기능 설명
- 컴파일 방식 설명
- Model은 싱글톤으로 사용된다.
- Model을 합리적으로 사용하는 방법에 대해서 고민이 필요하다.
  - 휘발성 모델인가? --> 새로운 인스턴스 생성
  - 영구적인 모델인가? --> 싱글톤으로 작성


### 5. View Layout 이해하기
- 컨트롤과 컨테이너
- composite, vertical, horizontal
  - composite이 성능이 좋다.
  - vertical과 horizontal은 자동 계산을 위한 추가 연산이 필요하므로 상대적으로 느리다.
- **성능의 기본**
      - 시스템이 뭔가를 더 계산하거나 생각할 꺼리 혹은 그려야 되는 횟수를 줄여줘라!
      - tableview에서 반복 Row 템플릿일 경우 className 속성을 반드시 지정한다. (Android는 없음)
      - 이미지가 포함되어 있는 Row는 분리해라.
      - 문서를 꼼꼼히 읽어라.

### 6. View Event 처리
- 뷰에서 onClick으로 정의하는 방법
- 컨트롤러에서 핸들러 추가하는 방법
- 둘 중 어디서 이벤트를 처리해야하는가?
- **보다 나은 구조**
      - 이벤트 핸들러와 로직 함수를 구분하자!

### 7. Model 연동하기
 - Alloy 모델은 기본적으로 싱글톤으로 만든다.
 - Model과 View 연동하기
 - Collection과 View 연동하기
 - Model + Collection 그리고 View와 연동하기
    - 여러 모델을 하나의 뷰에 표현할수도 있다.

### 8. Widget 사용하기
- [Alloy Love][3] 사이트에서 위젯을 다운로드 받는다.
- Alloy/widgets 폴더에 넣는다.
- config.json 에 위젯의 의존성(이름과 버전)을 기술한다.
- **위젯 사용하기**
```
<Widget id="loginWidget" src="com.appcelerator.acslogin"/>
```

[3]: http://alloylove.com/

### 9. Module 사용하기
- 타이타늄에서 제공하는 기본 모듈에 원하는 기능이 없을때 혹은 성능이 안나올때..
- 대표적인 사례,
  - 안드로이드 애니메이션 느리다.
  - 멀티 셀렉트 이미지 픽커
- 각 프로젝트를 빌드해서 moduels 폴더에 넣는다.
- `reauire('module name')` 구문을 통해 모듈을 불러온다.
- **모듈링크**
  1. https://github.com/billdawson/ti-android-animation
  2. https://github.com/amano/TiELCImagePicker