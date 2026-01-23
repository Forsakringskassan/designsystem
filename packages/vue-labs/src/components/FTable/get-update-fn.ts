import { isSet } from "@fkui/logic";

/**
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
export function getParsedUpdateFn<TRow, K extends keyof TRow>(
    fn:
        | ((this: void, row: TRow, newValue: string, oldValue: string) => void)
        | undefined,
    key: K | undefined,
    parser: (value: string) => string | undefined,
): (this: void, row: TRow, newValue: string, oldValue: string) => void {
    if (fn) {
        return (row: TRow, newValue, oldValue): void => {
            const parsedNewValue = parser(newValue);
            const parsedOldValue = parser(oldValue);
            fn(row, parsedNewValue ?? newValue, parsedOldValue ?? oldValue);
        };
    }
    if (key) {
        return (row: TRow, value): void => {
            const newValue = parser(value);
            row[key] = (isSet(newValue) ? newValue : value) as TRow[K]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}

/**
 * @internal
 */
export function getParsedNumberUpdateFn<TRow>(
    fn:
        | ((
              this: void,
              row: TRow,
              newValue: number | string,
              oldValue: number | string,
          ) => void)
        | undefined,
    key: keyof TRow | undefined,
    parser: (value: string) => string | number | undefined,
): (this: void, row: TRow, newValue: string, oldValue: string) => void {
    if (fn) {
        return (row: TRow, newValue, oldValue): void => {
            const parsedNewValue = parser(newValue) ?? newValue;
            const parsedOldValue = parser(oldValue) ?? oldValue;
            fn(row, parsedNewValue, parsedOldValue);
        };
    }
    if (key) {
        return (row: TRow, value: string): void => {
            const newValue = parser(value);
            row[key] = (isSet(newValue) ? newValue : value) as TRow[keyof TRow]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}
