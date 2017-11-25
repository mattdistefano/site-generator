export interface BasePage {
    /** The path, without extension, of the page, relative to site root */
    path: string;
    /** The title of the page including any HTML */
    title: string;
    /** The date the page was created */
    created: string;
    /** The date the page was last modified */
    modified?: string;
    /** The summary of the page */
    summary?: string;
    /** The banner image of the page */
    bannerUrl?: string;
    /** The banner alt text */
    bannerAlt?: string;
}
