const http = require("http"); //http 객체 생성, require은 모듈을 import해옴 -> 노드에서 HTTP 모듈을 가져온다

//url 추가
const url = require("url"); //url module 로딩


http
    .createServer(
        (request, response) => {
            //path 추가
            const path = url.parse(request.url, true).pathname; //패스명을 할당
            response.setHeader("Content-Type", "text/html; charset=utf-8"); //한글 깨짐 방지

            //라우팅
            if (path === "/user") {
                response.end("[user] name : jaine , company  : ssg"); //user에 대한 결과값 설정
            } else if (path === "/feed") {
                response.end(
                    `<ul>
                        <li>picture1</li>
                        <li>picture2</li>
                        <li>picture3</li>
                    </ul>`
                ); 
            } else {
                response.statusCode = 404;
                response.end("404 page not found!");
            }
        }
).listen("3000", () => console.log("OK 라우터 서버 시작!"));