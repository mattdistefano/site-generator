"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extract_title_1 = require("./extract-title");
describe('extractTitle', function () {
    it('should return an empty object when html is null', function () {
        expect(extract_title_1.extractTitle(null)).toEqual({});
    });
    it('should return an empty object when html is undefined', function () {
        expect(extract_title_1.extractTitle(undefined)).toEqual({});
    });
    it('should return an empty object when html is an empty string', function () {
        expect(extract_title_1.extractTitle('')).toEqual({});
    });
    it('should return an empty object when html is number', function () {
        expect(extract_title_1.extractTitle(10)).toEqual({});
    });
    it('should return the html and an empty title when html does not contain an h1', function () {
        expect(extract_title_1.extractTitle('<p>yo</p>')).toEqual({
            title: '',
            html: '<p>yo</p>'
        });
    });
    it('should separate the title, without tags, from the html when the html contains an h1', function () {
        expect(extract_title_1.extractTitle('<h1>yi!</h1><p>yo</p>')).toEqual({
            title: 'yi!',
            html: '<p>yo</p>'
        });
    });
    it('should include tags within the h1', function () {
        expect(extract_title_1.extractTitle('<h1>yi! <em>yaaaaaa</em></h1><p>yo</p>')).toEqual({
            title: 'yi! <em>yaaaaaa</em>',
            html: '<p>yo</p>'
        });
    });
    it('should return the title and an empty html when the html contains only an h1', function () {
        expect(extract_title_1.extractTitle('<h1>yi! <em>yaaaaaa</em></h1>')).toEqual({
            title: 'yi! <em>yaaaaaa</em>',
            html: ''
        });
    });
});
//# sourceMappingURL=extract-title.spec.js.map