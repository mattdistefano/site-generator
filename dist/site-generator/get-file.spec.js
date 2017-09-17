"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = require("fs");
var get_file_1 = require("./get-file");
var fileContents = 'This is the contents of the file';
var mockReadFile = function (filename, encoding, cb) {
    if (filename === 'err') {
        cb({});
    }
    else {
        cb(null, fileContents);
    }
};
describe('getFile', function () {
    var readFileSpy;
    beforeAll(function () {
        readFileSpy = spyOn(fs, 'readFile').and.callFake(mockReadFile);
    });
    beforeEach(function () {
        fileContents = 'This is the contents of the file';
    });
    describe('cached', function () {
        it('should return a promise which resolves with the file contents and stats', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        })];
                    case 1:
                        file = _a.sent();
                        expect(file).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should call through to readFile on the first read', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        })];
                    case 1:
                        file = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return a promise which resolves with the file contents and stats when stats are unchanged', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        })];
                    case 1:
                        file1 = _a.sent();
                        expect(file1).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 15),
                                mtimeMs: new Date(2017, 9, 15).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            })];
                    case 2:
                        file2 = _a.sent();
                        expect(file2).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not call through to readFile on multiple reads when stats are unchanged', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        })];
                    case 1:
                        file1 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        readFileSpy.calls.reset();
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 15),
                                mtimeMs: new Date(2017, 9, 15).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            })];
                    case 2:
                        file2 = _a.sent();
                        expect(readFileSpy).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return a promise which resolves with the updated file contents and stats when mtime has changed', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        })];
                    case 1:
                        file1 = _a.sent();
                        expect(file1).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        fileContents = 'This is the contents of the changed file';
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 16),
                                mtimeMs: new Date(2017, 9, 16).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            })];
                    case 2:
                        file2 = _a.sent();
                        expect(file2).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 16),
                            contents: 'This is the contents of the changed file'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should call through to readFile on multiple reads when mtime has changed', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        })];
                    case 1:
                        file1 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        readFileSpy.calls.reset();
                        fileContents = 'This is the contents of the changed file';
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 16),
                                mtimeMs: new Date(2017, 9, 16).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            })];
                    case 2:
                        file2 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('not cached', function () {
        it('should return a promise which resolves with the file contents and stats', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        }, false)];
                    case 1:
                        file = _a.sent();
                        expect(file).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should call through to readFile on the first read', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        }, false)];
                    case 1:
                        file = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return a promise which resolves with the file contents and stats when stats are unchanged', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        }, false)];
                    case 1:
                        file1 = _a.sent();
                        expect(file1).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 15),
                                mtimeMs: new Date(2017, 9, 15).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            }, false)];
                    case 2:
                        file2 = _a.sent();
                        expect(file2).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should call through to readFile on multiple reads when stats are unchanged', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        }, false)];
                    case 1:
                        file1 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        readFileSpy.calls.reset();
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 15),
                                mtimeMs: new Date(2017, 9, 15).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            }, false)];
                    case 2:
                        file2 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return a promise which resolves with the updated file contents and stats when mtime has changed', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        }, false)];
                    case 1:
                        file1 = _a.sent();
                        expect(file1).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 15),
                            contents: 'This is the contents of the file'
                        });
                        fileContents = 'This is the contents of the changed file';
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 16),
                                mtimeMs: new Date(2017, 9, 16).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            }, false)];
                    case 2:
                        file2 = _a.sent();
                        expect(file2).toEqual({
                            path: 'test',
                            created: new Date(2017, 9, 14),
                            modified: new Date(2017, 9, 16),
                            contents: 'This is the contents of the changed file'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should call through to readFile on multiple reads when mtime has changed', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var file1, file2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, get_file_1.getFile('test', {
                            mode: 666,
                            dev: 1,
                            ino: 1,
                            nlink: 1,
                            uid: 1,
                            gid: 1,
                            rdev: 1,
                            size: 10,
                            blksize: 10,
                            blocks: 5,
                            birthtime: new Date(2017, 9, 14),
                            birthtimeMs: new Date(2017, 9, 14).getTime(),
                            atime: new Date(2017, 9, 16),
                            atimeMs: new Date(2017, 9, 16).getTime(),
                            ctime: new Date(2017, 9, 14),
                            ctimeMs: new Date(2017, 9, 14).getTime(),
                            mtime: new Date(2017, 9, 15),
                            mtimeMs: new Date(2017, 9, 15).getTime(),
                            isFile: function () { return true; },
                            isBlockDevice: function () { return false; },
                            isCharacterDevice: function () { return false; },
                            isDirectory: function () { return false; },
                            isFIFO: function () { return false; },
                            isSocket: function () { return false; },
                            isSymbolicLink: function () { return false; }
                        }, false)];
                    case 1:
                        file1 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        readFileSpy.calls.reset();
                        fileContents = 'This is the contents of the changed file';
                        return [4 /*yield*/, get_file_1.getFile('test', {
                                mode: 666,
                                dev: 1,
                                ino: 1,
                                nlink: 1,
                                uid: 1,
                                gid: 1,
                                rdev: 1,
                                size: 10,
                                blksize: 10,
                                blocks: 5,
                                birthtime: new Date(2017, 9, 14),
                                birthtimeMs: new Date(2017, 9, 14).getTime(),
                                atime: new Date(2017, 9, 16),
                                atimeMs: new Date(2017, 9, 16).getTime(),
                                ctime: new Date(2017, 9, 14),
                                ctimeMs: new Date(2017, 9, 14).getTime(),
                                mtime: new Date(2017, 9, 16),
                                mtimeMs: new Date(2017, 9, 16).getTime(),
                                isFile: function () { return true; },
                                isBlockDevice: function () { return false; },
                                isCharacterDevice: function () { return false; },
                                isDirectory: function () { return false; },
                                isFIFO: function () { return false; },
                                isSocket: function () { return false; },
                                isSymbolicLink: function () { return false; }
                            }, false)];
                    case 2:
                        file2 = _a.sent();
                        expect(readFileSpy).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=get-file.spec.js.map