import { type ValidatorConfigs } from "@fkui/logic";
import { type Component, type VNode } from "vue";

/**
 * @public
 */
export interface TableColumnSimple<T, K extends keyof T> {
    type?: undefined;
    header: string;
    key?: K;
    value?(row: T): string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnSimple<T, K> {
    type: undefined;
    header: string;
    value(row: T): string;
    sortable?: K;
}

/**
 * @public
 */
export interface TableColumnCheckbox<T, K extends keyof T> {
    type: "checkbox";
    header: string;
    key?: K;
    value?(row: T): boolean;
    update?(row: T, newValue: boolean, oldValue: boolean): void;
    editable?: boolean | ((row: T) => boolean);
}

/**
 * @internal
 */
export interface NormalizedTableColumnCheckbox<T, K> {
    type: "checkbox";
    header: string;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
    editable(row: T): boolean;
    sortable?: K;
}

/**
 * @public
 */
export interface TableColumnRadio<T, K extends keyof T> {
    type: "radio";
    header: string;
    key?: K;
    value?(row: T): boolean;
    update?(row: T, newValue: boolean, oldValue: boolean): void;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRadio<T, K> {
    type: "radio";
    header: string;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
    sortable?: K;
}

/**
 * @public
 */
export interface TableColumnText<T, K extends keyof T> {
    type: "text";
    header: string;
    key?: K;
    value?(row: T): string;
    update?(row: T, newValue: string, oldValue: string): void;
    editable?: boolean | ((row: T) => boolean);
    validation?: ValidatorConfigs;
}

/**
 * @internal
 */
export interface NormalizedTableColumnText<T, K> {
    type: "text";
    header: string;
    value(row: T): string;
    update(row: T, newValue: string, oldValue: string): void;
    editable(row: T): boolean;
    validation: ValidatorConfigs;
    sortable?: K;
}

/**
 * @public
 */
export interface TableColumnAnchor<T, K extends keyof T> {
    type: "anchor";
    header: string;
    key?: K;
    value(row: T): string | null;
    enabled?: boolean | ((row: T) => boolean);
    href: string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnAnchor<T, K> {
    type: "anchor";
    header: string;
    value(row: T): string | null;
    href: string;
    sortable?: K;
    enabled(row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnButton<T, K extends keyof T> {
    type: "button";
    header: string;
    key?: K;
    value(row: T): string | null;
    onClick?(row: T): void;
    enabled?: boolean | ((row: T) => boolean);
    icon?: string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnButton<T, K> {
    type: "button";
    header: string;
    value(row: T): string | null;
    onClick?(row: T): void;
    enabled(row: T): boolean;
    icon?: string;
    sortable?: K;
}

/**
 * @public
 */
export interface TableColumnSelect<T, K extends keyof T> {
    type: "select";
    header: string;
    key?: K;
    value?(row: T): string;
    update?(row: T, newValue: string, oldValue: string): void;
    editable?: boolean | ((row: T) => boolean);
    options: string[];
}

/**
 * @internal
 */
export interface NormalizedTableColumnSelect<T, K> {
    type: "select";
    header: string;
    value(row: T): string;
    update(row: T, newValue: string, oldValue: string): void;
    editable(row: T): boolean;
    options: string[];
    sortable?: K;
}

/**
 * @public
 */
export interface TableColumnRender<T> {
    type?: undefined;
    header: string;
    key?: undefined;
    render(row: T): VNode | Component;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRender<T> {
    type: undefined;
    header: string;
    render(row: T): VNode | Component;
    sortable?: boolean;
}

/**
 * @public
 */
export type TableColumn<T, K extends keyof T = keyof T> =
    | TableColumnSimple<T, K>
    | TableColumnCheckbox<T, K>
    | TableColumnRadio<T, K>
    | TableColumnText<T, K>
    | TableColumnAnchor<T, K>
    | TableColumnButton<T, K>
    | TableColumnRender<T>
    | TableColumnSelect<T, K>;

/**
 * @internal
 */
export type NormalizedTableColumn<T, K> =
    | NormalizedTableColumnSimple<T, K>
    | NormalizedTableColumnCheckbox<T, K>
    | NormalizedTableColumnRadio<T, K>
    | NormalizedTableColumnText<T, K>
    | NormalizedTableColumnAnchor<T, K>
    | NormalizedTableColumnButton<T, K>
    | NormalizedTableColumnRender<T>
    | NormalizedTableColumnSelect<T, K>;

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

/**
 * @internal
 */
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

/**
 * @internal
 */
function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T, K> {
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
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                sortable: column.key,
            } satisfies NormalizedTableColumnCheckbox<T, K>;
        case "radio":
            return {
                type: "radio",
                header: column.header,
                value: getValueFn(column.value, column.key, Boolean, false),
                update: getUpdateFn(column.update, column.key),
                sortable: column.key,
            } satisfies NormalizedTableColumnRadio<T, K>;
        case "text":
            return {
                type: "text",
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
                update: getUpdateFn(column.update, column.key),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                validation: column.validation ?? {},
                sortable: column.key,
            } satisfies NormalizedTableColumnText<T, K>;
        case "anchor":
            return {
                type: "anchor",
                header: column.header,
                value: column.value,
                href: column.href,
                enabled:
                    typeof column.enabled === "function"
                        ? column.enabled
                        : () => Boolean(column.enabled ?? true),
                sortable: column.key,
            } satisfies NormalizedTableColumnAnchor<T, K>;
        case "button":
            return {
                type: "button",
                header: column.header,
                value: column.value,
                onClick: column.onClick,
                enabled:
                    typeof column.enabled === "function"
                        ? column.enabled
                        : () => Boolean(column.enabled ?? true),
                icon: column.icon,
                sortable: column.key,
            } satisfies NormalizedTableColumnButton<T, K>;
        case "select":
            return {
                type: "select",
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
                update: getUpdateFn(column.update, column.key),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                options: column.options,
                sortable: column.key,
            } satisfies NormalizedTableColumnSelect<T, K>;
        case undefined:
            return {
                type: undefined,
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
                sortable: column.key,
            } satisfies NormalizedTableColumnSimple<T, K>;
    }
}

/**
 * @public
 */
export function defineTableColumns<T, K extends keyof T = keyof T>(
    columns: Array<TableColumn<T, K>>,
): Array<TableColumn<T, K>> {
    return columns;
}

/**
 * @internal
 */
export function normalizeTableColumns<T, K extends keyof T = keyof T>(
    columns: Array<TableColumn<T, K>>,
): Array<NormalizedTableColumn<T, K>> {
    return columns.map(normalizeTableColumn);
}
