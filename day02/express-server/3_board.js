const express = require("express");
const app = express();

let posts = []; //게시글 리스트를 posts에 할당 

//JSON 미들웨어를 통해 req.body를 사용한다
app.use(express.json()); //json middleware activated

//POST 요청 시 컨텐트 타입이 application/x-www-form-rulencode인 경우 파싱한다
app.use(express.urlencoded({
    extended: true
}));

//root 요청이 오면 게시글 posts를 json 형태로 출력한다
app.get("/", (res,resp) => {
    resp.json(posts);
});

app.post("/posts", (req, resp) => {
    const { title, name, text } = req.body;
    posts.push({
        id : posts.length + 1,
        title,
        name,
        text,
        createDt : Date()
    });
    resp.json({ title, name, text });
});

app.delete("/posts/:id", (req,resp) => {
    const id = req.params.id;
    const filterPosts = posts.filter((post) => post.id !== +id);
    const isLengthChanged = posts.length !== filterPosts.length;
    
    posts = filterPosts;

    if ( isLengthChanged ) {
        resp.json("OK");
        return;
    }
    resp.json("NOT CHANGED! 삭제 실패!");
});


app.listen(3000, () => console.log("BOARD SERVICE EXAMPLE"));