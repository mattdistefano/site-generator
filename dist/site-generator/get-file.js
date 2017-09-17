"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("../fs");
var fileCache = {};
exports.getFile = function (path, stats, useCache) {
    if (useCache === void 0) { useCache = true; }
    return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var cached, _a, _b, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!useCache) return [3 /*break*/, 3];
                    cached = fileCache[path] &&
                        fileCache[path].modified.getTime() === stats.mtime.getTime();
                    if (!!cached) return [3 /*break*/, 2];
                    _a = fileCache;
                    _b = path;
                    _c = {
                        path: path,
                        modified: stats.mtime,
                        created: stats.birthtime
                    };
                    return [4 /*yield*/, fs_1.readFile(path)];
                case 1:
                    _a[_b] = (_c.contents = _e.sent(),
                        _c);
                    _e.label = 2;
                case 2: return [2 /*return*/, tslib_1.__assign({}, fileCache[path])];
                case 3:
                    _d = {
                        path: path,
                        modified: stats.mtime,
                        created: stats.birthtime
                    };
                    return [4 /*yield*/, fs_1.readFile(path)];
                case 4: return [2 /*return*/, (_d.contents = _e.sent(),
                        _d)];
            }
        });
    });
};
//# sourceMappingURL=get-file.js.map