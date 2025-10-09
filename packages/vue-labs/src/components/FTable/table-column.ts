import { type ValidatorConfigs } from "@fkui/logic";
import { type Component, type VNode } from "vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableText from "./ITableText.vue";
import ITableSelect from "./ITableSelect.vue";
import ITableRowheader from "./ITableRowheader.vue";
import { type InputType } from "./input-fields-config";

/**
 * @public
 */
export interface TableColumnSimple<T, K extends keyof T> {
    /* eslint-disable-next-line sonarjs/no-redundant-optional -- this is used as
     * a discriminator in the union, for the simple column we are not expected
     * to set `type` at all but this simplifies the normalization */
    type?: undefined;
    header: string;
    key?: K;
    value?(row: T): string;
}

/**
 * @public
 */
export interface TableColumnRowHeader<T, K extends keyof T> {
    type: "rowheader";
    header: string;
    key?: K;
    value?(row: T): string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRowHeader<T, K> {
    readonly type: "rowheader";
    readonly header: string;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnRowHeader<T, K>;
    }>;
    value(row: T): string;
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
    readonly type: "checkbox";
    readonly header: string;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnCheckbox<T, K>;
    }>;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
    editable(row: T): boolean;
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
    readonly type: "radio";
    readonly header: string;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnRadio<T, K>;
    }>;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
}

interface TableColumnTextBase<TRow, TValue, K extends keyof TRow> {
    type: "text";
    subtype?: Exclude<InputType, "number" | "percent">;
    header: string;
    key?: K;
    value?(row: TRow): TValue;
    update?(row: TRow, newValue: TValue, oldValue: TValue): void;
    editable?: boolean | ((row: TRow) => boolean);
    validation?: ValidatorConfigs;
    parser?(value: string): TValue;
    formatter?(value: TValue | TRow[K]): string;
}

interface TableColumnTextDecimal<TRow, TValue, K extends keyof TRow>
    extends Omit<TableColumnTextBase<TRow, TValue, K>, "subtype"> {
    subtype: Extract<InputType, "number" | "percent">;
    decimals: number;
}

/**
 * @public
 */
export type TableColumnText<TRow, TValue, K extends keyof TRow> =
    | TableColumnTextBase<TRow, TValue, K>
    | TableColumnTextDecimal<TRow, TValue, K>;

/**
 * @internal
 */
export interface NormalizedTableColumnText<T, TValue, K> {
    readonly type: "text";
    readonly subtype: InputType;
    readonly decimals: number | undefined;
    readonly header: string;
    readonly validation: ValidatorConfigs;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnText<T, TValue, K>;
    }>;
    value(row: T): string;
    update(row: T, newValue: TValue, oldValue: TValue): void;
    editable(row: T): boolean;
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
    readonly type: "anchor";
    readonly header: string;
    readonly href: string;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnAnchor<T, K>;
    }>;
    value(row: T): string | null;
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
    readonly type: "button";
    readonly header: string;
    readonly icon: string | null;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnButton<T, K>;
    }>;
    value(row: T): string | null;
    onClick?(row: T): void;
    enabled(row: T): boolean;
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
    readonly type: "select";
    readonly header: string;
    readonly options: string[];
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnSelect<T, K>;
    }>;
    value(row: T): string;
    update(row: T, newValue: string, oldValue: string): void;
    editable(row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnRender<T, K> {
    header: string;
    key?: K;
    render(row: T): VNode | Component;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRender<T> {
    readonly type: undefined;
    readonly header: string;
    readonly sortable: boolean | null;
    render(row: T): VNode | Component;
}

/**
 * @public
 */
export type TableColumn<TRow, TValue, K extends keyof TRow = keyof TRow> =
    | TableColumnSimple<TRow, K>
    | TableColumnCheckbox<TRow, K>
    | TableColumnRadio<TRow, K>
    | TableColumnRowHeader<TRow, K>
    | TableColumnText<TRow, TValue, K>
    | TableColumnAnchor<TRow, K>
    | TableColumnButton<TRow, K>
    | TableColumnRender<TRow, K>
    | TableColumnSelect<TRow, K>;

/**
 * @internal
 */
export type NormalizedTableColumn<T, TValue, K> =
    | NormalizedTableColumnCheckbox<T, K>
    | NormalizedTableColumnRadio<T, K>
    | NormalizedTableColumnRowHeader<T, K>
    | NormalizedTableColumnText<T, TValue, K>
    | NormalizedTableColumnAnchor<T, K>
    | NormalizedTableColumnButton<T, K>
    | NormalizedTableColumnRender<T>
    | NormalizedTableColumnSelect<T, K>;

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
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

function getValueTextFn<TRow, TValue, K extends keyof TRow>(
    fn: ((row: TRow) => TValue) | undefined,
    key: K | undefined,
    formatter: (value: TValue | TRow[K]) => string,
    defaultValue: string,
): (row: TRow) => string {
    if (fn) {
        return (row: TRow): string => {
            const value = fn(row);
            return formatter(value);
        };
    }
    if (key) {
        return (row: TRow): string => {
            const value = row[key];
            return formatter(value);
        };
    }
    return () => defaultValue;
}

/**
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
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
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
function getUpdateTextFn<TRow, TValue, K extends keyof TRow>(
    fn: ((row: TRow, newValue: TValue, oldValue: TValue) => void) | undefined,
    key: K | undefined,
    parser: (value: string) => TValue,
): (row: TRow, newValue: string, oldValue: string) => void {
    if (fn) {
        return (row: TRow, newValue, oldValue): void => {
            const paresdNewValue = parser(newValue);
            const paresdOldValue = parser(oldValue);
            fn(row, paresdNewValue, paresdOldValue);
        };
    }
    if (key) {
        return (row: TRow, value): void => {
            const newValue = parser(value);
            row[key] = newValue as TRow[K]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}

/**
 * @internal
 */
export function normalizeTableColumn<
    TRow,
    TValue,
    K extends keyof TRow = keyof TRow,
>(
    column: TableColumnSimple<TRow, K> | TableColumnText<TRow, TValue, K>,
): NormalizedTableColumnText<TRow, TValue, K>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnRowHeader<T, K>,
): NormalizedTableColumnRowHeader<T, K>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnCheckbox<T, K>,
): NormalizedTableColumnCheckbox<T, K>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnRadio<T, K>,
): NormalizedTableColumnRadio<T, K>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnAnchor<T, K>,
): NormalizedTableColumnAnchor<T, K>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnButton<T, K>,
): NormalizedTableColumnButton<T, K>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnRender<T, K>,
): NormalizedTableColumnRender<T>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnSelect<T, K>,
): NormalizedTableColumnSelect<T, K>;
export function normalizeTableColumn<T, TValue, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T, TValue, K>;

