"use strict";

// 모듈
const express = require("express"); // express 모듈 다운 받기
const app = express(); // 실행시켜서 변수안에 넣기

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;