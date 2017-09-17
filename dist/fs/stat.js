"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.stat = function (path) {
    return new Promise(function (res, rej) {
        fs.stat(path, function (err, stats) {
            if (err) {
                return rej(err);
            }
            res(stats);
        });
    });
};
//# sourceMappingURL=stat.js.map