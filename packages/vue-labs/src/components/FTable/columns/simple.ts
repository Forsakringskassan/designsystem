import { type TableColumnBase } from "./base";

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
