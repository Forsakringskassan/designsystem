import { type Component } from "vue";
import { type ValidatorConfigs } from "@fkui/logic";
import { type InputTypeNumber } from "../input-fields-config";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";
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
    parser?(this: void, value: string): number | string;
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
    editable(this: void, row: T): boolean;
}
