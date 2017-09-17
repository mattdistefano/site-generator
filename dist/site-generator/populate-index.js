"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_summary_1 = require("./to-summary");
var page_comparator_1 = require("./page-comparator");
exports.populateIndex = function (index, pages, children) {
    index.pages = index.skipPages ? null : pages.map(to_summary_1.toSummary).sort(page_comparator_1.pageComparator);
    index.children = index.skipChildren
        ? null
        : children.map(function (child) { return to_summary_1.toSummary(child.find(function (c) { return c.type === 'index'; })); }).sort(page_comparator_1.pageComparator);
    index.type = 'index';
};
//# sourceMappingURL=populate-index.js.map