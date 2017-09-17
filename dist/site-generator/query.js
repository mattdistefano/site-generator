"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_summary_1 = require("./to-summary");
var page_comparator_1 = require("./page-comparator");
var empty = [];
var countSlashes = function (path) { return (path.match(/\//g) || empty).length; };
var and = function (a, b) { return function (page) {
    return a(page) && b(page);
}; };
var normalizeRoot = function (root) { return root.endsWith('/') ? root : root + '/'; };
var compileQuery = function (query) {
    var predicate = function (page) { return true; };
    var root = query.root && normalizeRoot(query.root);
    // TODO break into more functions
    if (query.path) {
        predicate = and(predicate, function (page) { return page.path === query.path; });
    }
    else {
        if (query.type === 'index') {
            predicate = and(predicate, function (page) { return page.path.endsWith('/index'); });
        }
        else {
            predicate = and(predicate, function (page) { return !page.path.endsWith('/index'); });
        }
        if (root) {
            predicate = and(predicate, function (page) { return page.path.startsWith(root); });
        }
        if (typeof query.depth === 'number') {
            var depth_1 = root ? countSlashes(root) + query.depth : query.depth;
            predicate = and(predicate, function (page) { return countSlashes(page.path) <= depth_1; });
        }
    }
    return function (pages) {
        var results = pages.filter(predicate).sort(page_comparator_1.pageComparator);
        if (typeof query.limit === 'number') {
            results = results.slice(0, query.limit);
        }
        return results.map(to_summary_1.toSummary);
    };
};
exports.executeQuery = function (query, allPages) {
    query.results = compileQuery(query)(allPages);
};
//# sourceMappingURL=query.js.map