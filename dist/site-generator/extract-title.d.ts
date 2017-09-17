export interface TitleExtract {
    title?: string;
    html?: string;
}
/**
 * Parses the specified html for a h1 and returns
 * an object containing the contents of the h1 and the html
 * with the h1 removed.
 */
export declare const extractTitle: (html: string) => TitleExtract;
