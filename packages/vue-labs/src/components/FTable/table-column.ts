import { type Ref, ref, toRef } from "vue";

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
    type TableColumnSize,
    type TableColumnText,
} from "./columns";
import {
    getFormattedNumberValueFn,
    getFormattedValueFn,
    getLabelFn,
    getUpdateFn,
    getValueFn,
} from "./columns/helpers";
import { getParsedNumberUpdateFn, getParsedUpdateFn } from "./get-update-fn";
import { type InputType, inputFieldConfig } from "./input-fields-config";

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

function noop(): void {
    /* do nothing */
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
                checked: getValueFn(column.checked, column.key, Boolean, false),
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
                checked: getValueFn(column.checked, column.key, Boolean, false),
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
                text: getValueFn(column.text, column.key, String, ""),
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
                text: getValueFn(column.text, column.key, String, ""),
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
                text: getValueFn(column.text, column.key, String, ""),
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
                selected: getValueFn(column.selected, column.key, String, ""),
                update: getUpdateFn(column.update, column.key),
                editable:
                    typeof column.editable === "function"
                        ? column.editable
                        : () => Boolean(column.editable ?? false),
                options: column.options,
                sortable: column.key ?? null,
                component: ITableSelect,
            } satisfies NormalizedTableColumnSelect<T, K>;
        case "menu":
            return {
                type: "menu",
                id: Symbol(),
                header: toRef(column.header),
                description,
                size,
                sortable: null,
                actions: (column.actions ?? []).map((it) => {
                    return {
                        label: it.label,
                        icon: it.icon ?? null,
                        onClick: it.onClick ?? noop,
                    };
                }),
                component: ITableMenu,
                text: getValueFn(column.text, undefined, String, ""),
                enabled:
                    typeof column.enabled === "function"
                        ? column.enabled
                        : () => Boolean(column.enabled ?? true),
            } satisfies NormalizedTableColumnMenu<T>;
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
