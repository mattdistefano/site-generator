"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_summary_1 = require("./to-summary");
describe('toSummary', function () {
    it('should correctly convert a regular page', function () {
        var page = {
            path: '/folder-name/sub-folder-name/file',
            type: 'page',
            title: 'this is a test',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
            content: '<p>And this is some content.</p>'
        };
        var expected = {
            path: '/folder-name/sub-folder-name/file',
            type: 'summary',
            title: 'this is a test',
            summary: 'Test file',
            created: new Date(2017, 9, 14).toISOString(),
            modified: new Date(2017, 9, 15).toISOString(),
        };
        expect(to_summary_1.toSummary(page)).toEqual(expected);
    });
    it('should correctly read an index page', function () {
        var page = {
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
        var expected = {
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
        expect(to_summary_1.toSummary(page)).toEqual(expected);
    });
});
//# sourceMappingURL=to-summary.spec.js.map