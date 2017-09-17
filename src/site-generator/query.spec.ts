import {
  Page,
  IndexPage,
  File,
  TPage,
  Query,
  PageSummary
} from '../interfaces';
import { executeQuery } from './query';

const pages: TPage[] = [
  {
    path: '/index',
    type: 'index',
    title: 'this is /index/index',
    summary: 'Test index',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>',
    pages: [
      {
        path: '/a-file',
        type: 'summary',
        title: 'this is /a-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ],
    children: [
      {
        path: '/folder-name/index',
        type: 'summary',
        title: 'this is /folder-name/index',
        summary: 'Test index',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
        pages: [
          {
            path: '/folder-name/another-file',
            type: 'summary',
            title: 'this is /folder-name/another-file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          }
        ],
        children: [
          {
            path: '/folder-name/sub-folder-name/index',
            type: 'summary',
            title: 'this is /folder-name/sub-folder-name/index',
            summary: 'Test index',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
            pages: [
              {
                path: '/folder-name/sub-folder-name/file',
                type: 'summary',
                title: 'this is /folder-name/sub-folder-name/file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
              },
              {
                path: '/folder-name/sub-folder-name/other-file',
                type: 'summary',
                title: 'this is /folder-name/sub-folder-name/other-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
              }
            ],
            children: []
          },
          {
            path: '/folder-name/other-sub-folder-name/index',
            type: 'summary',
            title: 'this is /folder-name/other-sub-folder-name/index',
            summary: 'Test index',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
            pages: [
              {
                path: '/folder-name/other-sub-folder-name/other-file',
                type: 'summary',
                title: 'this is /folder-name/other-sub-folder-name/other-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
              }
            ],
            children: []
          }
        ]
      }
    ]
  },
  {
    path: '/a-file',
    type: 'page',
    title: 'this is /a-file',
    summary: 'Test file',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>'
  },
  {
    path: '/folder-name/index',
    type: 'index',
    title: 'this is /folder-name/index',
    summary: 'Test index',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>',
    pages: [
      {
        path: '/folder-name/another-file',
        type: 'summary',
        title: 'this is /folder-name/another-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ],
    children: [
      {
        path: '/folder-name/sub-folder-name/index',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/index',
        summary: 'Test index',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
        pages: [
          {
            path: '/folder-name/sub-folder-name/file',
            type: 'summary',
            title: 'this is /folder-name/sub-folder-name/file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          },
          {
            path: '/folder-name/sub-folder-name/other-file',
            type: 'summary',
            title: 'this is /folder-name/sub-folder-name/other-file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          }
        ],
        children: []
      },
      {
        path: '/folder-name/other-sub-folder-name/index',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/index',
        summary: 'Test index',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
        pages: [
          {
            path: '/folder-name/other-sub-folder-name/other-file',
            type: 'summary',
            title: 'this is /folder-name/other-sub-folder-name/other-file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          }
        ],
        children: []
      }
    ]
  },
  {
    path: '/folder-name/another-file',
    type: 'page',
    title: 'this is /folder-name/another-file',
    summary: 'Test file',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>'
  },
  {
    path: '/folder-name/sub-folder-name/index',
    type: 'index',
    title: 'this is /folder-name/sub-folder-name/index',
    summary: 'Test index',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>',
    pages: [
      {
        path: '/folder-name/sub-folder-name/file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ],
    children: []
  },
  {
    path: '/folder-name/sub-folder-name/file',
    type: 'page',
    title: 'this is /folder-name/sub-folder-name/file',
    summary: 'Test file',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>'
  },
  {
    path: '/folder-name/sub-folder-name/other-file',
    type: 'page',
    title: 'this is /folder-name/sub-folder-name/other-file',
    summary: 'Test file',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>'
  },
  {
    path: '/folder-name/other-sub-folder-name/index',
    type: 'index',
    title: 'this is /folder-name/other-sub-folder-name/index',
    summary: 'Test index',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>',
    pages: [
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ],
    children: []
  },
  {
    path: '/folder-name/other-sub-folder-name/other-file',
    type: 'page',
    title: 'this is /folder-name/other-sub-folder-name/other-file',
    summary: 'Test file',
    created: new Date(2017, 9, 14).toISOString(),
    modified: new Date(2017, 9, 15).toISOString(),
    content: '<p>And this is some content.</p>'
  }
];

describe('executeQuery', () => {
  it('should query by path', () => {
    const query: Query = {
      path: '/folder-name/other-sub-folder-name/other-file'
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should query by root and index type', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'index'
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/sub-folder-name/index',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/index',
        summary: 'Test index',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
        pages: [
          {
            path: '/folder-name/sub-folder-name/file',
            type: 'summary',
            title: 'this is /folder-name/sub-folder-name/file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          },
          {
            path: '/folder-name/sub-folder-name/other-file',
            type: 'summary',
            title: 'this is /folder-name/sub-folder-name/other-file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          }
        ],
        children: []
      },
      {
        path: '/folder-name/other-sub-folder-name/index',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/index',
        summary: 'Test index',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
        pages: [
          {
            path: '/folder-name/other-sub-folder-name/other-file',
            type: 'summary',
            title: 'this is /folder-name/other-sub-folder-name/other-file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          }
        ],
        children: []
      },
      {
        path: '/folder-name/index',
        type: 'summary',
        title: 'this is /folder-name/index',
        summary: 'Test index',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString(),
        pages: [
          {
            path: '/folder-name/another-file',
            type: 'summary',
            title: 'this is /folder-name/another-file',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString()
          }
        ],
        children: [
          {
            path: '/folder-name/sub-folder-name/index',
            type: 'summary',
            title: 'this is /folder-name/sub-folder-name/index',
            summary: 'Test index',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
            pages: [
              {
                path: '/folder-name/sub-folder-name/file',
                type: 'summary',
                title: 'this is /folder-name/sub-folder-name/file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
              },
              {
                path: '/folder-name/sub-folder-name/other-file',
                type: 'summary',
                title: 'this is /folder-name/sub-folder-name/other-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
              }
            ],
            children: []
          },
          {
            path: '/folder-name/other-sub-folder-name/index',
            type: 'summary',
            title: 'this is /folder-name/other-sub-folder-name/index',
            summary: 'Test index',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
            pages: [
              {
                path: '/folder-name/other-sub-folder-name/other-file',
                type: 'summary',
                title: 'this is /folder-name/other-sub-folder-name/other-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
              }
            ],
            children: []
          }
        ]
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should query by root and page type', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page'
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/sub-folder-name/file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/another-file',
        type: 'summary',
        title: 'this is /folder-name/another-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should respect depth = 0', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page',
      depth: 0
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/another-file',
        type: 'summary',
        title: 'this is /folder-name/another-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should respect depth = 1', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page',
      depth: 1
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/sub-folder-name/file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should respect minDepth = 0', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page',
      minDepth: 0
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/sub-folder-name/file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/another-file',
        type: 'summary',
        title: 'this is /folder-name/another-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should respect minDepth = 1', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page',
      minDepth: 1
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/sub-folder-name/file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should respect maxDepth = 0', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page',
      maxDepth: 0
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/another-file',
        type: 'summary',
        title: 'this is /folder-name/another-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

  it('should respect maxDepth = 1', () => {
    const query: Query = {
      root: '/folder-name/',
      type: 'page',
      maxDepth: 1
    };

    const expected: PageSummary[] = [
      {
        path: '/folder-name/sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/sub-folder-name/file',
        type: 'summary',
        title: 'this is /folder-name/sub-folder-name/file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/other-sub-folder-name/other-file',
        type: 'summary',
        title: 'this is /folder-name/other-sub-folder-name/other-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      },
      {
        path: '/folder-name/another-file',
        type: 'summary',
        title: 'this is /folder-name/another-file',
        summary: 'Test file',
        created: new Date(2017, 9, 14).toISOString(),
        modified: new Date(2017, 9, 15).toISOString()
      }
    ];

    executeQuery(query, pages);

    expect(query.results).toEqual(expected);
  });

});
