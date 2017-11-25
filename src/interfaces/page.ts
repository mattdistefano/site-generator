import { BasePage } from './base-page';
import { PageSummary } from './page-summary';
import { IndexPage } from './index-page';
import { Queries } from './query';

export type TPage = Page | IndexPage;

export interface Page extends BasePage {
  type: 'page';
  /** The HTML content of the page */
  content: string;
  /** The previous page */
  next?: PageSummary;
  /** The next page */
  prev?: PageSummary;
  /** Custom selections of other content */
  queries?: Queries;
}
