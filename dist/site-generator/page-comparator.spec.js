"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_comparator_1 = require("./page-comparator");
describe('pageComparator', function () {
    it('should order by created date descending, when present', function () {
        var pageA = {
            path: '/pageA',
            type: 'page',
            title: 'this is a test',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
            content: '<p>And this is some content.</p>'
        };
        var pageB = {
            path: '/pageB',
            type: 'page',
            title: 'this is a test',
            summary: 'Test file',
            created: new Date(2017, 9, 16).toISOString(),
            modified: new Date(2017, 9, 17).toISOString(),
            content: '<p>And this is some content.</p>'
        };
        expect(page_comparator_1.pageComparator(pageA, pageB)).toEqual(1);
        expect(page_comparator_1.pageComparator(pageB, pageA)).toEqual(-1);
    });
    it('should order by path when created date is not present on a', function () {
        var pageA = {
            path: '/pageA',
            type: 'page',
            title: 'this is a test',
            summary: 'Test file',
            created: null,
            modified: new Date(2017, 9, 15).toISOString(),
            content: '<p>And this is some content.</p>'
        };
        var pageB = {
            path: '/pageB',
            type: 'page',
            title: 'this is a test',
            summary: 'Test file',
            created: new Date(2017, 9, 16).toISOString(),
            modified: new Date(2017, 9, 17).toISOString(),
            content: '<p>And this is some content.</p>'
        };
        expect(page_comparator_1.pageComparator(pageA, pageB)).toEqual(1);
        expect(page_comparator_1.pageComparator(pageB, pageA)).toEqual(-1);
    });
});
//# sourceMappingURL=page-comparator.spec.js.map