"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.readDir = function (path) {
    return new Promise(function (res, rej) {
        fs.readdir(path, function (err, files) {
            if (err) {
                return rej(err);
            }
            res(files);
        });
    });
};
//# sourceMappingURL=read-dir.js.map