import { toSummary } from './to-summary';
import { pageComparator } from './page-comparator';
import { Page, IndexPage, Query, PageSummary, TPage } from '../interfaces';

type TPagePredicate = (page: TPage) => boolean;

const empty: string[] = [];

const countSlashes = (path: string) => (path.match(/\//g) || empty).length;

const and = (a: TPagePredicate, b: TPagePredicate) => (page: TPage) =>
  a(page) && b(page);

const normalizeRoot = (root: string) =>
  root.endsWith('/') ? root : root + '/';

const compileQuery = (query: Query) => {
  let predicate: TPagePredicate = page => true;
  const root = query.root && normalizeRoot(query.root);

  // TODO break into more functions
  if (query.path) {
    predicate = and(predicate, page => page.path === query.path);
  } else {
    if (query.type === 'index') {
      predicate = and(predicate, page => page.path.endsWith('/index'));
    } else {
      predicate = and(predicate, page => !page.path.endsWith('/index'));
    }

    if (root) {
      predicate = and(predicate, page => page.path.startsWith(root));
    }

    if (typeof query.depth === 'number') {
      const depth = root ? countSlashes(root) + query.depth : query.depth;
      predicate = and(predicate, page => countSlashes(page.path) === depth);
    } else {
      if (typeof query.minDepth === 'number') {
        const minDepth = root
          ? countSlashes(root) + query.minDepth
          : query.minDepth;
        predicate = and(predicate, page => countSlashes(page.path) >= minDepth);
      }

      if (typeof query.maxDepth === 'number') {
        const maxDepth = root
          ? countSlashes(root) + query.maxDepth
          : query.maxDepth;
        predicate = and(predicate, page => countSlashes(page.path) <= maxDepth);
      }
    }
  }

  return (pages: TPage[]) => {
    let results = pages.filter(predicate).sort(pageComparator);

    if (typeof query.limit === 'number') {
      results = results.slice(0, query.limit);
    }

    if (query.summarize === false) {
      return results;
    }

    return results.map(toSummary) as PageSummary[];
  };
};

export const executeQuery = (query: Query, allPages: TPage[]) => {
  query.results = compileQuery(query)(allPages);
};
