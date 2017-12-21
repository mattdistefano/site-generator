import { PageSummary } from './page-summary';
import { TPage } from './page';

export interface Query {
  /* Root path from which to select multiple pages */
  root?: string;
  /* Path to single page to select */
  path?: string;
  /* Maximum number of results to include */
  limit?: number;
  /* Specific depth, from root, to traverse */
  depth?: number;
  /* Minimum depth, from root, to traverse */
  minDepth?: number;
  /* Maximum depth, from root, to traverse */
  maxDepth?: number;
  /* Types of pages to select */
  type?: 'page' | 'index';
  /* Whether to summarize the result or include the whole page */
  summarize?: boolean;
  /* Array of results */
  results?: (PageSummary | TPage)[];
  /* Text of link to root or path */
  linkText?: string;
}

export interface Queries {
  [name: string]: Query;
}
