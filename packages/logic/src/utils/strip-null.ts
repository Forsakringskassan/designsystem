/**
 * Implementation of Object.fromEntries() until we run a recent enough version
 * of NodeJS.
 *
 * @internal
 */
function fromEntries<T extends string | number | symbol, U>(
    iterable: Array<[T, U]>,
): Record<T, U> {
    return iterable.reduce(
        (obj, [key, value]) => {
            obj[key] = value;
            return obj;
        },
        {} as Record<T, U>,
    );
}

/** @public */
export function stripNull<T>(obj: T): T;

/** @public */
export function stripNull(obj: null): undefined;

/** @public */
export function stripNull(obj: number): number;

/** @public */
export function stripNull(obj: string): string;

/**
 * Recursively strips null from source parameter.
 *
 * - Literals string, numbers etc will be returned as-is.
 * - Literal `null` will return `undefined`
 * - Arrays with `null` be replace element with `undefined`, i.e. the length of
 *   the array is not modified.
 * - Object values with `null` will be removed, i.e. `hasOwnProperty(..)` will
 *   return `false`.
 *
 * @public
 * @param src - Source value
 * @returns A copy of the source parameter with any null stripped
 */
/* eslint-disable @typescript-eslint/no-explicit-any -- technical debt */
export function stripNull(src: unknown): any {
    /* handle literal null */
    if (src === null) {
        return undefined;
    }

    /* handle arrays recursively */
    if (Array.isArray(src)) {
        return src.map(stripNull);
    }

    /* handle pod literals such as string, number, etc */
    if (typeof src !== "object") {
        return src;
    }

    /* unpack object to a [key, value] array */
    const entries = Object.entries(src as Record<string | number | symbol, any>)
        /* filter out any entries where value is null */
        .filter(([, value]): boolean => value !== null)
        /* recursively replace values from the [key, value] array */
        .map(([key, value]): [string, any] => {
            return [key, stripNull(value)];
        });

    /* reconstruct a new object from the [key, value] array */
    return fromEntries(entries);
}
/* eslint-enable @typescript-eslint/no-explicit-any */
