import { VNode } from "vue";

export interface TableColumnSimple<
    T extends Record<string, unknown>,
    K extends keyof T,
> {
    type: "checkbox" | "text";
    header: string;
    key?: K;
    value?(row: T): string;
    editable?: boolean;
}

export interface TableColumnEditable<
    T extends Record<string, unknown>,
    K extends keyof T,
> {
    type: "checkbox" | "text";
    header: string;
    key?: K;
    value?(row: T): string;
    update?(row: T, value: string): void;
    editable: true;
}

export interface TableColumnAnchor<T extends Record<string, unknown>> {
    type: "anchor";
    header: string;
    value(row: T): string;
    href: string;
}

export interface TableColumnButton<T extends Record<string, unknown>> {
    type: "button";
    header: string;
    value(row: T): string;
    onClick?: (value: unknown) => void;
    icon?: string;
}

export interface TableColumnRender<T extends Record<string, unknown>> {
    type: "render";
    header: string;
    render(): VNode;
}

export type TableColumn<T extends Record<string, unknown>, K extends keyof T> =
    | TableColumnSimple<T, K>
    | TableColumnEditable<T, K>
    | TableColumnAnchor<T>
    | TableColumnButton<T>
    | TableColumnRender<T>;

export function defineTableColumns<
    T extends Record<string, unknown>,
    K extends keyof T,
>(columns: Array<TableColumn<T, K>>): Array<TableColumn<T, K>> {
    return columns;
}
