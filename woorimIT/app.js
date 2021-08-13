const http = require("http"); // 내장 모듈이기 떄문에 따로 다운 받을 필요 없음
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === "/") {
        res.end("여기는 루트 입니다.");
    } else if (req.url === "/login") {
        res.end("여기는 로그인 화면입니다.");
    }
});

app.listen(3001, () => {
    console.log("server with http");
});


// const express = require("express"); // express 모듈 다운 받기
// const app = express(); // 실행시켜서 변수안에 넣기

// app.get("/", (req, res) => {
//     res.send("here is root.");
// });

// app.get("/login", (req, res) => {
//     res.send("here is login page.");
// })

// app.listen(3000, function () {
//     console.log("server on");
// });