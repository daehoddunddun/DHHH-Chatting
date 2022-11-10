# DHHH-Project

🐶 목적 : 개인 공부용 프로젝트

🐶 구현기능 : 실시간 온라인 채팅기능 구현 및 반응형 웹 개발용

🐶 적용기술 : <img src="https://img.shields.io/badge/React-aqua?style=flat&logo=react&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/HTML-orange?style=flat&logo=HTML5&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/CSS-blue?style=flat&logo=CSS3&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=JavaScript&logoColor=white&magin-left=5px"/>

실제 프로젝트에서는 처음 적용해보는 기술스텍 및 tool:

1. <img src="https://img.shields.io/badge/Vite-orchid?style=flat&logo=VITE&logoColor=white&magin-left=5px"/> 를 통한 빌드 퍼포먼스 최적화를 진행

2. <img src="https://img.shields.io/badge/Redux-fuchsia?style=flat&logo=Redux&logoColor=white&magin-left=5px"/> 를 통한 상태관리

3. 채팅 기능구현을 위한 express, socket.io 사용 (첫 풀스텍 도전!)

---

## 진행 과정 쓰는 일기장

[11월 10일 새벽 05시 17분] - 최초 통신 완료...눈물이 나는줄 알았다 진짜,,,🥹

금일 테스트 결과 같은 ip 대역을 사용하는 클라이언트 서버라면 내 local express 서버를 통해서 채팅이 가능하다.

이렇게 1차 목표를 달성했는데 그 과정중에서 문제와 해결과정을 정리하자면

1. 실시간으로 데이터를 받아오는 과정에서 input의 sumbit, 유저의 채팅방 입장 이벤트가 있을 때 나한테만 메세지가 보이고 상대한테 안 보이는 문제 - socket.emit이 아니라 io.emit을 통해 실시간 표출(이게 정말 문제였다.)

2. 내 소켓서버는 로컬에 있는데 어떻게 다른 pc의 클라이언트와 연결을 하지?! - 정말 간단했다. 같은 아이피 대역을 사용한다면 소켓에 end-point를 입력하는 파라미터 값으로 내 ip를 할당해주면 되는거였다...! 이후에 배포를 해서 굳이 같은 ip 대역이 아니더라도 접속이 가능하게 만들거다.

3. 리액트 랜더링 초기 빈배열 문제 - 이거는 부트캠프 때 하도 많이 당해서 스트레스였는데 많이 찾아본 결과 이제 알겠다... state? state : <Loding/> 약간 요련느낌...아님말고...

아무튼 1차 목표 달성! 남은건 배포와 레이아웃 수정, 버그잡기,,,리팩토링,,,버전업데이트 아자자🔥

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/98578138/200935315-226741bf-fb55-49a6-9530-cc13005b2307.gif)

## 작업내용 및 구현화면

1. 11월 06일 인덱스(로그인) 페이지 레이아웃 작업(ver-1.0)

<img width="1254" alt="스크린샷 2022-11-06 오후 1 30 16" src="https://user-images.githubusercontent.com/98578138/200164671-f0ddbb2a-c53f-4121-8be5-bcb7e5a79e5d.png">
<img width="1272" alt="스크린샷 2022-11-06 오후 1 30 31" src="https://user-images.githubusercontent.com/98578138/200164673-814cf8ea-7856-428f-ac13-443c81b1ca71.png">

2. 11월 06일 메인(로비)페이지 레이아웃 작업(ver-1.0)

<img width="1243" alt="스크린샷 2022-11-06 오후 6 28 29" src="https://user-images.githubusercontent.com/98578138/200164714-d24a363d-fb97-4133-9574-97da7a12174b.png">

3. 11월 06일 Create Room modal 레이아웃 작업(ver-1.0)

<img width="1313" alt="스크린샷 2022-11-06 오후 8 24 56" src="https://user-images.githubusercontent.com/98578138/200167834-14dfb1c8-62c2-4056-b411-e93f7d67777c.png">

4. 11월 06일 chatting 레이아웃 작업(ver-1.0)

<img width="1319" alt="스크린샷 2022-11-06 오후 10 33 42" src="https://user-images.githubusercontent.com/98578138/200173855-f77dd683-0998-4697-a6b7-707802809990.png">

5. 11월 07일 store에 state 관리(ver-1.0)

5-1. 스토어에 저장하는 state = 유저정보, 유저가 채팅방을 만들 때 입력한 정보

<img width="318" alt="스크린샷 2022-11-07 오후 9 23 26" src="https://user-images.githubusercontent.com/98578138/200310594-a1c65a2e-adda-4b89-a45c-77c21bb743f6.png">

<img width="633" alt="스크린샷 2022-11-07 오후 9 22 40" src="https://user-images.githubusercontent.com/98578138/200310553-6a3b74a4-3834-4f0f-8ce5-3b289016ec42.png">

<img width="403" alt="스크린샷 2022-11-08 오후 11 45 03" src="https://user-images.githubusercontent.com/98578138/200595278-cb84db3c-fa96-4398-ae6f-5bbdf81fa40f.png">

6. 11월 08일 io.socket를 통한 서버통신(ver-1.0)

//11월 08일

6-1. 채팅방 입장 시 서버 연결/ input 데이터 전송 / 전송한 input 데이터 수신

6-2. input 데이터 전송과 동시에 서버에서 배열 데이터로 다시 전송 > 클라이언트는 해당 데이터를 수신과 동시에 state로 실시간 화면 표출(채팅 내용)

<img width="391" alt="스크린샷 2022-11-08 오후 11 32 12" src="https://user-images.githubusercontent.com/98578138/200597549-bd05570c-d41e-4eae-a508-6830a07b32f4.png">

//11월 09일 ~ 11월 10일 새벽 5시 17분

6-3. local 서버에 같은 ip 대역을 사용하는 클라이언트 서버를 통해서 최초 통신 완료. 다수의 pc에서 해당 서버에 접속하여 단체 채팅 기능 완료(io.connect 파라미터 값으로 내 서버 ip 지정)

<img width="398" alt="스크린샷 2022-11-10 오전 5 34 02" src="https://user-images.githubusercontent.com/98578138/200936124-5d54bce5-3d24-478b-bc9d-9faea65d577b.png">
