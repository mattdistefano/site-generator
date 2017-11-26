import { PageSummary } from './page-summary';
export interface Query {
    root?: string;
    path?: string;
    limit?: number;
    depth?: number;
    minDepth?: number;
    maxDepth?: number;
    type?: 'page' | 'index';
    results?: PageSummary[];
    linkText?: string;
}
export interface Queries {
    [name: string]: Query;
}
