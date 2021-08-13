const http = require("http"); // ���� ����̱� ������ ���� �ٿ� ���� �ʿ� ����
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === "/") {
        res.end("����� ��Ʈ �Դϴ�.");
    } else if (req.url === "/login") {
        res.end("����� �α��� ȭ���Դϴ�.");
    }
});

app.listen(3001, () => {
    console.log("server with http");
});


// const express = require("express"); // express ��� �ٿ� �ޱ�
// const app = express(); // ������Ѽ� �����ȿ� �ֱ�

// app.get("/", (req, res) => {
//     res.send("here is root.");
// });

// app.get("/login", (req, res) => {
//     res.send("here is login page.");
// })

// app.listen(3000, function () {
//     console.log("server on");
// });