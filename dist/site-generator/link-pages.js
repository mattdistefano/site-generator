"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_summary_1 = require("./to-summary");
/**
 * Assigns the next/prev property of each page in the specified array
 * to the PageSummary of the next/prev item in the array.
 * Assumed array is sorted _in descending order_
 * @param pages
 */
exports.linkPages = function (pages) {
    var last = null;
    for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
        var page = pages_1[_i];
        if (last) {
            last.prev = to_summary_1.toSummary(page);
            page.next = to_summary_1.toSummary(last);
        }
        last = page;
    }
};
//# sourceMappingURL=link-pages.js.map