import { AddressInfo } from "net";

export function CLI(argv: string[]): void;

export interface ServeOptions {
    verbose: boolean;
    onReady?: (addr: AddressInfo, folders: Record<string, string>) => void;
}

export function serve(
    port: number,
    folders: string[] | Record<string, string>,
    options: ServeOptions,
): void;
