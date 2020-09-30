const http = require("http");
const readFile = require("./readFile");
const DB = require("./DB");
const userlistComponent = require("./components/UserComponent");

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            return readFile("index", (data) => res.end(data));
        case "/users":
            const users = DB.selectAll("users");
            return res.end(
                `<html><body>${userlistComponent(users)}</body></html>` // 문자열을 코드로 직접 만드는 방법
            );
        // case "/user":
        //     return readFile("user", (data) => res.end(data))
        default:
            return res.end("error!");
    }
}).listen(8080);
