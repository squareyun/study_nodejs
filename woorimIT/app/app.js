"use strict";

// ���
const express = require("express"); // express ��� �ٿ� �ޱ�
const app = express(); // ������Ѽ� �����ȿ� �ֱ�

// �����
const home = require("./src/routes/home");

// �� ����
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> �̵� ��� ������ִ� �޼���

module.exports = app;