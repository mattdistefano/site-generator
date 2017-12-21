"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = require("path");
var MarkdownIt = require("markdown-it");
var matter = require("gray-matter");
// these don't have typings, but we don't do much with them
var blockImagePlugin = require('markdown-it-block-image');
var blockEmbedPlugin = require('markdown-it-block-embed');
var extract_title_1 = require("./extract-title");
var markdownItOptions = {};
var md = new MarkdownIt('commonmark', markdownItOptions);
md.use(blockImagePlugin, {
    outputContainer: 'div',
    containerClassName: 'image-container'
});
md.use(blockEmbedPlugin, {
    containerClassName: 'video-embed',
    serviceClassPrefix: 'video-embed--',
});
var toIsoDate = function (dateString) {
    var d = new Date(dateString);
    if (isNaN(d.getTime())) {
        return null;
    }
    return d.toISOString();
};
exports.toPage = function (file, basePath) {
    // TODO contents vs content?
    var fm = matter(file.contents);
    var _a = extract_title_1.extractTitle(md.render(fm.content)), title = _a.title, content = _a.html;
    return tslib_1.__assign({}, fm.data, { path: "/" + path.relative(basePath, file.path).slice(0, -3), title: title && title.trim(), content: content && content.trim(), type: path.basename(file.path).slice(0, -3) === 'index' ? 'index' : 'page', created: toIsoDate(fm.data.created) || file.created.toISOString(), modified: toIsoDate(fm.data.modified) || file.modified.toISOString() });
};
//# sourceMappingURL=to-page.js.map