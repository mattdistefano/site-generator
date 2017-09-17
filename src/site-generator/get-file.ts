import * as fs from 'fs';

import { File } from '../interfaces';

import { readFile } from '../fs';

interface FileCache {
  [path: string]: File;
}

const fileCache: FileCache = {};

export const getFile = async (path: string, stats: fs.Stats, useCache = true) => {
  if (useCache) {
    const cached =
      fileCache[path] &&
      fileCache[path].modified.getTime() === stats.mtime.getTime();

    if (!cached) {
      fileCache[path] = {
        path: path,
        modified: stats.mtime,
        created: stats.birthtime,
        contents: await readFile(path)
      };
    }

    return { ...fileCache[path] };
  } else {
    return {
      path: path,
      modified: stats.mtime,
      created: stats.birthtime,
      contents: await readFile(path)
    };
  }  
}
