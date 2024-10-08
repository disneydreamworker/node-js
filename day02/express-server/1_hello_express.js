const express = require("express");
const app = express(); //express 객체를 인스턴스 생성해서 app에 할당
const port = 3000;

//get mapping 함수로 루트로 들어오면서 get 으로 들어오면 콜백 함수 실행할게~
app.get("/", (req, resp) => {
    resp.set({"CONTENT-TYPE" : "text/html; charset=utf-8"}); //header setting
    resp.end("HELLO EXPRESS 언제나 기다릴게! 바로 여기 테라에서!"); 
});

app.listen(port, () => console.log(`START SERVER : use ${port}`));