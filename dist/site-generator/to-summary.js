"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSummary = function (page) {
    var summary = {
        path: page.path,
        title: page.title,
        summary: page.summary,
        created: page.created,
        modified: page.modified,
        type: 'summary'
    };
    if (page.type === 'index') {
        summary.pages = page.pages;
        summary.children = page.children;
    }
    return summary;
};
//# sourceMappingURL=to-summary.js.map