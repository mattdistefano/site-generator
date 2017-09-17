import * as fs from 'fs';

export const readDir = (path: string) =>
  new Promise<string[]>((res, rej) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        return rej(err);
      }
      res(files);
    });
  });
