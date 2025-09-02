import { type Component, type VNode } from "vue";

export interface TableColumnSimple<T, K extends keyof T> {
    type: "text";
    header: string;
    key?: K;
    value?(row: T): string;
    editable?: boolean;
}

export interface TableColumnCheckbox<T, K extends keyof T> {
    type: "checkbox";
    header: string;
    key?: K;
    value?(row: T): string;
}

export interface TableColumnEditable<T, K extends keyof T> {
    type: "text";
    header: string;
    key?: K;
    value?(row: T): string;
    update?(row: T, value: string): void;
    editable: true;
}

export interface TableColumnAnchor<T> {
    type: "anchor";
    header: string;
    value(row: T): string;
    href: string;
}

export interface TableColumnButton<T> {
    type: "button";
    header: string;
    value(row: T): string;
    onClick?(row: T): void;
    icon?: string;
}

export interface TableColumnSelect<T, K extends keyof T> {
    type: "select";
    header: string;
    key?: K;
    value?(row: T): string;
}

export interface TableColumnRender<T> {
    type: "render";
    header: string;
    render(row: T): VNode | Component;
}

export type TableColumn<T, K extends keyof T = keyof T> =
    | TableColumnSimple<T, K>
    | TableColumnCheckbox<T, K>
    | TableColumnEditable<T, K>
    | TableColumnAnchor<T>
    | TableColumnButton<T>
    | TableColumnRender<T>
    | TableColumnSelect<T, K>;

export function defineTableColumns<T, K extends keyof T = keyof T>(
    columns: Array<TableColumn<T, K>>,
): Array<TableColumn<T, K>> {
    return columns;
}
