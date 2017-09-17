import { PageSummary } from './page-summary';
import { Queries } from './query';
export interface IndexPage {
    type: 'index';
    /** The title of the page including any HTML */
    title: string;
    /** The date the page was created */
    created: string;
    /** The date the page was last modified */
    modified?: string;
    /** The summary of the page */
    summary?: string;
    /** The path, without extension, of the page, relative to site root */
    path: string;
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
