import { type Component } from "vue";
import { type ValidatorConfigs } from "@fkui/logic";
import { type InputTypeNumber, inputFieldConfig } from "../input-fields-config";
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
import { type NormalizedTableColumnText } from "./text";

/**
 * @public
 */
export interface TableColumnNumber<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: InputTypeNumber;
    decimals?: number;
    key?: K;
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
    parser?(this: void, value: string): number | string | undefined;
    formatter?(this: void, value: number | string): string | undefined;
}

/**
 * @internal
 */
export interface NormalizedTableColumnNumber<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: InputTypeNumber;
    readonly decimals?: number;
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
    value(this: void, row: T): string | number;
    update(
        this: void,
        row: T,
        newValue: number | string,
        oldValue: number | string,
    ): void;
    parser(this: void, value: string): number | string | undefined;
    formatter(this: void, value: number | string): string | undefined;
    editable(this: void, row: T): boolean;
}

/**
 * @internal
 */
export function normalizeNumberColumn<T, K extends keyof T>(
    column: TableColumnNumber<T, K>,
): Omit<NormalizedTableColumnNumber<T, K>, OmittedNormalizedColumnProperties> {
    const type = column.type;
    const config = inputFieldConfig[type];
    const parser = column.parser ?? config.parser.bind(column);
    const formatter = column.formatter ?? config.formatter.bind(column);
    const decimals = type === "text:currency" ? 0 : column.decimals;
    return {
        type,
        label: getLabelFn(column.label),
        decimals,
        tnum: column.tnum ?? defaultTnumValue(type),
        align: column.align ?? "right",
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
