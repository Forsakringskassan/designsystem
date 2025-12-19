import { type Component, type Ref, type VNode, ref, toRef } from "vue";
import { type ValidatorConfigs } from "@fkui/logic";
import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import ITableRowheader from "./ITableRowheader.vue";
import ITableSelect from "./ITableSelect.vue";
import ITableText from "./ITableText.vue";
import {
    getParsedNumberUpdateFn,
    getParsedUpdateFn,
    getUpdateFn,
} from "./get-update-fn";
import {
    getFormattedNumberValueFn,
    getFormattedValueFn,
    getValueFn,
} from "./get-value-fn";
import {
    type InputType,
    type InputTypeNumber,
    type InputTypeText,
    inputFieldConfig,
} from "./input-fields-config";

/**
 * @public
 */
export type TableColumnSize = "grow" | "shrink";

/**
 * Union of all possible table column types.
 *
 * @internal
 */
export type TableColumnType =
    TableColumn<unknown, never> extends infer U
        ? U extends { type: infer T }
            ? T extends undefined
                ? never
                : T
            : never
        : never;

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
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    label?(this: void, row: T): string;
    value?(this: void, row: T): string;
}

/**
 * @public
 */
export interface TableColumnRowHeader<T, K extends keyof T> {
    type: "rowheader";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    value?(this: void, row: T): string;
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    value(this: void, row: T): string;
}

/**
 * @public
 */
export interface TableColumnCheckbox<T, K extends keyof T> {
    type: "checkbox";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    label?(this: void, row: T): string;
    value?(this: void, row: T): boolean;
    update?(this: void, row: T, newValue: boolean, oldValue: boolean): void;
    editable?: boolean | ((this: void, row: T) => boolean);
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    label(this: void, row: T): string;
    value(this: void, row: T): boolean;
    update(this: void, row: T, newValue: boolean, oldValue: boolean): void;
    editable(this: void, row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnRadio<T, K extends keyof T> {
    type: "radio";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    label?(this: void, row: T): string;
    value?(this: void, row: T): boolean;
    update?(this: void, row: T, newValue: boolean, oldValue: boolean): void;
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    label(this: void, row: T): string;
    value(this: void, row: T): boolean;
    update(this: void, row: T, newValue: boolean, oldValue: boolean): void;
}

/**
 * @public
 */
export interface TableColumnText<T, K extends keyof T> {
    type: InputTypeText;
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    label?(this: void, row: T): string;
    tnum?: boolean;
    align?: "left" | "right";
    value?(this: void, row: T): string;
    update?(this: void, row: T, newValue: string, oldValue: string): void;
    editable?: boolean | ((this: void, row: T) => boolean);
    validation?: ValidatorConfigs;
    parser?(this: void, value: string): string;
    formatter?(this: void, value: string): string;
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    label(this: void, row: T): string;
    value(this: void, row: T): string;
    update(this: void, row: T, newValue: string, oldValue: string): void;
    editable(this: void, row: T): boolean;
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
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    label?(this: void, row: T): string;
    tnum?: boolean;
    align?: "left" | "right";
    value?(this: void, row: T): string | number;
    update?(
        this: void,
        row: T,
        newValue: number | string,
        oldValue: number | string,
    ): void;
    editable?: boolean | ((this: void, row: T) => boolean);
    validation?: ValidatorConfigs;
    parser?(this: void, value: string): number | string;
    formatter?(this: void, value: number | string): string | undefined;
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    label(this: void, row: T): string;
    value(this: void, row: T): string | number;
    update(
        this: void,
        row: T,
        newValue: number | string,
        oldValue: number | string,
    ): void;
    editable(this: void, row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnAnchor<T, K extends keyof T> {
    type: "anchor";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    value(this: void, row: T): string | null;
    enabled?: boolean | ((this: void, row: T) => boolean);
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    value(this: void, row: T): string | null;
    enabled(this: void, row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnButton<T, K extends keyof T> {
    type: "button";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    value(this: void, row: T): string | null;
    onClick?(this: void, row: T): void;
    enabled?: boolean | ((this: void, row: T) => boolean);
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    value(this: void, row: T): string | null;
    onClick?(this: void, row: T): void;
    enabled(this: void, row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnSelect<T, K extends keyof T> {
    type: "select";
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    label?(this: void, row: T): string;
    value?(this: void, row: T): string;
    update?(this: void, row: T, newValue: string, oldValue: string): void;
    editable?: boolean | ((this: void, row: T) => boolean);
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    label(this: void, row: T): string;
    value(this: void, row: T): string;
    update(this: void, row: T, newValue: string, oldValue: string): void;
    editable(this: void, row: T): boolean;
}

/**
 * @public
 */
export interface TableColumnRender<T, K> {
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    key?: K;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    render(this: void, row: T): VNode | Component;
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
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    render(this: void, row: T): VNode | Component;
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

function getLabelFn<TRow>(
    fn: ((this: void, row: TRow) => string) | undefined,
): (this: void, row: TRow) => string {
    if (fn) {
        return fn;
    }
    return () => "";
}

/**
 * @internal
 */
export function defaultTnumValue(type: InputType): boolean {
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
export function isTextColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: string },
): column is TableColumnText<T, K> {
    if (!column.type) {
        return false;
    }

    return column.type.startsWith("text");
}

/**
 * @internal
 */
export function isEnableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: TableColumnType },
): column is TableColumnAnchor<T, K> | TableColumnButton<T, K> {
    if (!column.type) {
        return false;
    }

    return column.type === "anchor" || column.type === "button";
}

/**
 * @internal
 */
export function isEditableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: TableColumnType },
): column is
    | TableColumnCheckbox<T, K>
    | TableColumnText<T, K>
    | TableColumnSelect<T, K> {
    if (!column.type) {
        return false;
    }

    return (
        column.type === "checkbox" ||
        isTextColumn(column) ||
        column.type === "select"
    );
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
    const size: Readonly<Ref<TableColumnSize | null>> =
        typeof column.size !== "undefined" ? toRef(column.size) : ref("grow");
    if ("render" in column) {
        return {
            type: undefined,
            id: Symbol(),
            header: toRef(column.header),
            description,
            size,
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
                size,
                label: getLabelFn(column.label),
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
                size,
                label: getLabelFn(column.label),
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
            const parser = column.parser ?? config.parser.bind(column);
            const formatter = column.formatter ?? config.formatter.bind(column);
            const decimals = type === "text:currency" ? 0 : column.decimals;
            return {
                type,
                id: Symbol(),
                header: toRef(column.header),
                description,
                size,
                label: getLabelFn(column.label),
                decimals,
                tnum: column.tnum ?? defaultTnumValue(type),
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
        case "text:date":
        case "text:email":
        case "text:organisationsnummer":
        case "text:personnummer":
        case "text:phoneNumber":
        case "text:plusgiro":
        case "text:postalCode": {
            const type = column.type;
            const config = inputFieldConfig[type];
            const parser = column.parser ?? config.parser;
            const formatter = column.formatter ?? config.formatter;
            return {
                type,
                id: Symbol(),
                header: toRef(column.header),
                description,
                size,
                tnum: column.tnum ?? defaultTnumValue(type),
                align: column.align ?? "left",
                label: getLabelFn(column.label),
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
                size,
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
                size,
                value: getValueFn(column.value, column.key, String, ""),
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
                size,
                value: getValueFn(column.value, column.key, String, ""),
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
                size,
                label: getLabelFn(column.label),
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
                size,
                label: () => "",
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
