import { PageSummary } from './page-summary';
import { TPage } from './page';
export interface Query {
    root?: string;
    path?: string;
    limit?: number;
    depth?: number;
    minDepth?: number;
    maxDepth?: number;
    type?: 'page' | 'index';
    summarize?: boolean;
    results?: (PageSummary | TPage)[];
    linkText?: string;
}
export interface Queries {
    [name: string]: Query;
}
