"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.readFile = function (path, encoding) {
    if (encoding === void 0) { encoding = 'utf-8'; }
    return new Promise(function (res, rej) {
        fs.readFile(path, encoding, function (err, data) {
            if (err) {
                return rej(err);
            }
            res(data);
        });
    });
};
//# sourceMappingURL=read-file.js.map