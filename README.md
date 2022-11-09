# DHHH-Project

🐶 목적 : 개인 공부용 프로젝트

🐶 구현기능 : 실시간 온라인 채팅기능 구현 및 반응형 웹 개발용

🐶 적용기술 : <img src="https://img.shields.io/badge/React-aqua?style=flat&logo=react&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/HTML-orange?style=flat&logo=HTML5&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/CSS-blue?style=flat&logo=CSS3&logoColor=white&magin-left=5px"/> <img src="https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=JavaScript&logoColor=white&magin-left=5px"/>

실제 프로젝트에서는 처음 적용해보는 기술스텍 및 tool:

1. <img src="https://img.shields.io/badge/Vite-orchid?style=flat&logo=VITE&logoColor=white&magin-left=5px"/> 를 통한 빌드 퍼포먼스 최적화를 진행

2. <img src="https://img.shields.io/badge/Redux-fuchsia?style=flat&logo=Redux&logoColor=white&magin-left=5px"/> 를 통한 상태관리

3. 채팅 기능구현을 위한 socket.io 사용

---

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

6-1. 채팅방 입장 시 서버 연결/ input 데이터 전송 / 전송한 input 데이터 수신

6-2. input 데이터 전송과 동시에 서버에서 배열 데이터로 다시 전송 > 클라이언트는 해당 데이터를 수신과 동시에 state로 실시간 화면 표출(채팅 내용)

![Uploading 화면-기록-2022-11-08-오후-11.56.26.gif…]()

<img width="391" alt="스크린샷 2022-11-08 오후 11 32 12" src="https://user-images.githubusercontent.com/98578138/200597549-bd05570c-d41e-4eae-a508-6830a07b32f4.png">
