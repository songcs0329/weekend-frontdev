const fs = require("fs");
const path = require("path");

const readPath = (fileName, cb) => {
    const name = path.join(__dirname, `../public/${fileName}.html`);
    fs.readFile(name, "utf-8", (err, data) => {
        if (!err) return cb(data);
    });
};

module.exports = readPath;
