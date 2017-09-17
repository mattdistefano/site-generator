import * as path from 'path';
import { IndexPage, Page, TPage, PageSummary } from '../interfaces';

export const pageComparator = (a: TPage|PageSummary, b: TPage|PageSummary) => {
  if (a.created && b.created && a.created !== b.created) {
    return b.created.localeCompare(a.created);
  }
  return b.path.localeCompare(a.path);
}
