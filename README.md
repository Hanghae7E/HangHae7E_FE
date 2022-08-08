# HangHae7E_FE

# ⚡🎉 1. 프로젝트 소개⚡🎉

### ❇️ 이름 유래

![image](https://user-images.githubusercontent.com/49186181/182083484-3afd3ba2-1734-47e3-83fd-36df56a16696.png)
```
💡 팀원과 경기 시작 전, 팀의 단결과 협력을 위해
서로 어깨를 끼고 동그렇게 머리를 맞댄 대형을 지으며 결의를 다지는 행동입니다.
```

### ❇️ HuddleUp (허들업)

안녕하세요. 허들업입니다.
허들업은 사이드 프로젝트 경험을 원하는 사용자들을 위한 온라인 매칭 플랫폼입니다. 

### ❇️ 기획의도

저희 허들업은 개발자 커뮤니티 활동 중 다음과 같은 문제를 보았습니다.

- 프로젝트 팀원을 구하기 어려운 문제
- 기획자, 디자이너 직군은 구하기 어려운 문제
- 프로젝트 경험이 없는 각 직군의 취업준비생의 문제
- 이직하기 전 프로젝트를 하기 위한 현업 종사자의 고민
- 자신이 경험해보고자 하는 언어를 구하기 어려운 문제
- 자신이 관심 있는 도메인 서비스를 진행해보고 싶은데 구하기 어려운 문제

위 문제들을 해결하기 위해 기획하였습니다.
실제 현업에서 경험할 수 있는 환경을 제공하여 서로의 직군을 이해하고 협업하는 과정을 통해 성장하는 것을 목표합니다.


<br /><br />
## :two_men_holding_hands:작업 기간 및 팀원 소개:two_women_holding_hands:


### :watch:2022-06-24 ~ 2022-08-05

### FrontEnd

<img alt="장경태" src ="https://img.shields.io/badge/REACT-%EC%9E%A5%EA%B2%BD%ED%83%9C-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img alt="이은지" src ="https://img.shields.io/badge/REACT-이은지-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img alt="원동환" src ="https://img.shields.io/badge/REACT-원동환-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
<br />
<br />
### BackEnd

<img alt="Spring" src ="https://img.shields.io/badge/SPRING-%EC%9D%B4%EC%83%81%ED%9B%88-brightgreen?style=for-the-badge&logo=Spring&logoColor=white"/> <img alt="김주영" src ="https://img.shields.io/badge/SPRING-김주영-brightgreen?style=for-the-badge&logo=Spring&logoColor=white"/> <img alt="송수용" src ="https://img.shields.io/badge/SPRING-송수용-brightgreen?style=for-the-badge&logo=Spring&logoColor=white"/> <img alt="최영주" src ="https://img.shields.io/badge/SPRING-최영주-brightgreen?style=for-the-badge&logo=Spring&logoColor=white"/> 
<br /><br />
 
### 프론트에서 사용한 기술 스택
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img alt="ReactQuery" src ="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/> <img alt="ReactRouter" src ="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/> <img alt="AmazonS3" src ="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white"/> <img alt="CloudFront" src ="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=Amazon AWS&logoColor=white"/> 
<br /><br />

### 개발도구
<img alt="visual-studio-code" src ="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/> <img alt="git" src ="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/> <img alt="github" src ="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>

## 커밋 코드 컨벤션
format : 

```jsx
[Commit Type] 제목 (이슈번호)

-줄바꿈 

커밋 내용
```

[Commit Type]

```
[Docs]   문서 작성 및 수정 작업(README 등)
[Add]    기능이 아닌 것 생성 및 추가 작업(파일·익스텐션·프로토콜 등)
[Feat]   새로운 기능 추가 작업
[Style]  UI 관련 작업(UI 컴포넌트, Xib 파일, 컬러·폰트 작업 등)
[Fix]    에러 및 버그 수정, 기능에 대한 수정 작업
[Edit]   Fix가 아닌 모든 수정 작업(주석, 파일 및 폴더 위치, 코드 스타일 등)
[Del]    파일, 에셋 등 삭제 작업
[Set]    세팅 관련 작업
[Test]   테스트 관련 작업
```
## 아키텍쳐
![image](https://user-images.githubusercontent.com/49186181/182147162-2bcba417-409a-4a5f-b6b5-75874b569a81.png)
![image](https://user-images.githubusercontent.com/49186181/182147086-fbb0656d-0334-46b7-b47b-d71506d0b9b9.png)



## :boom:트러블슈팅
<details>
<summary><h3> WebSocket 통신 너무 많은 요청</h3></summary>
<div markdown="1">
<h4> 문제발생</h4>
<ol>
<li><h4>회의록을 작성함과 동시에 소켓을 subscribe 한 사람에게 실시간으로 보여 줘야 하다 보니 키보드 값을 입력할 떄마다 소켓에 요청하게 되어서 너무 많은 요청을 보내게됨</h4></li>
</ol>

<h4>해결과정</h4>
<ol>
<li>엔터키를 입력 했을때에만 소켓에 send 를 보내서 통신을 하게한다 <span style="font-size:10px">(해당방법은 기존 실시간이라는 의미를 해치기 떄문에 보류)</span></li>
<li>현재 입력된 문자의 길이롸 소켓에 보내진길이를 비교해서 통신 <span style="font-size:10px">(마지막 글자는 제대로 통신이 안되고 영어로 입력할 경우 결국 똑같다.)</span></li>
</ol>
<h4>해결방법</h4>
<h5>1차적으로 0.5 초마다 현재 입력값과 소켓과 통신된 값을 비교한다.</h5><h5>비교했을때 값이 다르다면 0.5 초마다 소켓에 변경 된 값을 통신 시켜 소켓을 동작 시켜서 소켓의 부하를 줄인다.</h5>

</div>
</details>
<details>
<summary><h3> WebSocket 연결 후 페이지 이동</h3></summary>
<div markdown="1">
<h4> 문제발생</h4>
<ol>
<li><h4>현재 페이지를 벗어나 메인 페이지 or 프로젝트 생성 페이지 등등 다른 route 접속시 연결이 끊겨야 하지만 \n 현재페이지 내부에서 페이지 이동시에는 소켓이 끊기면 안됨</h4></li>
</ol>

<h4>해결과정</h4>
<ol>
<li>아에 페이지를 종료 했을 경우에만 소켓을 disconnect 시키는 방법으로 진행해봤지만 팀페이지로 이동시 마다 소켓연결을 계속 시키는데 웹이 종료 될떄만 disconnect 시키는건 자원 낭비인것 같다.</li>
</ol>
<h4>해결방법</h4>
<h5>페이지 이동을 라우팅 시키는 방법이 아닌 해당 페이지 에서 컴포넌트로 구분해서 보여주게끔 개선 이후 기능은 잘 동작 하지만 뒤로가기 사용시 해당 페이지를 벗어나며 소켓연결이 끊기기 때문에 해당 방법은 추후에 개선이 필요할 것 같다.</h5>
</div>
 <h4>개선방법</h4>
<h5>Workspace 페이지에서 query string 을 사용해서 routing 시키는 방식으로 변경 한개의 컴포넌트인 것은 변함 없지만 url 에 query string을 붙여 줌으로서 소켓이 연결이 유지 되면서 routing 되도록 수정함</h5>
 
</div>
</details>


## 📑페이지 별 데이터 타입 
<details>
<summary><h3> 메인 페이지</h3></summary>
<div>

> 백엔드에서 넘겨준 토큰을 decode해 user의 정보를 확인합니다. <br/> 
> 작성한 포스트를 태그별로 필터링 합니다. 
> 메인 페이지 에서 태그를 선택해 원하는 태그를 가진 프로젝트를 보여 줍니다.<br/> 

1. 토큰 
<img src="https://user-images.githubusercontent.com/60000653/182155672-2c981fda-a4b8-4945-b049-73e3dc68cfc8.png" height="100px" width="200px">
<img src="https://user-images.githubusercontent.com/60000653/182155833-6d2666c3-1e93-4283-85b5-1123a99ab7ff.png" height="100px" width="200px">

2. 포스트, 태그  
<img src="https://user-images.githubusercontent.com/60000653/182156568-aa6e0887-c8c3-463d-aa79-0e5ec28efde6.png" height="250px" width="200px">
<img src="https://user-images.githubusercontent.com/60000653/182156256-0d2f7893-d9b0-49d5-bfd1-08e8ecbda65a.png" height="100px" width="200px">


</div>
</details>

<details>
<summary><h3>마이 페이지| 유저 데이터</h3></summary>
<div>

> 로그인, 회원가입은 소셜을 통해 처리하고 있으며 <br/>
> 마이 페이지에서 유저 프로필 정보, 등록/신청한 프로젝트 정보를 확인 합니다.<br/>

1. 유저 정보,  마이 페이지 데이터 
<img src="https://user-images.githubusercontent.com/60000653/182156891-5b771860-8261-431d-ac53-20d39fc419f3.png" height="180px" width="200px"> 
<img src="https://user-images.githubusercontent.com/60000653/182157065-735db3f2-4d5d-48dc-bd59-87a2db3e38f9.png" height="330px" width="200px">

</div>
</details>

<details>
<summary><h3>프로젝트 페이지| 프로젝트 데이터</h3></summary>
<div>

> 프로젝트 등록,수정 <br/> 
> PM인 경우 프로젝트 수정/상세보기 시 프로젝트에 참여를 원하는 신청자들을 볼 수 있습니다.<br/> 

1. 프로젝트 등록/ 수정
<img src="https://user-images.githubusercontent.com/60000653/182157253-92b93d49-e6da-4d8d-b8e8-ad4d2e3b7a2f.png" height="300px" width="200px">

2. 프로젝트 신청 
<img src="https://user-images.githubusercontent.com/60000653/182157268-866c7439-2e38-4dfc-a7fb-bcb48a672c42.png" height="300px" width="200px">

3. 프로젝트 상세보기 
<img src="https://user-images.githubusercontent.com/60000653/182157520-313d103f-8d35-493e-84ec-f1255a61ff18.png" height="300px" width="200px">

4. PM의 경우 신청자 데이터 
<img src="https://user-images.githubusercontent.com/60000653/182157583-3ade3300-c5f8-4e8d-a3c3-d25e4a2d72cd.png" height="250px" width="200px">
</div>
</details>

<details>
<summary><h3>공통 컴포넌트</h3></summary>
<div>

> 에러 타입, 태그 타입 <br/> 

<img src="https://user-images.githubusercontent.com/60000653/182157889-3988197b-0387-4732-9a7c-0b1feefcb4b8.png" height="100px" width="200px">
<img src="https://user-images.githubusercontent.com/60000653/182157946-ac3e2267-318d-41df-aecd-03119a174a87.png" height="250px" width="200px">

</div>
</details>







