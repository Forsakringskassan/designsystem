/**
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical
 * debt, should probably use keyof T or at least unknown, or try to migrate the
 * entire type to the builtin Partial */
export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
