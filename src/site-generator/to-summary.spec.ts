import { Page, IndexPage, PageSummary } from '../interfaces';
import { toSummary } from './to-summary';

describe('toSummary', () => {
  it('should correctly convert a regular page', () => {
    const page: Page = {
      path: '/folder-name/sub-folder-name/file',
      type: 'page',
      title: 'this is a test',
      summary: 'Test file',
      created: new Date(2017, 9, 14).toISOString(),
      modified: new Date(2017, 9, 15).toISOString(),
      content: '<p>And this is some content.</p>'
    };

    const expected: PageSummary = {
      path: '/folder-name/sub-folder-name/file',
      type: 'summary',
      title: 'this is a test',
      summary: 'Test file',
      created: new Date(2017, 9, 14).toISOString(),
      modified: new Date(2017, 9, 15).toISOString(),
    };

    expect(toSummary(page)).toEqual(expected);
  });

  it('should correctly read an index page', () => {
    const page: IndexPage = {
      path: '/folder-name/sub-folder-name/index',
      type: 'index',
      title: 'this is a test index',
      summary: 'Test index',
      created: new Date(2017, 9, 14).toISOString(),
      modified: new Date(2017, 9, 15).toISOString(),
      content: '<p>And this is some content.</p>',
      pages: [
        {
          path: '/folder-name/sub-folder-name/file',
          type: 'summary',
          title: 'this is a test',
          summary: 'Test file',
          created: new Date(2017, 9, 14).toISOString(),
          modified: new Date(2017, 9, 15).toISOString(),
        }
      ],
      children: []
    };

    const expected: PageSummary = {
      path: '/folder-name/sub-folder-name/index',
      type: 'summary',
      title: 'this is a test index',
      summary: 'Test index',
      created: new Date(2017, 9, 14).toISOString(),
      modified: new Date(2017, 9, 15).toISOString(),
      pages: [
        {
          path: '/folder-name/sub-folder-name/file',
          type: 'summary',
          title: 'this is a test',
          summary: 'Test file',
          created: new Date(2017, 9, 14).toISOString(),
          modified: new Date(2017, 9, 15).toISOString(),
        }
      ],
      children: []
    };

    expect(toSummary(page)).toEqual(expected);
  });
});
