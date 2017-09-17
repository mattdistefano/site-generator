/// <reference types="node" />
import * as fs from 'fs';
export declare const getFile: (path: string, stats: fs.Stats, useCache?: boolean) => Promise<{
    path: string;
    created: Date;
    modified: Date;
    contents?: string;
}>;
