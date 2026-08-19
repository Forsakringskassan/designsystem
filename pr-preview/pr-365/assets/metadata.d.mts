
export interface Token {
    readonly name: string;
    readonly value: string;
    readonly palette: string | null;
    readonly comment: string | null;
}

export interface Metadata {
    readonly tokens: Token[];
}

declare const metadata: Metadata;
export default metadata;
