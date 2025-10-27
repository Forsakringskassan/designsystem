import { type Component, type Ref, type VNode, ref, toRef } from "vue";
import { type ValidatorConfigs, isSet } from "@fkui/logic";
import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import ITableRowheader from "./ITableRowheader.vue";
import ITableSelect from "./ITableSelect.vue";
import ITableText from "./ITableText.vue";
import {
    type InputType,
    type InputTypeNumber,
    type InputTypeText,
    type InputTypeTextConfig,
    inputFieldConfig,
} from "./input-fields-config";

/**
 * @public
 */
export interface TableColumnSimple<T, K extends keyof T> {
    /* eslint-disable-next-line sonarjs/no-redundant-optional -- this is used as
     * a discriminator in the union, for the simple column we are not expected
     * to set `type` at all but this simplifies the normalization */
    type?: undefined;
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    value?(row: T): string;
}

/**
 * @public
 */
export interface TableColumnRowHeader<T, K extends keyof T> {
    type: "rowheader";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    value?(row: T): string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRowHeader<T, K> {
    readonly type: "rowheader";
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
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
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
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
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
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
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    value?(row: T): boolean;
    update?(row: T, newValue: boolean, oldValue: boolean): void;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRadio<T, K> {
    readonly type: "radio";
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
    readonly sortable: K | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnRadio<T, K>;
    }>;
    value(row: T): boolean;
    update(row: T, newValue: boolean, oldValue: boolean): void;
}

/**
 * @public
 */
export interface TableColumnText<T, K extends keyof T> {
    type: InputTypeText;
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    tnum?: boolean;
    align?: "left" | "right";
    value?(row: T): string;
    update?(row: T, newValue: string, oldValue: string): void;
    editable?: boolean | ((row: T) => boolean);
    validation?: ValidatorConfigs;
    parser?(value: string): string;
    formatter?(value: string): string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnText<T, K> {
    readonly type: InputTypeText;
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
    readonly validation: ValidatorConfigs;
    readonly sortable: K | null;
    readonly tnum: boolean;
    readonly align: "left" | "right";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnText<T, K>;
    }>;
    value(row: T): string;
    update(row: T, newValue: string, oldValue: string): void;
    editable(row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnNumber<T, K extends keyof T> {
    type: InputTypeNumber;
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    decimals?: number;
    key?: K;
    tnum?: boolean;
    align?: "left" | "right";
    value?(row: T): string | number;
    update?(row: T, newValue: number | string, oldValue: number | string): void;
    editable?: boolean | ((row: T) => boolean);
    validation?: ValidatorConfigs;
    parser?(value: string): number | string;
    formatter?(value: number | string): string | undefined;
}

/**
 * @internal
 */
export interface NormalizedTableColumnNumber<T, K> {
    readonly type: InputTypeNumber;
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
    readonly decimals?: number;
    readonly validation: ValidatorConfigs;
    readonly sortable: K | null;
    readonly tnum: boolean;
    readonly align: "left" | "right";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnText<T, K>;
    }>;
    value(row: T): string | number;
    update(row: T, newValue: number | string, oldValue: number | string): void;
    editable(row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnAnchor<T, K extends keyof T> {
    type: "anchor";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
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
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
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
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
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
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
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
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
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
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
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
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    render(row: T): VNode | Component;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRender<T> {
    readonly type: undefined;
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
    readonly sortable: boolean | null;
    render(row: T): VNode | Component;
}

/**
 * @public
 */
export type TableColumn<T, K extends keyof T = keyof T> =
    | TableColumnSimple<T, K>
    | TableColumnCheckbox<T, K>
    | TableColumnRadio<T, K>
    | TableColumnRowHeader<T, K>
    | TableColumnText<T, K>
    | TableColumnNumber<T, K>
    | TableColumnAnchor<T, K>
    | TableColumnButton<T, K>
    | TableColumnRender<T, K>
    | TableColumnSelect<T, K>;

/**
 * @internal
 */
export type NormalizedTableColumn<T, K> =
    | NormalizedTableColumnCheckbox<T, K>
    | NormalizedTableColumnRadio<T, K>
    | NormalizedTableColumnRowHeader<T, K>
    | NormalizedTableColumnText<T, K>
    | NormalizedTableColumnNumber<T, K>
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
function getParsedUpdateFn<TRow, K extends keyof TRow>(
    fn: ((row: TRow, newValue: string, oldValue: string) => void) | undefined,
    key: K | undefined,
    parser: (value: string) => string | undefined,
): (row: TRow, newValue: string, oldValue: string) => void {
    if (fn) {
        return (row: TRow, newValue, oldValue): void => {
            const paresdNewValue = parser(newValue);
            const paresdOldValue = parser(oldValue);
            fn(row, paresdNewValue ?? newValue, paresdOldValue ?? oldValue);
        };
    }
    if (key) {
        return (row: TRow, value): void => {
            const newValue = parser(value);
            row[key] = (isSet(newValue) ? newValue : value) as TRow[K]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}

/**
 * @internal
 */

function getParsedNumberUpdateFn<TRow>(
    fn:
        | ((
              row: TRow,
              newValue: number | string,
              oldValue: number | string,
          ) => void)
        | undefined,
    key: keyof TRow | undefined,
    parser: (value: string) => string | number | undefined,
): (row: TRow, newValue: string, oldValue: string) => void {
    if (fn) {
        return (row: TRow, newValue, oldValue): void => {
            const paresdNewValue = parser(newValue) ?? newValue;
            const paresdOldValue = parser(oldValue) ?? oldValue;
            fn(row, paresdNewValue, paresdOldValue);
        };
    }
    if (key) {
        return (row: TRow, value: string): void => {
            const newValue = parser(value);
            row[key] = (isSet(newValue) ? newValue : value) as TRow[keyof TRow]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}

/**
 *  @internal
 */
function getFormattedValueFn<TRow>(
    fn: ((row: TRow) => string) | undefined,
    key: keyof TRow | undefined,
    formatter: (value: string) => string | undefined,
    defaultValue: string,
): (row: TRow) => string {
    if (fn) {
        return (row: TRow): string => {
            const value = fn(row);
            const result = formatter(value);
            return result ?? value;
        };
    }
    if (key) {
        return (row: TRow): string => {
            const value = row[key] as string;
            const result = formatter(value);

            return result ?? value;
        };
    }
    return () => defaultValue;
}

function getFormattedNumberValueFn<TRow>(
    fn: ((row: TRow) => string | number) | undefined,
    key: keyof TRow | undefined,
    formatter: (value: number | string) => string | undefined,
    defaultValue: string,
): (row: TRow) => string | number {
    if (fn) {
        return (row: TRow): string | number => {
            const value = fn(row);
            return formatter(value) ?? value;
        };
    }
    if (key) {
        return (row: TRow): string | number => {
            const value = row[key] as number;
            return formatter(value) ?? value;
        };
    }
    return () => defaultValue;
}

/**
 * @internal
 */
function isTnumType(type: InputType): boolean {
    const tnumTypes = [
        "text:bankAccountNumber",
        "text:bankgiro",
        "text:clearingNumber",
        "text:currency",
        "text:number",
        "text:organisationsnummer",
        "text:percent",
        "text:personnummer",
        "text:phoneNumber",
        "text:plusgiro",
        "text:postalCode",
    ];

    return tnumTypes.includes(type);
}

/**
 * @internal
 */
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnSimple<T, K> | TableColumnText<T, K>,
): NormalizedTableColumnText<T, K>;
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
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T, K>;

/* eslint-disable-next-line complexity -- technical debt */
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T, K> {
    const description =
        typeof column.description !== "undefined"
            ? toRef(column.description)
            : ref("");
    if ("render" in column) {
        return {
            type: undefined,
            id: Symbol(),
            header: toRef(column.header),
            description,
            render: column.render,
            sortable: null,
        } satisfies NormalizedTableColumnRender<T>;
    }
    switch (column.type) {
        case "checkbox":
            return {
                type: "checkbox",
                id: Symbol(),
                header: toRef(column.header),
                description,
                value: getValueFn(column.value, column.key, Boolean, false),
                update: getUpdateFn(column.update, column.key),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                sortable: column.key ?? null,
                component: ITableCheckbox,
            } satisfies NormalizedTableColumnCheckbox<T, K>;
        case "radio":
            return {
                type: "radio",
                id: Symbol(),
                header: toRef(column.header),
                description,
                value: getValueFn(column.value, column.key, Boolean, false),
                update: getUpdateFn(column.update, column.key),
                sortable: column.key ?? null,
                component: ITableRadio,
            } satisfies NormalizedTableColumnRadio<T, K>;
        case "text:currency":
        case "text:number":
        case "text:percent": {
            const type = column.type;
            const config = inputFieldConfig[type];
            const parser = column.parser ?? config.parser;
            const formatter = column.formatter ?? config.formatter.bind(column);
            const decimals = type === "text:currency" ? 0 : column.decimals;
            return {
                type,
                id: Symbol(),
                header: toRef(column.header),
                description,
                decimals,
                tnum: column.tnum ?? isTnumType(type),
                align: column.align ?? "right",
                value: getFormattedNumberValueFn(
                    column.value,
                    column.key,
                    formatter,
                    "",
                ),
                update: getParsedNumberUpdateFn(
                    column.update,
                    column.key,
                    parser,
                ),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                validation: column.validation ?? {},
                sortable: column.key ?? null,
                component: ITableText,
            } satisfies NormalizedTableColumnNumber<T, K>;
        }
        case "text":
        case "text:bankAccountNumber":
        case "text:bankgiro":
        case "text:clearingNumber":
        case "text:email":
        case "text:organisationsnummer":
        case "text:personnummer":
        case "text:phoneNumber":
        case "text:plusgiro":
        case "text:postalCode": {
            const type = column.type ?? "text";
            const config = inputFieldConfig[type] as InputTypeTextConfig;
            const parser = column.parser ?? config.parser;
            const formatter = column.formatter ?? config.formatter;
            return {
                type,
                id: Symbol(),
                header: toRef(column.header),
                description,
                tnum: column.tnum ?? isTnumType(type),
                align: column.align ?? "left",
                value: getFormattedValueFn(
                    column.value,
                    column.key,
                    formatter,
                    "",
                ),
                update: getParsedUpdateFn(column.update, column.key, parser),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                validation: column.validation ?? {},
                sortable: column.key ?? null,
                component: ITableText,
            } satisfies NormalizedTableColumnText<T, K>;
        }
        case "rowheader":
            return {
                type: "rowheader",
                id: Symbol(),
                header: toRef(column.header),
                description,
                value: getValueFn(column.value, column.key, String, ""),
                sortable: column.key ?? null,
                component: ITableRowheader,
            } satisfies NormalizedTableColumnRowHeader<T, K>;
        case "anchor":
            return {
                type: "anchor",
                id: Symbol(),
                header: toRef(column.header),
                description,
                value: column.value,
                href: column.href,
                enabled:
                    typeof column.enabled === "function"
                        ? column.enabled
                        : () => Boolean(column.enabled ?? true),
                sortable: column.key ?? null,
                component: ITableAnchor,
            } satisfies NormalizedTableColumnAnchor<T, K>;
        case "button":
            return {
                type: "button",
                id: Symbol(),
                header: toRef(column.header),
                description,
                value: column.value,
                onClick: column.onClick,
                enabled:
                    typeof column.enabled === "function"
                        ? column.enabled
                        : () => Boolean(column.enabled ?? true),
                icon: column.icon ?? null,
                sortable: column.key ?? null,
                component: ITableButton,
            } satisfies NormalizedTableColumnButton<T, K>;
        case "select":
            return {
                type: "select",
                id: Symbol(),
                header: toRef(column.header),
                description,
                value: getValueFn(column.value, column.key, String, ""),
                update: getUpdateFn(column.update, column.key),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                options: column.options,
                sortable: column.key ?? null,
                component: ITableSelect,
            } satisfies NormalizedTableColumnSelect<T, K>;
        case undefined:
            return {
                type: "text",
                id: Symbol(),
                header: toRef(column.header),
                description,
                tnum: false,
                align: "left",
                value: getValueFn(column.value, column.key, String, ""),
                update() {
                    /* do nothing */
                },
                editable: () => false,
                sortable: column.key ?? null,
                validation: {},
                component: ITableText,
            } satisfies NormalizedTableColumnText<T, K>;
    }
}

/**
 * @internal
 */
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnSimple<T, K> | TableColumnText<T, K>,
): TableColumnText<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnRowHeader<T, K>,
): TableColumnRowHeader<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnCheckbox<T, K>,
): TableColumnCheckbox<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnRadio<T, K>,
): TableColumnRadio<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnAnchor<T, K>,
): TableColumnAnchor<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnButton<T, K>,
): TableColumnButton<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnRender<T, K>,
): TableColumnRender<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumnSelect<T, K>,
): TableColumnSelect<T, K>;
export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): TableColumn<T, K>;

export function defineTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): TableColumn<T, K> {
    return column;
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
    return columns.map((column) => {
        return normalizeTableColumn(column);
    });
}
