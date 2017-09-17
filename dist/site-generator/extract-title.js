"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parses the specified html for a h1 and returns
 * an object containing the contents of the h1 and the html
 * with the h1 removed.
 */
exports.extractTitle = function (html) {
    if (!html || typeof html !== 'string') {
        return {};
    }
    // regex *could* work too but this is simpler
    var titleStart = html.indexOf('<h1>');
    var titleEnd = html.indexOf('</h1>');
    // no title? no problem
    if (titleStart === -1 || titleEnd === -1) {
        return { html: html, title: '' };
    }
    // get the inner portion of the title, not including the surrounding tag pair
    var title = html.slice(titleStart + 4, titleEnd);
    // remove the title, including the surrounding tag pair, from the containing html
    html = html.slice(0, titleStart) + html.slice(titleEnd + 5);
    return {
        title: title,
        html: html
    };
};
//# sourceMappingURL=extract-title.js.map