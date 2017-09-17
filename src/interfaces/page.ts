import { PageSummary } from './page-summary';
import { IndexPage } from './index-page';
import { Queries } from './query';

export type TPage = Page | IndexPage;

export interface Page {
  type: 'page';
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
  /** The previous page */
  next?: PageSummary;
  /** The next page */
  prev?: PageSummary;
  /** Custom selections of other content */
  queries?: Queries;
}
