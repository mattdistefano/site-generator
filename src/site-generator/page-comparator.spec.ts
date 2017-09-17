import { Page, PageSummary } from '../interfaces';
import { pageComparator } from './page-comparator';

describe('pageComparator', () => {
  it('should order by created date descending, when present', () => {
    const pageA: Page = {
      path: '/pageA',
      type: 'page',
      title: 'this is a test',
      summary: 'Test file',
      created: new Date(2017, 9, 14).toISOString(),
      modified: new Date(2017, 9, 15).toISOString(),
      content: '<p>And this is some content.</p>'
    };

    const pageB: Page = {
      path: '/pageB',
      type: 'page',
      title: 'this is a test',
      summary: 'Test file',
      created: new Date(2017, 9, 16).toISOString(),
      modified: new Date(2017, 9, 17).toISOString(),
      content: '<p>And this is some content.</p>'
    };

    expect(pageComparator(pageA, pageB)).toEqual(1);

    expect(pageComparator(pageB, pageA)).toEqual(-1);
  });

  it('should order by path when created date is not present on a', () => {
    const pageA: Page = {
      path: '/pageA',
      type: 'page',
      title: 'this is a test',
      summary: 'Test file',
      created: null,
      modified: new Date(2017, 9, 15).toISOString(),
      content: '<p>And this is some content.</p>'
    };

    const pageB: Page = {
      path: '/pageB',
      type: 'page',
      title: 'this is a test',
      summary: 'Test file',
      created: new Date(2017, 9, 16).toISOString(),
      modified: new Date(2017, 9, 17).toISOString(),
      content: '<p>And this is some content.</p>'
    };

    expect(pageComparator(pageA, pageB)).toEqual(1);

    expect(pageComparator(pageB, pageA)).toEqual(-1);
  });
});
