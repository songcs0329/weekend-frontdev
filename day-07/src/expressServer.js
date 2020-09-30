const express = require("express");
const path = require("path");
const app = express();
const DB = require("./DB");

app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/users", (req, res) => {
    const users = DB.selectAll("users"); // 파일을 읽고 데이터 부분을 치환하는 방법

    res.render("users", {
        title: "EXPRESS USERS",
        users,
    });
});

app.get("/api/users", (req, res) => {
    const users = DB.selectAll("users");

    res.send(users);
});

app.listen(8081);
