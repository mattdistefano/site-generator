import * as fs from 'fs';

import { getFile } from './get-file';

let fileContents = 'This is the contents of the file';

const mockReadFile = (
  filename: string,
  encoding: string,
  cb: (err: NodeJS.ErrnoException, data?: string) => void
) => {
  if (filename === 'err') {
    cb({} as NodeJS.ErrnoException);
  } else {
    cb(null, fileContents);
  }
};

describe('getFile', () => {
  let readFileSpy: jasmine.Spy;

  beforeAll(() => {
    readFileSpy = spyOn(fs, 'readFile').and.callFake(mockReadFile);
  });

  beforeEach(() => {
    fileContents = 'This is the contents of the file';
  });

  describe('cached', () => {
    it('should return a promise which resolves with the file contents and stats', async () => {
      const file = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(file).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });
    });

    it('should call through to readFile on the first read', async () => {
      const file = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(readFileSpy).toHaveBeenCalled();
    });

    it('should return a promise which resolves with the file contents and stats when stats are unchanged', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(file1).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(file2).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });
    });

    it('should not call through to readFile on multiple reads when stats are unchanged', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(readFileSpy).toHaveBeenCalled();

      readFileSpy.calls.reset();

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(readFileSpy).not.toHaveBeenCalled();
    });

    it('should return a promise which resolves with the updated file contents and stats when mtime has changed', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(file1).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });

      fileContents = 'This is the contents of the changed file';

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(file2).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 16),
        contents: 'This is the contents of the changed file'
      });
    });

    it('should call through to readFile on multiple reads when mtime has changed', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(readFileSpy).toHaveBeenCalled();

      readFileSpy.calls.reset();

      fileContents = 'This is the contents of the changed file';

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      });

      expect(readFileSpy).toHaveBeenCalled();
    });
  });

  describe('not cached', () => {
    it('should return a promise which resolves with the file contents and stats', async () => {
      const file = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(file).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });
    });

    it('should call through to readFile on the first read', async () => {
      const file = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(readFileSpy).toHaveBeenCalled();
    });

    it('should return a promise which resolves with the file contents and stats when stats are unchanged', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(file1).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(file2).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });
    });

    it('should call through to readFile on multiple reads when stats are unchanged', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(readFileSpy).toHaveBeenCalled();

      readFileSpy.calls.reset();

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(readFileSpy).toHaveBeenCalled();
    });

    it('should return a promise which resolves with the updated file contents and stats when mtime has changed', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(file1).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 15),
        contents: 'This is the contents of the file'
      });

      fileContents = 'This is the contents of the changed file';

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(file2).toEqual({
        path: 'test',
        created: new Date(2017, 9, 14),
        modified: new Date(2017, 9, 16),
        contents: 'This is the contents of the changed file'
      });
    });

    it('should call through to readFile on multiple reads when mtime has changed', async () => {
      const file1 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(readFileSpy).toHaveBeenCalled();

      readFileSpy.calls.reset();

      fileContents = 'This is the contents of the changed file';

      const file2 = await getFile('test', {
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
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isDirectory: () => false,
        isFIFO: () => false,
        isSocket: () => false,
        isSymbolicLink: () => false
      }, false);

      expect(readFileSpy).toHaveBeenCalled();
    });
  });
});
