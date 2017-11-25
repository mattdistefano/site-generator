import { BasePage } from './base-page';
export interface PageSummary extends BasePage {
    type: 'summary';
    /** The list of pages in this folder */
    pages?: PageSummary[];
    /** The contents of any sub folders */
    children?: PageSummary[];
}
