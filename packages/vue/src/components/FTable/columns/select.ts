import { type Component } from "vue";
import { type ValidatorConfigs } from "@fkui/logic";
import {
    type NormalizedTableColumnBase,
    type OmittedNormalizedColumnProperties,
    type TableColumnBase,
} from "./base";
import { getLabelFn, getUpdateFn, getValueFn } from "./helpers";

/**
 * @public
 */
export interface TableColumnSelect<
    T,
    K extends keyof T,
> extends TableColumnBase<T> {
    /** Column type */
    type: "select";
    key?: K;
    /** Validation rules applied to the selected value */
    validation?: ValidatorConfigs;
    /** Screenreader text */
    label?(this: void, row: T): string;
    selected?(this: void, row: T): string;
    update?(this: void, row: T, newValue: string, oldValue: string): void;
    /** List of options (strings or value/label objects) or a callback function */
    options:
        | Array<string | { value: string; label: string }>
        | ((
              this: void,
              row: T,
          ) => Array<string | { value: string; label: string }>);
    /** When enabled, the cells are editable. Default: `true` */
    editable?: boolean | ((this: void, row: T) => boolean);
}

/**
 * @internal
 */
export interface NormalizedTableColumnSelect<
    T,
    K,
> extends NormalizedTableColumnBase<T, K> {
    readonly type: "select";
    readonly options: (
        this: void,
        row: T,
    ) => Array<{ value: string; label: string }>;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnSelect<T, K>;
    }>;
    readonly validation: ValidatorConfigs;
    readonly hasValidation: boolean;
    label(this: void, row: T): string;
    selected(this: void, row: T): string;
    update(this: void, row: T, newValue: string, oldValue: string): void;
    editable(this: void, row: T): boolean;
}

/**
 * @internal
 */
export function normalizeSelectColumn<T, K extends keyof T>(
    column: TableColumnSelect<T, K>,
): Omit<NormalizedTableColumnSelect<T, K>, OmittedNormalizedColumnProperties> {
    return {
        type: "select",
        label: getLabelFn(column.label),
        selected: getValueFn(column.selected, column.key, String, ""),
        update: getUpdateFn(column.update, column.key),
        options: (row) => {
            const options =
                typeof column.options === "function"
                    ? column.options(row)
                    : column.options;

            return options.map((option) =>
                typeof option === "string"
                    ? { value: option, label: option }
                    : option,
            );
        },
        editable:
            typeof column.editable === "function"
                ? column.editable
                : () => Boolean(column.editable ?? true),
        validation: column.validation ?? {},
        hasValidation: Boolean(column.validation),
    };
}
