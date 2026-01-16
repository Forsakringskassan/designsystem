import { type Component } from "vue";
import { type ValidatorConfigs } from "@fkui/logic";
import { type InputTypeText, inputFieldConfig } from "../input-fields-config";
import {
    type NormalizedTableColumnBase,
    type OmittedNormalizedColumnProperties,
    type TableColumnBase,
} from "./base";
import {
    defaultTnumValue,
    getLabelFn,
    getUpdateFn,
    getValueFn,
} from "./helpers";

/**
 * @public
 */
export interface TableColumnText<T, K extends keyof T> extends TableColumnBase {
    type: InputTypeText;
    key?: K;
    label?(this: void, row: T): string;
    tnum?: boolean;
    align?: "left" | "right";
    value?(this: void, row: T): string;
    update?(this: void, row: T, newValue: string, oldValue: string): void;
    editable?: boolean | ((this: void, row: T) => boolean);
    validation?: ValidatorConfigs;
    parser?(this: void, value: string): string | undefined;
    formatter?(this: void, value: string): string | undefined;
}

/**
 * @internal
 */
export interface NormalizedTableColumnText<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: InputTypeText;
    readonly validation: ValidatorConfigs;
    readonly hasValidation: boolean;
    readonly tnum: boolean;
    readonly align: "left" | "right";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnText<T, K>;
        activeErrorAnchor?: HTMLElement;
    }>;
    label(this: void, row: T): string;
    value(this: void, row: T): string;
    update(this: void, row: T, newValue: string, oldValue: string): void;
    parser(this: void, value: string): string | undefined;
    formatter(this: void, value: string): string | undefined;
    editable(this: void, row: T): boolean;
}

/**
 * @internal
 */
export function normalizeTextColumn<T, K extends keyof T>(
    column: TableColumnText<T, K>,
): Omit<NormalizedTableColumnText<T, K>, OmittedNormalizedColumnProperties> {
    const type = column.type;
    const config = inputFieldConfig[type];
    const parser = column.parser ?? config.parser;
    const formatter = column.formatter ?? config.formatter;
    return {
        type,
        tnum: column.tnum ?? defaultTnumValue(type),
        align: column.align ?? "left",
        label: getLabelFn(column.label),
        value: getValueFn(column.value, column.key, String, ""),
        update: getUpdateFn(column.update, column.key),
        editable:
            typeof column.editable === "function"
                ? column.editable
                : () => Boolean(column.editable ?? false),
        validation: column.validation ?? {},
        hasValidation:
            column.type.startsWith("text:") || Boolean(column.validation),
        sortable: column.key ?? null,
        formatter,
        parser,
    };
}
