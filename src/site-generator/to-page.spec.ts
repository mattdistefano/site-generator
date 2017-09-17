import { Page, IndexPage, File } from '../interfaces';
import { toPage } from './to-page';

describe('toPage', () => {
  it('should correctly read a regular page', () => {
    const file: File = {
      created: new Date(2017, 9, 14),
      modified: new Date(2017, 9, 15),
      path: '/tmp/test/site/data/folder-name/sub-folder-name/file.md',
      contents: [
        '---',
        'summary: Test file',
        '---',
        '',
        '# this is a test',
        '',
        'And this is some content.'
      ].join('\r\n')
    };

    const expected: Page = {
      path: '/folder-name/sub-folder-name/file',
      type: 'page',
      title: 'this is a test',
      summary: 'Test file',
      created: file.created.toISOString(),
      modified: file.modified.toISOString(),
      content: '<p>And this is some content.</p>'
    };

    expect(toPage(file, '/tmp/test/site/data')).toEqual(expected);
  });

  it('should correctly read an index page', () => {
    const file: File = {
      created: new Date(2017, 9, 14),
      modified: new Date(2017, 9, 15),
      path: '/tmp/test/site/data/folder-name/sub-folder-name/index.md',
      contents: [
        '---',
        'summary: Test index',
        '---',
        '',
        '# this is a test index',
        '',
        'And this is some content.'
      ].join('\r\n')
    };

    const expected: IndexPage = {
      path: '/folder-name/sub-folder-name/index',
      type: 'index',
      title: 'this is a test index',
      summary: 'Test index',
      created: file.created.toISOString(),
      modified: file.modified.toISOString(),
      content: '<p>And this is some content.</p>'
    };

    expect(toPage(file, '/tmp/test/site/data')).toEqual(expected);
  });
});
