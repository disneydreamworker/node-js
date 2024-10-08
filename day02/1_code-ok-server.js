const http = require("http"); //http 객체 생성, require은 모듈을 import해옴 -> 노드에서 HTTP 모듈을 가져온다

//콜백 함수를 가지고 있는 서버 프로그램
const server = http.createServer(
    (request, response) => {
    //{}안에 있는게 콜백 함수
    response.setHeader("Content-Type", "text/plain");
    response.end("OK");
    }
);

server.listen("3000", () => console.log("OK 서버 시작!"));