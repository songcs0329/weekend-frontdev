const fs = require("fs"); // node.js file system
const dateFns = require("date-fns");


let fileName = ""
const log = (msg) => { // msg = req.headers["user-agent"]
    const date = new Date();
    const logDate = dateFns.format(date, "yyyy.MM.dd HH:mm:ss");
    fileName = `log_${dateFns.format(date, "yyyy_MM_dd_HHmm")}.txt`; // 분단위로 로그 쌓는다.

    fs.appendFile(fileName, `${logDate} :: ${msg}\n`, "utf-8", (err) => { // appendFile(파일명, 파일내용, 형식(?), 콜백)
        if(err) console.log(err);
    })
}

const readLog = (cb) => {
    fs.readFile(fileName, "utf-8", (err, data) => { // readFile(파일명, 형식, 콜백)
        if(err) return res.end("err");
        return cb(data)
    })
}

module.exports = {
    log,
    readLog
}