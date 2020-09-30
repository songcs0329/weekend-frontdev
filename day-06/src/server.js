const http = require("http");
const logger = require("./logger")

http.createServer((req, res) => {
    logger.log(req.headers["user-agent"]);

    switch(req.url) {
        case "/":
            return res.end("Hello World");
        case "/log":
            return logger.readLog((data) => res.end(data)) // 항상 최신로그 보여준다.
    }
}).listen(8080)