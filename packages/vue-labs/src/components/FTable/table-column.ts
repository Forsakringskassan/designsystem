import { type ValidatorConfigs } from "@fkui/logic";
import { type Component, type VNode } from "vue";

export interface TableColumnSimple<T, K extends keyof T> {
    type?: undefined;
    header: string;
    key?: K;
    value?(row: T): string;
}

export interface NormalizedTableColumnSimple<T> {
    type: undefined;
    header: string;
    value(row: T): string;
}

export interface TableColumnCheckbox<T, K extends keyof T> {
    type: "checkbox";
    header: string;
    key?: K;
    value?(row: T): boolean;
    update?(row: T, newValue: boolean, oldValue: boolean): void;
}

export interface NormalizedTableColumnCheckbox<T> {
    type: "checkbox";
    header: string;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
}

export interface TableColumnRadio<T, K extends keyof T> {
    type: "radio";
    header: string;
    key?: K;
    value?(row: T): boolean;
    update?(row: T, newValue: boolean, oldValue: boolean): void;
}

export interface NormalizedTableColumnRadio<T> {
    type: "radio";
    header: string;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
}

export interface TableColumnText<T, K extends keyof T> {
    type: "text";
    header: string;
    key?: K;
    value?(row: T): string;
    update?(row: T, newValue: string, oldValue: string): void;
    editable?: boolean;
    validation?: ValidatorConfigs;
}

export interface NormalizedTableColumnText<T> {
    type: "text";
    header: string;
    value(row: T): string;
    update(row: T, newValue: string, oldValue: string): void;
    editable: boolean;
    validation: ValidatorConfigs;
}

export interface TableColumnAnchor<T> {
    type: "anchor";
    header: string;
    value(row: T): string;
    href: string;
}

export interface NormalizedTableColumnAnchor<T> {
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

export interface NormalizedTableColumnButton<T> {
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
    update?(row: T, newValue: string, oldValue: string): void;
    options: string[];
}

export interface NormalizedTableColumnSelect<T> {
    type: "select";
    header: string;
    value(row: T): string;
    update(row: T, newValue: string, oldValue: string): void;
    options: string[];
}

export interface TableColumnRender<T> {
    type?: undefined;
    header: string;
    render(row: T): VNode | Component;
}

export interface NormalizedTableColumnRender<T> {
    type: undefined;
    header: string;
    render(row: T): VNode | Component;
}

export type TableColumn<T, K extends keyof T = keyof T> =
    | TableColumnSimple<T, K>
    | TableColumnCheckbox<T, K>
    | TableColumnRadio<T, K>
    | TableColumnText<T, K>
    | TableColumnAnchor<T>
    | TableColumnButton<T>
    | TableColumnRender<T>
    | TableColumnSelect<T, K>;

export type NormalizedTableColumn<T> =
    | NormalizedTableColumnSimple<T>
    | NormalizedTableColumnCheckbox<T>
    | NormalizedTableColumnRadio<T>
    | NormalizedTableColumnText<T>
    | NormalizedTableColumnAnchor<T>
    | NormalizedTableColumnButton<T>
    | NormalizedTableColumnRender<T>
    | NormalizedTableColumnSelect<T>;

function getValueFn<TRow, TValue, K extends keyof TRow>(
    fn: ((row: TRow) => TValue) | undefined,
    key: K | undefined,
    coerce: (value: unknown) => TValue,
    defaultValue: TValue,
): (row: TRow) => TValue {
    if (fn) {
        return fn;
    }
    if (key) {
        return (row: TRow): TValue => {
            return coerce(row[key]);
        };
    }
    return () => defaultValue;
}

function getUpdateFn<TRow, TValue, K extends keyof TRow>(
    fn: ((row: TRow, newValue: TValue, oldValue: TValue) => void) | undefined,
    key: K | undefined,
): (row: TRow, newValue: TValue, oldValue: TValue) => void {
    if (fn) {
        return fn;
    }
    if (key) {
        return (row: TRow, value: TValue): void => {
            row[key] = value as TRow[K]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}

function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T> {
    if ("render" in column) {
        return {
            type: undefined,
            header: column.header,
            render: column.render,
        } satisfies NormalizedTableColumnRender<T>;
    }
    switch (column.type) {
        case "checkbox":
            return {
                type: "checkbox",
                header: column.header,
                value: getValueFn(column.value, column.key, Boolean, false),
                update: getUpdateFn(column.update, column.key),
            } satisfies NormalizedTableColumnCheckbox<T>;
        case "radio":
            return {
                type: "radio",
                header: column.header,
                value: getValueFn(column.value, column.key, Boolean, false),
                update: getUpdateFn(column.update, column.key),
            } satisfies NormalizedTableColumnRadio<T>;
        case "text":
            return {
                type: "text",
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
                update: getUpdateFn(column.update, column.key),
                editable: Boolean(column.editable),
                validation: column.validation ?? {},
            } satisfies NormalizedTableColumnText<T>;
        case "anchor":
            return {
                type: "anchor",
                header: column.header,
                value: column.value,
                href: column.href,
            } satisfies NormalizedTableColumnAnchor<T>;
        case "button":
            return {
                type: "button",
                header: column.header,
                value: column.value,
                onClick: column.onClick,
                icon: column.icon,
            } satisfies NormalizedTableColumnButton<T>;
        case "select":
            return {
                type: "select",
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
                update: getUpdateFn(column.update, column.key),
                options: column.options,
            } satisfies NormalizedTableColumnSelect<T>;
        case undefined:
            return {
                type: undefined,
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
            } satisfies NormalizedTableColumnSimple<T>;
    }
}

export function defineTableColumns<T, K extends keyof T = keyof T>(
    columns: Array<TableColumn<T, K>>,
): Array<TableColumn<T, K>> {
    return columns;
}

export function normalizeTableColumns<T, K extends keyof T = keyof T>(
    columns: Array<TableColumn<T, K>>,
): Array<NormalizedTableColumn<T>> {
    return columns.map(normalizeTableColumn);
}
