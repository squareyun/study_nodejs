"use strict";

// 모듈
const express = require("express"); // express 모듈 다운 받기
const bodyParser = require("body-parser");
const app = express(); // 실행시켜서 변수안에 넣기

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URl을 통해 전달되는 데이터에 공백, 한글 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
