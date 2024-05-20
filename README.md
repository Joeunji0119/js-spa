---
## JS로 SPA

클라이언트에서 라우팅 처리

npm run build
npm run start
---

<br/>
1. main 브랜치
<br/><br/>

무조건 index.html 띄우고
document.querySelector('main').innerHTML = html;<br/>
로 끼워넣으려고 함

html 나누다가 fetch 가져오게 되고<br/>
결국 서버에서 내리게 됨

실패함


2. second 브랜치

dist 내 파일 정적 파일 처리해서 첫 로딩 때 부르고
그 외 요청은 index.html 띄움

history API 사용해서 클라이언트 라우팅 처리
