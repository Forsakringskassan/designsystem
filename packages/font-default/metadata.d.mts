export interface Asset {
    /** Name of the font file */
    name: string;
    /** Relative path to the font file */
    filename: string;
    /** Full path to the font file */
    filePath: string;
}

/** Absolute path to the folder containing the font files */
export declare const fontDir: string;

/** List of available font assets */
export declare const assets: Asset[];

export default assets;
