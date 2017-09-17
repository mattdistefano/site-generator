import * as path from 'path';
import * as fs from 'fs';

import { File, Page, IndexPage, PageSummary, TPage } from '../interfaces';
import { readDir, stat, readFile } from '../fs';

import { getFile } from './get-file';
import { toPage } from './to-page';
import { toSummary } from './to-summary';
import { populateIndex } from './populate-index';
import { pageComparator } from './page-comparator';
import { linkPages } from './link-pages';
import { executeQuery } from './query';

const processDir = async (dirPath: string, basePath: string) => {
  const pages: Page[] = [];
  const subdirectories: string[] = [];
  let index: IndexPage;

  for (let file of await readDir(dirPath)) {
    const fullPath = path.join(dirPath, file);
    const stats = await stat(fullPath);

    if (stats.isFile()) {
      if (path.extname(fullPath) === '.md') {
        const page = toPage(await getFile(fullPath, stats), basePath) as TPage;
        if (page.type === 'index') {
          index = page;
        } else {
          pages.push(page);
        }
      }
    } else if (stats.isDirectory()) {
      subdirectories.push(fullPath);
    }
  }

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
    pages.sort(pageComparator);
    linkPages(pages);
  }

  const subdirs = await Promise.all(
    subdirectories.map(subdir => processDir(subdir, basePath))
  );

  populateIndex(index, pages, subdirs);

  const allPages = [index, ...pages];

  subdirs.forEach(child => allPages.push(...child));

  if (index.linkRoot) {
    linkPages(allPages
      .filter(page => page.type === 'page')
      .sort(pageComparator) as Page[]);
  }

  return allPages;
};

const processQueries = (pages: TPage[]) => pages.forEach(page =>
  Object.keys(page.queries).forEach(key =>
    executeQuery(page.queries[key], pages)
  )
);

export const generate = async (basePath: string) => {
  const pages = await processDir(basePath, basePath);

  return processQueries(pages);
};