/* eslint-disable-next-line complexity -- technical debt */
export function normalizeTableColumn<
    TRow,
    TValue,
    K extends keyof TRow = keyof TRow,
>(
    column: TableColumn<TRow, TValue, K>,
): NormalizedTableColumn<TRow, TValue, K> {
    if ("render" in column) {
        return {
            type: undefined,
            header: column.header,
            render: column.render,
            sortable: null,
        } satisfies NormalizedTableColumnRender<TRow>;
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
                sortable: column.key ?? null,
                component: ITableCheckbox,
            } satisfies NormalizedTableColumnCheckbox<TRow, K>;
        case "radio":
            return {
                type: "radio",
                header: column.header,
                value: getValueFn(column.value, column.key, Boolean, false),
                update: getUpdateFn(column.update, column.key),
                sortable: column.key ?? null,
                component: ITableRadio,
            } satisfies NormalizedTableColumnRadio<TRow, K>;
        case "text": {
            const defaultParser = (value: string): TValue => {
                return value as TValue;
            };
            return {
                type: "text",
                subtype: column.subtype ?? "text",
                header: column.header,
                decimals:
                    column.subtype === "number" || column.subtype === "percent"
                        ? column.decimals
                        : undefined,
                value: getValueTextFn(
                    column.value,
                    column.key,
                    column.formatter ? column.formatter.bind(column) : String,
                    "",
                ),
                update: getUpdateTextFn<TRow, TValue, K>(
                    column.update,
                    column.key,
                    column.parser ?? defaultParser,
                ),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                validation: column.validation ?? {},
                sortable: column.key ?? null,
                component: ITableText,
            } satisfies NormalizedTableColumnText<TRow, TValue, K>;
        }
        case "rowheader":
            return {
                type: "rowheader",
                header: column.header,
                value: getValueFn(column.value, column.key, String, ""),
                sortable: column.key ?? null,
                component: ITableRowheader,
            } satisfies NormalizedTableColumnRowHeader<TRow, K>;
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
                sortable: column.key ?? null,
                component: ITableAnchor,
            } satisfies NormalizedTableColumnAnchor<TRow, K>;
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
                icon: column.icon ?? null,
                sortable: column.key ?? null,
                component: ITableButton,
            } satisfies NormalizedTableColumnButton<TRow, K>;
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
                sortable: column.key ?? null,
                component: ITableSelect,
            } satisfies NormalizedTableColumnSelect<TRow, K>;
        case undefined:
            return {
                type: "text",
                header: column.header,
                subtype: "text",
                decimals: undefined,
                value: getValueFn(column.value, column.key, String, ""),
                update() {
                    /* do nothing */
                },
                editable: () => false,
                sortable: column.key ?? null,
                validation: {},
                component: ITableText,
            } satisfies NormalizedTableColumnText<TRow, TValue, K>;
    }
}

/**
 * @public
 */
export function defineTableColumns<
    Trow,
    TValue,
    K extends keyof Trow = keyof Trow,
>(
    columns: Array<TableColumn<Trow, TValue, K>>,
): Array<TableColumn<Trow, TValue, K>> {
    return columns;
}

/**
 * @internal
 */
export function normalizeTableColumns<T, TValue, K extends keyof T = keyof T>(
    columns: Array<TableColumn<T, TValue, K>>,
): Array<NormalizedTableColumn<T, TValue, K>> {
    return columns.map((column) => {
        return normalizeTableColumn(column);
    });
}
