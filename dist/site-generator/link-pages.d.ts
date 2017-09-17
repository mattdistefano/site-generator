import { Page } from '../interfaces';
/**
 * Assigns the next/prev property of each page in the specified array
 * to the PageSummary of the next/prev item in the array.
 * Assumed array is sorted _in descending order_
 * @param pages
 */
export declare const linkPages: (pages: Page[]) => void;
