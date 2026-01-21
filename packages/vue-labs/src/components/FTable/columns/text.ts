import { type Component } from "vue";
import { type ValidatorConfigs } from "@fkui/logic";
import { type InputTypeText } from "../input-fields-config";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

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
    parser?(this: void, value: string): string;
    formatter?(this: void, value: string): string;
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
    editable(this: void, row: T): boolean;
}
