"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = require("path");
var fs_1 = require("../fs");
var get_file_1 = require("./get-file");
var to_page_1 = require("./to-page");
var populate_index_1 = require("./populate-index");
var page_comparator_1 = require("./page-comparator");
var link_pages_1 = require("./link-pages");
var query_1 = require("./query");
var processDir = function (dirPath, basePath) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pages, subdirectories, index, _i, _a, file, fullPath, stats, page, _b, subdirs, allPages;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                pages = [];
                subdirectories = [];
                _i = 0;
                return [4 /*yield*/, fs_1.readDir(dirPath)];
            case 1:
                _a = _c.sent();
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                file = _a[_i];
                fullPath = path.join(dirPath, file);
                return [4 /*yield*/, fs_1.stat(fullPath)];
            case 3:
                stats = _c.sent();
                if (!stats.isFile()) return [3 /*break*/, 6];
                if (!(path.extname(fullPath) === '.md')) return [3 /*break*/, 5];
                _b = to_page_1.toPage;
                return [4 /*yield*/, get_file_1.getFile(fullPath, stats)];
            case 4:
                page = _b.apply(void 0, [_c.sent(), basePath]);
                if (page.type === 'index') {
                    index = page;
                }
                else {
                    pages.push(page);
                }
                _c.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                if (stats.isDirectory()) {
                    subdirectories.push(fullPath);
                }
                _c.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 2];
            case 8:
                if (!index) {
                    index = {
                        path: '/' + path.join(path.relative(basePath, dirPath), 'index'),
                        title: null,
                        created: null,
                        content: null,
                        type: 'index'
                    };
                }
                if (!index.linkRoot) {
                    pages.sort(page_comparator_1.pageComparator);
                    link_pages_1.linkPages(pages);
                }
                return [4 /*yield*/, Promise.all(subdirectories.map(function (subdir) { return processDir(subdir, basePath); }))];
            case 9:
                subdirs = _c.sent();
                populate_index_1.populateIndex(index, pages, subdirs);
                allPages = [index].concat(pages);
                subdirs.forEach(function (child) { return allPages.push.apply(allPages, child); });
                if (index.linkRoot) {
                    link_pages_1.linkPages(allPages
                        .filter(function (page) { return page.type === 'page'; })
                        .sort(page_comparator_1.pageComparator));
                }
                return [2 /*return*/, allPages];
        }
    });
}); };
var processQueries = function (pages) { return pages.forEach(function (page) {
    return Object.keys(page.queries).forEach(function (key) {
        return query_1.executeQuery(page.queries[key], pages);
    });
}); };
exports.generate = function (basePath) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pages;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, processDir(basePath, basePath)];
            case 1:
                pages = _a.sent();
                return [2 /*return*/, processQueries(pages)];
        }
    });
}); };
//# sourceMappingURL=index.js.map