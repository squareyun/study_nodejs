const express = require("express"); // express ��� �ٿ� �ޱ�
const app = express(); // ������Ѽ� �����ȿ� �ֱ�

app.get("/", (req, res) => {
    res.send("����� ��Ʈ�Դϴ�.");
});

app.get("/login", (req, res) => {
    res.send("����� �α��� ȭ���Դϴ�.");
})

app.listen(3000, function () {
    console.log("���� ����");
});