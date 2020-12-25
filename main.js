var http = require("http");
var fs = require("fs");
var url = require("url");

function templateHTML(title, list, description, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = "<ul>";
  var i = 0;
  while (i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i += 1;
  }
  list += "</ul>";
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        var title = "Welcome";
        var description = "Hello, Node.js";
        var list = templateList(filelist);
        var template = templateHTML(
          title,
          list,
          description,
          `<h2>${title}</h2>${description}`
        );
        response.writeHead(200); // 서버가 브라우저에게 200을 주면 파일을 성공적으로 전송했다는 의미
        response.end(template);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        fs.readFile(
          `data/${queryData.id}`,
          "utf8",
          function (err, description) {
            var list = templateList(filelist);
            var title = queryData.id;
            var template = templateHTML(
              title,
              list,
              description,
              `<h2>${title}</h2>${description}`
            );
            response.writeHead(200); // 서버가 브라우저에게 200을 주면 파일을 성공적으로 전송했다는 의미
            response.end(template);
          }
        );
      });
    }
  } else {
    response.writeHead(404); // 404를 주면 파일을 찾을 수 없다는 의미
    response.end("Not found");
  }
});
app.listen(3000);
