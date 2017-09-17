import { Page, IndexPage, PageSummary } from '../interfaces';

export const toSummary = (page: Page | IndexPage): PageSummary => {
  const summary: PageSummary = {
    path: page.path,
    title: page.title,
    summary: page.summary,
    created: page.created,
    modified: page.modified,
    type: 'summary'
  };

  if (page.type === 'index') {
    summary.pages = page.pages;
    summary.children = page.children;
  }

  return summary;
};
