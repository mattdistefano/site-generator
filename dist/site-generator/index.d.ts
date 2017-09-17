import { Page, IndexPage } from '../interfaces';
export declare const generate: (basePath: string) => Promise<(Page | IndexPage)[]>;
