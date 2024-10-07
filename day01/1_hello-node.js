const http = require("http"); //http 객체 생성 
let count = 0;

//node server 객체 생성
const server = http.createServer((req,res) => {
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain"); //서버가 프론트에 전달하는 응답 헤더 작성
    res.write("hello\n");

    //callback 함수
    setTimeout(() => {
        res.end("SSG-END");
    }, 2000);

    process.exit(0); //성공할 경우 종료
    process.exit(1); //실패할 경우 종료
    server.close(() => console.log("process terminated")); //서버 종료
});

//포트 accept listener
server.listen(8000, () => console.log("Hello Node.js"));
