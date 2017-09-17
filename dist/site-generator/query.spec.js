"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = require("./query");
var pages = [
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
describe('executeQuery', function () {
    it('should query by path', function () {
        var query = {
            path: '/folder-name/other-sub-folder-name/other-file'
        };
        var expected = [
            {
                path: '/folder-name/other-sub-folder-name/other-file',
                type: 'summary',
                title: 'this is /folder-name/other-sub-folder-name/other-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString(),
            }
        ];
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should query by root and index type', function () {
        var query = {
            root: '/folder-name/',
            type: 'index'
        };
        var expected = [
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
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should query by root and page type', function () {
        var query = {
            root: '/folder-name/',
            type: 'page'
        };
        var expected = [
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
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should respect depth = 0', function () {
        var query = {
            root: '/folder-name/',
            type: 'page',
            depth: 0
        };
        var expected = [
            {
                path: '/folder-name/another-file',
                type: 'summary',
                title: 'this is /folder-name/another-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
            }
        ];
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should respect depth = 1', function () {
        var query = {
            root: '/folder-name/',
            type: 'page',
            depth: 1
        };
        var expected = [
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
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should respect minDepth = 0', function () {
        var query = {
            root: '/folder-name/',
            type: 'page',
            minDepth: 0
        };
        var expected = [
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
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should respect minDepth = 1', function () {
        var query = {
            root: '/folder-name/',
            type: 'page',
            minDepth: 1
        };
        var expected = [
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
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should respect maxDepth = 0', function () {
        var query = {
            root: '/folder-name/',
            type: 'page',
            maxDepth: 0
        };
        var expected = [
            {
                path: '/folder-name/another-file',
                type: 'summary',
                title: 'this is /folder-name/another-file',
                summary: 'Test file',
                created: new Date(2017, 9, 14).toISOString(),
                modified: new Date(2017, 9, 15).toISOString()
            }
        ];
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
    it('should respect maxDepth = 1', function () {
        var query = {
            root: '/folder-name/',
            type: 'page',
            maxDepth: 1
        };
        var expected = [
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
        query_1.executeQuery(query, pages);
        expect(query.results).toEqual(expected);
    });
});
//# sourceMappingURL=query.spec.js.map