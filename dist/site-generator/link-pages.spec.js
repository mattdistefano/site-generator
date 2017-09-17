"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('linkPages', function () {
    it('should correctly assign the next and previous properties', function () {
        var arr = [
            {
                title: 'Page 10'
            },
            {
                title: 'Page 9'
            },
            {
                title: 'Page 8'
            },
            {
                title: 'Page 7'
            },
            {
                title: 'Page 6'
            },
            {
                title: 'Page 5'
            },
            {
                title: 'Page 4'
            },
            {
                title: 'Page 3'
            },
            {
                title: 'Page 2'
            },
            {
                title: 'Page 1'
            }
        ];
        var expected = [
            {
                title: 'Page 10',
                prev: {
                    title: 'Page 9'
                }
            },
            {
                title: 'Page 9',
                prev: {
                    title: 'Page 8'
                },
                next: {
                    title: 'Page 10'
                }
            },
            {
                title: 'Page 8',
                prev: {
                    title: 'Page 7'
                },
                next: {
                    title: 'Page 9'
                }
            },
            {
                title: 'Page 7',
                prev: {
                    title: 'Page 6'
                },
                next: {
                    title: 'Page 8'
                }
            },
            {
                title: 'Page 6',
                prev: {
                    title: 'Page 5'
                },
                next: {
                    title: 'Page 7'
                }
            },
            {
                title: 'Page 5',
                prev: {
                    title: 'Page 4'
                },
                next: {
                    title: 'Page 6'
                }
            },
            {
                title: 'Page 4',
                prev: {
                    title: 'Page 3'
                },
                next: {
                    title: 'Page 5'
                }
            },
            {
                title: 'Page 3',
                prev: {
                    title: 'Page 2'
                },
                next: {
                    title: 'Page 4'
                }
            },
            {
                title: 'Page 2',
                prev: {
                    title: 'Page 1'
                },
                next: {
                    title: 'Page 3'
                }
            },
            {
                title: 'Page 1',
                next: {
                    title: 'Page 2'
                }
            }
        ];
    });
});
//# sourceMappingURL=link-pages.spec.js.map