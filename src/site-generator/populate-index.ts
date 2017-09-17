import { File, Page, IndexPage, PageSummary, TPage } from '../interfaces';
import { toSummary } from './to-summary';
import { pageComparator } from './page-comparator';

export const populateIndex = (
  index: IndexPage,
  pages: Page[],
  children: TPage[][]
) => {
  index.pages = index.skipPages ? null : pages.map(toSummary).sort(pageComparator);

  index.children = index.skipChildren
    ? null
    : children.map(child => toSummary(child.find(c => c.type === 'index'))).sort(pageComparator);

  index.type = 'index';
};
