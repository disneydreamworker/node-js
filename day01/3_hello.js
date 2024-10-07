//hello.js 서버 프로그램을 작성하여 주세요
//브라우저에서 http://localhost:8001 접속하면 2초후에 Hello NodeJS 출력되는 서버프로그램

//1. http 모듈을 불러와서 http변수에 할당
//2. 노드서버 객체 생성
//3. 카운트 1증가
//4. 결과값 200 세팅
//5. 헤더 설정
//6. 응답값 설정(hello)
//7. 2초 후에 (nodeJS!) 출력
//8. 서버프로그램 실행

const http = require("http"); //http 객체 생성, require은 모듈을 import해옴
let count = 0;

//콜백 함수를 가지고 있는 서버 프로그램
const server = http.createServer((req, res) => {
    //{}안에 있는게 콜백 함수
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain"); // 컨텐트 타입 : 텍스트/평문

    res.write("hello!");
    setTimeout(() => {  //setTimeout : 해당 시간이 지나면 실행해라(2000 = 2초)
        res.end(" nodeJS!"); 
    }, 2000);
});

function log(count) {
    console.log((count+=1));
}


server.listen(8001,() => console.log("success"));