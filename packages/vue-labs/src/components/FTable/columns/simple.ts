import {
    type OmittedNormalizedColumnProperties,
    type TableColumnBase,
} from "./base";
import { getValueFn } from "./helpers";
import { type NormalizedTableColumnText } from "./text";

/**
 * @public
 */
export interface TableColumnSimple<
    T,
    K extends keyof T,
> extends TableColumnBase {
    /* eslint-disable-next-line sonarjs/no-redundant-optional -- this is used as
     * a discriminator in the union, for the simple column we are not expected
     * to set `type` at all but this simplifies the normalization */
    type?: undefined;
    key?: K;
    label?(this: void, row: T): string;
    value?(this: void, row: T): string;
}

/**
 * @internal
 */
export function normalizeSimpleColumn<T, K extends keyof T>(
    column: TableColumnSimple<T, K>,
): Omit<NormalizedTableColumnText<T, K>, OmittedNormalizedColumnProperties> {
    return {
        type: "text",
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
        hasValidation: false,
        formatter: (value) => value,
        parser: (value) => value,
    };
}
