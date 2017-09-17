export interface File {
    path: string;
    created: Date;
    modified: Date;
    contents?: string;
}
