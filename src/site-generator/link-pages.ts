import { Page } from '../interfaces';

import { toSummary } from './to-summary';

/**
 * Assigns the next/prev property of each page in the specified array
 * to the PageSummary of the next/prev item in the array.
 * Assumed array is sorted _in descending order_
 * @param pages 
 */
export const linkPages = (pages: Page[]) => {
  let last = null;
  for (let page of pages) {
    if (last) {
      last.prev = toSummary(page);
      page.next = toSummary(last);
    }
    last = page;
  }
};
