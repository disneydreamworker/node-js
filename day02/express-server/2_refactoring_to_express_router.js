const url = require("url");
const express = require("express");
const app = express(); //express 객체를 인스턴스 생성해서 app에 할당
const port = 3000;

//1) get method routing setting
app.get("/", (_, resp) => resp.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);


//2)
function user (request, resp) {
    const user = url.parse(request.url, true).query;
    resp.json(`[user] name : ${user.name} , company : ${user.company}`);
}


function feed (_, resp) {
    resp.json(
        `
            <ul>
                <li>p1</li>
                <li>p2</li>
                <li>p3</li>
            </ul>
        `
    );
}


app.listen(port, () => console.log(`START SERVER : use ${port}`));