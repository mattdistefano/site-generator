import * as fs from 'fs';

export const readFile = (path: string, encoding = 'utf-8') =>
  new Promise<string>((res, rej) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        return rej(err);
      }
      res(data);
    });
  });
