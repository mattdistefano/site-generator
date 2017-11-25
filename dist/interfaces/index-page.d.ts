import { BasePage } from './base-page';
import { PageSummary } from './page-summary';
import { Queries } from './query';
export interface IndexPage extends BasePage {
    type: 'index';
    /** The HTML content of the page */
    content: string;
    /** Flag indicating whether pages is intentionally empty */
    skipPages?: boolean;
    linkRoot?: boolean;
    /** Flag indicating whether children is intentionally empty */
    skipChildren?: boolean;
    /** The list of pages in this folder */
    pages?: PageSummary[];
    /** The contents of any sub folders */
    children?: PageSummary[];
    /** Custom selections of other content */
    queries?: Queries;
}
