import * as fs from 'fs';

export const stat = (path: string) =>
  new Promise<fs.Stats>((res, rej) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        return rej(err);
      }
      res(stats);
    });
  });
