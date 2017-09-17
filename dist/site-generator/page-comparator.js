"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageComparator = function (a, b) {
    if (a.created && b.created && a.created !== b.created) {
        return b.created.localeCompare(a.created);
    }
    return b.path.localeCompare(a.path);
};
//# sourceMappingURL=page-comparator.js.map