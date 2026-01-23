import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableMenu from "./ITableMenu.vue";
import ITableRadio from "./ITableRadio.vue";
import ITableRowheader from "./ITableRowheader.vue";
import ITableSelect from "./ITableSelect.vue";
import ITableText from "./ITableText.vue";
import {
    type NormalizedTableColumnAnchor,
    type NormalizedTableColumnButton,
    type NormalizedTableColumnCheckbox,
    type NormalizedTableColumnMenu,
    type NormalizedTableColumnNumber,
    type NormalizedTableColumnRadio,
    type NormalizedTableColumnRender,
    type NormalizedTableColumnRowHeader,
    type NormalizedTableColumnSelect,
    type NormalizedTableColumnText,
    type TableColumnAnchor,
    type TableColumnButton,
    type TableColumnCheckbox,
    type TableColumnMenu,
    type TableColumnNumber,
    type TableColumnRadio,
    type TableColumnRender,
    type TableColumnRowHeader,
    type TableColumnSelect,
    type TableColumnSimple,
    type TableColumnText,
    normalizeAnchorColumn,
    normalizeBaseColumn,
    normalizeButtonColumn,
    normalizeCheckboxColumn,
    normalizeMenuColumn,
    normalizeNumberColumn,
    normalizeRadioColumn,
    normalizeRenderColumn,
    normalizeRowHeaderColumn,
    normalizeSelectColumn,
    normalizeSimpleColumn,
    normalizeTextColumn,
} from "./columns";

export {
    type NormalizedTableColumnAnchor,
    type NormalizedTableColumnBase,
    type NormalizedTableColumnButton,
    type NormalizedTableColumnCheckbox,
    type NormalizedTableColumnMenu,
    type NormalizedTableColumnNumber,
    type NormalizedTableColumnRadio,
    type NormalizedTableColumnRender,
    type NormalizedTableColumnRowHeader,
    type NormalizedTableColumnSelect,
    type NormalizedTableColumnText,
    type TableColumnAnchor,
    type TableColumnBase,
    type TableColumnButton,
    type TableColumnCheckbox,
    type TableColumnMenu,
    type TableColumnNumber,
    type TableColumnRadio,
    type TableColumnRender,
    type TableColumnRowHeader,
    type TableColumnSelect,
    type TableColumnSimple,
    type TableColumnSize,
    type TableColumnText,
} from "./columns";

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
    | TableColumnSelect<T, K>
    | TableColumnMenu<T>;

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
    | NormalizedTableColumnSelect<T, K>
    | NormalizedTableColumnMenu<T>;

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
export function normalizeTableColumn<T>(
    column: TableColumnMenu<T>,
): NormalizedTableColumnMenu<T>;
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T, K>;

/* eslint-disable-next-line complexity -- technical debt */
export function normalizeTableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K>,
): NormalizedTableColumn<T, K> {
    const base = normalizeBaseColumn(column);
    if ("render" in column) {
        return {
            ...normalizeRenderColumn(column),
            ...base,
        } satisfies NormalizedTableColumnRender<T>;
    }
    switch (column.type) {
        case "checkbox":
            return {
                ...normalizeCheckboxColumn(column),
                ...base,
                component: ITableCheckbox,
            } satisfies NormalizedTableColumnCheckbox<T, K>;
        case "radio":
            return {
                ...normalizeRadioColumn(column),
                ...base,
                component: ITableRadio,
            } satisfies NormalizedTableColumnRadio<T, K>;
        case "text:currency":
        case "text:number":
        case "text:percent":
            return {
                ...normalizeNumberColumn(column),
                ...base,
                component: ITableText,
            } satisfies NormalizedTableColumnNumber<T, K>;
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
        case "text:postalCode":
            return {
                ...normalizeTextColumn(column),
                ...base,
                component: ITableText,
            } satisfies NormalizedTableColumnText<T, K>;
        case "rowheader":
            return {
                ...normalizeRowHeaderColumn(column),
                ...base,
                component: ITableRowheader,
            } satisfies NormalizedTableColumnRowHeader<T, K>;
        case "anchor":
            return {
                ...normalizeAnchorColumn(column),
                ...base,
                component: ITableAnchor,
            } satisfies NormalizedTableColumnAnchor<T, K>;
        case "button":
            return {
                ...normalizeButtonColumn(column),
                ...base,
                component: ITableButton,
            } satisfies NormalizedTableColumnButton<T, K>;
        case "select":
            return {
                ...normalizeSelectColumn(column),
                ...base,
                component: ITableSelect,
            } satisfies NormalizedTableColumnSelect<T, K>;
        case "menu":
            return {
                ...normalizeMenuColumn(column),
                ...base,
                component: ITableMenu,
            } satisfies NormalizedTableColumnMenu<T>;
        case undefined:
            return {
                ...normalizeSimpleColumn(column),
                ...base,
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
